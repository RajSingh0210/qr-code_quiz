import fs from "fs/promises";
import path from "path";

const CSV_PATH = path.join(process.cwd(), "scripts", "questions.csv");
const OUTPUT_PATH = path.join(process.cwd(), "src", "lib", "questions.ts");

function parseCsv(text) {
  const rows = [];
  let current = [];
  let value = "";
  let inQuotes = false;

  const flushValue = () => {
    current.push(value);
    value = "";
  };

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      flushValue();
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      // handle \r\n and \n
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      flushValue();
      if (current.length > 1 || current[0] !== "") rows.push(current);
      current = [];
      continue;
    }

    value += char;
  }

  flushValue();
  if (current.length > 1 || current[0] !== "") rows.push(current);
  return rows;
}

async function main() {
  const csvRaw = await fs.readFile(CSV_PATH, "utf8");
  const rows = parseCsv(csvRaw.trim());
  if (rows.length < 2) {
    throw new Error("CSV appears to be empty or missing data rows.");
  }

  const header = rows[0].map((h) => h.trim());
  const records = rows.slice(1).map((cells, index) => {
    const row = Object.fromEntries(
      header.map((key, i) => [key, (cells[i] ?? "").trim()])
    );

    const id = row["S. No."] ? `act-${row["S. No."].trim()}` : `act-${index + 1}`;
    const prompt = row.Question ?? "";
    const answer = (row["Correct Option"] ?? "").toLowerCase().trim() || "a";

    return {
      id,
      prompt,
      options: [
        { id: "a", label: row["Option A"] ?? "" },
        { id: "b", label: row["Option B"] ?? "" },
        { id: "c", label: row["Option C"] ?? "" },
        { id: "d", label: row["Option D"] ?? "" },
      ],
      answer,
    };
  });

  const fileContent = `export type Question = {
  id: string;
  prompt: string;
  options: { id: string; label: string }[];
  answer: string;
  helpText?: string;
};

export const ACTUARIAL_QUESTIONS: Question[] = ${JSON.stringify(records, null, 2)} as const;

export const QUESTIONS_PER_SESSION = 6;

export function pickRandomQuestions(list: Question[], count: number): Question[] {
  const pool = [...list];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
`;

  await fs.writeFile(OUTPUT_PATH, fileContent, "utf8");
  console.log(`Wrote ${records.length} questions to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

