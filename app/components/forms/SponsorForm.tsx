"use client";

import * as React from "react";

type State = {
  name: string;
  org: string;
  email: string;
  message: string;
  companyWebsite?: string; // honeypot
};

export default function SponsorForm() {
  const [state, setState] = React.useState<State>({
    name: "",
    org: "",
    email: "",
    message: "",
    companyWebsite: "", // honeypot
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string }>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!state.name.trim() || !state.org.trim() || !state.email.trim() || !state.message.trim()) {
      setStatus({ ok: false, msg: "Please fill in all required fields." });
      return;
    }
    if (!validEmail(state.email)) {
      setStatus({ ok: false, msg: "Please enter a valid email address." });
      return;
    }
    // honeypot
    if (state.companyWebsite && state.companyWebsite.trim().length > 0) {
      setStatus({ ok: true, msg: "Thanks! (spam filtered)" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/sponsor-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          organisation: state.org,
          email: state.email,
          message: state.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus({ ok: true, msg: "Thanks! We’ve received your message and will be in touch shortly." });
      setState({ name: "", org: "", email: "", message: "", companyWebsite: "" });
    } catch (err: any) {
      setStatus({
        ok: false,
        msg:
          err?.message ||
          "Unable to send right now. Please try again in a moment or email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-800">Name*</label>
          <input
            name="name"
            value={state.name}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-800">Organisation*</label>
          <input
            name="org"
            value={state.org}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Acme Ltd."
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-800">Email*</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={onChange}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="you@company.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-800">Message*</label>
        <textarea
          name="message"
          value={state.message}
          onChange={onChange}
          rows={5}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Tell us about your goals and how you’d like to partner…"
          required
        />
      </div>

      {/* Honeypot (hidden from users, visible to basic bots) */}
      <div className="hidden">
        <label>Company Website</label>
        <input
          type="text"
          name="companyWebsite"
          value={state.companyWebsite}
          onChange={onChange}
          autoComplete="off"
        />
      </div>

      {status && (
        <div
          className={`rounded-lg px-3 py-2 text-sm ${
            status.ok ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.msg}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-500 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>

      <p className="mt-2 text-xs text-neutral-500">
        By submitting, you agree to be contacted about sponsorship opportunities.
      </p>
    </form>
  );
}
