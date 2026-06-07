"use client";

import { useState } from "react";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  code: "+1",
  phone: "",
  message: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (key: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to send message.");
      }

      // Clear the form on success.
      setForm(emptyForm);
      setAgreed(false);
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="First Name">
          <input
            type="text"
            required
            value={form.firstName}
            onChange={set("firstName")}
            placeholder="Enter First Name"
            className={inputClass}
          />
        </Field>
        <Field label="Last Name">
          <input
            type="text"
            required
            value={form.lastName}
            onChange={set("lastName")}
            placeholder="Enter Last Name"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email">
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="Enter your Email"
            className={inputClass}
          />
        </Field>
        <Field label="Phone Number">
          <div className="flex gap-2">
            <select
              aria-label="Country code"
              value={form.code}
              onChange={set("code")}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm text-zinc-300 outline-none focus:border-brand/60"
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+234">🇳🇬 +234</option>
            </select>
            <input
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="Enter Phone Number"
              className={`${inputClass} flex-1`}
            />
          </div>
        </Field>
      </div>

      <Field label="Message">
        <textarea
          rows={5}
          required
          value={form.message}
          onChange={set("message")}
          placeholder="Enter your Message"
          className={`${inputClass} resize-none`}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-sm text-zinc-400">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-transparent accent-brand"
          />
          I agree with Terms of Use and Privacy Policy
        </label>
        <button
          type="submit"
          disabled={!agreed || sending}
          className="rounded-md bg-brand px-8 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? "Sending…" : "Send"}
        </button>
      </div>

      {status === "sent" && (
        <p className="text-sm text-brand">
          Thanks for reaching out — your message has been sent. We&apos;ll get
          back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand/60";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-zinc-300">{label}</label>
      {children}
    </div>
  );
}
