"use client";

import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { company } from "@/data/company";
import { composeMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof f, v: string) => {
    setF((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (via: "email" | "whatsapp") => {
    const e: Record<string, string> = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email.";
    if (f.message.trim().length < 10) e.message = "Please add a few more details.";
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = composeMessage(`Website enquiry — ${company.name}`, { Name: f.name, Email: f.email, Subject: f.subject, Message: f.message });
    if (via === "email") window.location.href = mailtoUrl(f.subject || "Website enquiry", body);
    else window.open(whatsappUrl(body), "_blank");
    setSent(true);
  };

  const input = (k: string) =>
    cn("mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10", errors[k] ? "border-red-400" : "border-ink-200");
  const err = (k: string) => (errors[k] ? <p className="mt-1.5 text-xs font-medium text-red-500">{errors[k]}</p> : null);

  if (sent)
    return (
      <div className="flex flex-col items-center rounded-3xl border border-ink-100 bg-white p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-brand-500" />
        <h3 className="mt-5 text-2xl font-bold text-ink-950">Information ready to send</h3>
        <p className="mt-2 text-ink-500">Once your message reaches us, we&apos;ll get back to you within one business day.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-brand-600 underline">Send another message</button>
      </div>
    );

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit("email"); }} noValidate className="rounded-3xl border border-ink-100 bg-white p-6 shadow-xl shadow-ink-950/5 sm:p-10">
      <h2 className="text-2xl font-bold text-ink-950">Get in touch</h2>
      <p className="mt-1 text-sm text-ink-500">We&apos;d love to hear from you. We reply within a day.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-ink-900">Name<input value={f.name} onChange={(e) => set("name", e.target.value)} className={input("name")} autoComplete="name" />{err("name")}</label>
        <label className="text-sm font-bold text-ink-900">Email<input type="email" value={f.email} onChange={(e) => set("email", e.target.value)} className={input("email")} autoComplete="email" />{err("email")}</label>
        <label className="text-sm font-bold text-ink-900 sm:col-span-2">Subject<input value={f.subject} onChange={(e) => set("subject", e.target.value)} className={input("subject")} /></label>
        <label className="text-sm font-bold text-ink-900 sm:col-span-2">Message<textarea rows={5} value={f.message} onChange={(e) => set("message", e.target.value)} className={cn(input("message"), "resize-none")} placeholder="Write your message" />{err("message")}</label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 font-semibold text-white hover:bg-brand-600"><Mail className="h-4 w-4" /> Send message</button>
        <button type="button" onClick={() => submit("whatsapp")} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink-200 font-semibold text-ink-900 hover:border-ink-900"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp instead</button>
      </div>
    </form>
  );
}
