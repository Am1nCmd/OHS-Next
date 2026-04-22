"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { outlets } from "@/lib/outlets";

const inputBase =
  "w-full h-11 px-4 rounded-xl border border-border bg-surface text-ink placeholder:text-muted/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    { status: "idle" }
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-primary-50 border border-primary/20 p-8 md:p-10 flex gap-4 items-start">
        <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
        <div>
          <h3 className="text-xl font-display text-ink">Message sent.</h3>
          <p className="mt-2 text-muted leading-relaxed">
            Thank you — a member of our team will be in touch within one working day. For anything urgent, reach us on WhatsApp.
          </p>
        </div>
      </div>
    );
  }

  const err = state.status === "error" ? state.errors ?? {} : {};

  return (
    <form action={formAction} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" name="name" error={err.name}>
          <input name="name" type="text" required className={inputBase} />
        </Field>
        <Field label="Email" name="email" error={err.email}>
          <input name="email" type="email" required className={inputBase} />
        </Field>
        <Field label="Phone" name="phone" error={err.phone}>
          <input name="phone" type="tel" required className={inputBase} />
        </Field>
        <Field label="Preferred outlet" name="outlet">
          <select name="outlet" className={inputBase} defaultValue="">
            <option value="">No preference</option>
            {outlets.map((o) => (
              <option key={o.slug} value={o.name}>
                {o.name}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Primary concern" name="concern">
        <input
          name="concern"
          type="text"
          placeholder="e.g. thinning crown, oily scalp"
          className={inputBase}
        />
      </Field>
      <Field label="How can we help?" name="message" error={err.message}>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputBase} h-auto py-3 resize-none`}
        />
      </Field>

      {state.status === "error" && state.message && (
        <div className="flex gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          <AlertCircle className="size-4 mt-0.5" />
          {state.message}
        </div>
      )}

      <div className="mt-2">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span className="block mt-1 text-xs text-red-700" id={`${name}-error`}>
          {error}
        </span>
      )}
    </label>
  );
}
