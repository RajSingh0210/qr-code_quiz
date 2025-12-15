import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const requiredEnv = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"] as const;

function getClient() {
  for (const key of requiredEnv) {
    if (!process.env[key]) {
      throw new Error(`Missing env ${key}`);
    }
  }

  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: { autoRefreshToken: false, persistSession: false },
    }
  );
}

type RequestBody = {
  fullName?: string;
  organizationName?: string;
  email?: string;
  phone?: string;
  score?: number;
  total?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    if (!body.fullName || !body.phone || typeof body.score !== "number" || typeof body.total !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const supabase = getClient();
    const table = process.env.SUPABASE_TABLE || "quiz_submissions";

    const { error } = await supabase.from(table).insert({
      created_at: new Date().toISOString(),
      full_name: body.fullName,
      organization_name: body.organizationName ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      score: body.score,
      total: body.total,
    });

    if (error) {
      console.error("Supabase insert error", error);
      return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Supabase submit failed", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

