"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.string().email("That email address doesn't look right"),
  phone: z.string().min(6, "Please include a contact number"),
  outlet: z.string().optional(),
  concern: z.string().optional(),
  message: z.string().min(10, "A short message helps us prepare"),
});

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errors?: Record<string, string>; message?: string };

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    outlet: formData.get("outlet"),
    concern: formData.get("concern"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { status: "error", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No email provider configured — succeed silently so the form still works
    // locally and on preview deploys. Swap in Resend before production.
    return { status: "success" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Oriental Hair Solutions <noreply@orientalhairsolutions.com>",
        to: ["hello@orientalhairsolutions.com"],
        reply_to: parsed.data.email,
        subject: `New enquiry from ${parsed.data.name}`,
        text: [
          `Name: ${parsed.data.name}`,
          `Email: ${parsed.data.email}`,
          `Phone: ${parsed.data.phone}`,
          `Preferred outlet: ${parsed.data.outlet || "—"}`,
          `Concern: ${parsed.data.concern || "—"}`,
          "",
          parsed.data.message,
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      return {
        status: "error",
        message: "We couldn't send your message. Please try again or WhatsApp us.",
      };
    }
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "We couldn't send your message. Please try again or WhatsApp us.",
    };
  }
}
