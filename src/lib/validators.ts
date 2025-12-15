import { z } from "zod";

const optionalString = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value === "" ? undefined : value));

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required."),
  organizationName: optionalString,
  email: optionalString.pipe(z.string().email().optional()),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .min(7, "Phone number looks too short.")
    .max(20, "Phone number looks too long.")
    .regex(/^[0-9+\-\s()]+$/, "Phone number can only contain digits and symbols."),
});

export type ContactSchema = z.infer<typeof contactSchema>;

