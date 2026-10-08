"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarClock, Check, CheckCircle2, Globe2, Mail } from "lucide-react";
import { pillars, services, type PillarId } from "@/data/services";
import { company } from "@/data/company";
import { composeMessage, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { formatIn, nextWeekdays, TIMEZONES, zonedToInstant } from "@/lib/time";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { cn } from "@/lib/utils";

const STEPS = ["Needs", "Scope", "Discovery call", "Contact", "Review"];
const MODELS = ["Dedicated team", "Managed service (per order)", "Fixed-scope project", "Not sure yet"];
const BUDGETS = ["Under $5k / month", "$5k – $15k / month", "$15k – $50k / month", "$50k+ / month", "To be discussed"];
const TIMELINES = ["As soon as possible", "Within 1 month", "1 – 3 months", "Just exploring"];
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16];

export function ProjectBrief({ initialService, initialTeam }: { initialService?: string; initialTeam?: string }) {
  const preset = services.find((s) => s.slug === initialService);
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [f, setF] = useState({
    pillars: (preset ? [preset.pillar] : initialTeam ? ["real-estate-ops"] : []) as PillarId[],
    services: preset ? [preset.slug] : ([] as string[]),
    model: initialTeam ? MODELS[0] : "",
    budget: "",
    timeline: "",
    team: initialTeam ?? "",
    tz: "America/New_York",
    date: "",
    hour: 0,
    skipCall: false,
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "United States",
    message: "",
  });
  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => {
    setF((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const days = useMemo(() => nextWeekdays(7), []);
  const slot = f.date && f.hour ? zonedToInstant(f.date, f.hour, f.tz) : null;
  const slotText = slot
    ? `${formatIn(slot, f.tz, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })} (${TIMEZONES.find((t) => t.id === f.tz)?.label}) = ${formatIn(slot, "Asia/Dhaka", { hour: "numeric", minute: "2-digit", weekday: "short" })} Dhaka`
    : "";

  const validate = () => {
    const e: Record<string, string> = {};
    if (step === 0 && !f.pillars.length) e.pillars = "Choose at least one area.";
    if (step === 1 && !f.model) e.model = "Choose how you'd like to work with us.";
    if (step === 2 && !f.skipCall && !slot) e.slot = "Pick a date and time, or choose to skip the call.";
    if (step === 3) {
      if (f.name.trim().length < 2) e.name = "Please enter your name.";
      if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid work email.";
    }
    setErrors(e);
    return !Object.keys(e).length;
  };

  const body = composeMessage(`New project brief — ${company.name}`, {
    Areas: f.pillars.map((p) => pillars.find((x) => x.id === p)?.title).join(", "),
    Services: f.services.map((s) => services.find((x) => x.slug === s)?.title).join(", "),
    "Team (from calculator)": f.team,
    "Engagement model": f.model,
    Budget: f.budget,
    Timeline: f.timeline,
    "Discovery call": f.skipCall ? "Skip — email me" : slotText,
    Name: f.name,
    Email: f.email,
    Company: f.company,
    Phone: f.phone,
    Country: f.country,
    Notes: f.message,
  });

  const send = (via: "email" | "whatsapp") => {
    if (via === "email") window.location.href = mailtoUrl(`Project brief: ${f.company || f.name}`, body, company.salesEmail);
    else window.open(whatsappUrl(body), "_blank");
    setSent(true);
  };

  const input = (k: string) =>
    cn("mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10", errors[k] ? "border-red-400" : "border-ink-200");
  const err = (k: string) => (errors[k] ? <p className="mt-2 text-xs font-medium text-red-500">{errors[k]}</p> : null);
  const chip = (on: boolean) =>
    cn("rounded-xl border px-4 py-2.5 text-sm font-semibold transition", on ? "border-brand-500 bg-brand-50 text-brand-700 ring-4 ring-brand-500/10" : "border-ink-200 text-ink-700 hover:border-ink-400");

  if (sent) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="h-10 w-10" />
        </motion.span>
        <h3 className="mt-6 text-2xl font-bold text-ink-950">Your brief is ready to send</h3>
        <p className="mt-3 max-w-md text-ink-500">Once it reaches us, a solutions lead will reply within one business day{slotText && !f.skipCall ? " with a calendar invite for your chosen slot" : ""}.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-brand-600 underline">Edit brief</button>
      </div>
    );
  }

  return (
    <div>
      <ol className="mb-8 grid grid-cols-5 gap-2">
        {STEPS.map((s, i) => (
          <li key={s}>
            <div className={cn("h-1.5 rounded-full transition-colors", i <= step ? "bg-gradient-to-r from-brand-500 to-accent-400" : "bg-ink-100")} />
            <div className={cn("mt-2 hidden font-mono text-[10px] uppercase tracking-wider sm:block", i === step ? "text-ink-900" : "text-ink-400")}>{s}</div>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
          {step === 0 && (
            <div>
              <h3 className="text-xl font-bold text-ink-950">What can we help you with?</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {pillars.map((p) => {
                  const on = f.pillars.includes(p.id);
                  return (
                    <button key={p.id} onClick={() => set("pillars", toggle(f.pillars, p.id))} className={cn("relative rounded-2xl border p-5 text-left transition", on ? "border-brand-500 bg-brand-50 ring-4 ring-brand-500/10" : "border-ink-200 hover:border-ink-400")}>
                      {on && <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-white"><Check className="h-3.5 w-3.5" /></span>}
                      <Icon name={p.iconName} className="h-6 w-6 text-brand-600" />
                      <div className="mt-3 font-bold text-ink-950">{p.title}</div>
                      <div className="mt-1 text-xs text-ink-500">{p.blurb}</div>
                    </button>
                  );
                })}
              </div>
              {err("pillars")}
              {f.pillars.length > 0 && (
                <div className="mt-7">
                  <div className="text-sm font-bold text-ink-900">Specific services <span className="font-normal text-ink-400">(optional)</span></div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.filter((s) => f.pillars.includes(s.pillar)).map((s) => {
                      const on = f.services.includes(s.slug);
                      return (
                        <button key={s.slug} onClick={() => set("services", toggle(f.services, s.slug))} className={cn("inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition", on ? "border-brand-500 bg-brand-500 text-white" : "border-ink-200 text-ink-600 hover:border-ink-400")}>
                          {on && <Check className="h-3 w-3" />} {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-7">
              {f.team && <div className="rounded-xl bg-accent-50 p-4 text-sm text-accent-700"><strong>From the savings calculator:</strong> {f.team}</div>}
              <div>
                <div className="text-sm font-bold text-ink-900">How would you like to work?</div>
                <div className="mt-3 flex flex-wrap gap-2">{MODELS.map((m) => <button key={m} onClick={() => set("model", m)} className={chip(f.model === m)}>{m}</button>)}</div>
                {err("model")}
              </div>
              <div>
                <div className="text-sm font-bold text-ink-900">Budget range</div>
                <div className="mt-3 flex flex-wrap gap-2">{BUDGETS.map((m) => <button key={m} onClick={() => set("budget", m)} className={chip(f.budget === m)}>{m}</button>)}</div>
              </div>
              <div>
                <div className="text-sm font-bold text-ink-900">When do you want to start?</div>
                <div className="mt-3 flex flex-wrap gap-2">{TIMELINES.map((m) => <button key={m} onClick={() => set("timeline", m)} className={chip(f.timeline === m)}>{m}</button>)}</div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-ink-950"><CalendarClock className="h-5 w-5 text-brand-500" /> Book a 30-minute discovery call</h3>
                  <p className="mt-1 text-sm text-ink-500">Pick a time in your time zone. We&apos;ll show you the Dhaka time too.</p>
                </div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                  <Globe2 className="h-4 w-4 text-ink-400" />
                  <select value={f.tz} onChange={(e) => set("tz", e.target.value)} className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm outline-none focus:border-brand-500" aria-label="Your time zone">
                    {TIMEZONES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                  </select>
                </label>
              </div>
              <div className={cn("transition", f.skipCall && "pointer-events-none opacity-40")}>
                <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
                  {days.map((d) => (
                    <button key={d.iso} onClick={() => set("date", d.iso)} className={cn("flex w-[72px] shrink-0 flex-col items-center rounded-xl border py-3 transition", f.date === d.iso ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 hover:border-ink-400")}>
                      <span className="text-[11px] font-semibold opacity-60">{d.day}</span>
                      <span className="font-display text-xl font-bold">{d.date}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {HOURS.map((h) => (
                    <button key={h} onClick={() => set("hour", h)} className={chip(f.hour === h)}>
                      {h > 12 ? h - 12 : h}:00 {h >= 12 ? "PM" : "AM"}
                    </button>
                  ))}
                </div>
                {slot && (
                  <div className="mt-4 rounded-xl bg-brand-50 p-4 text-sm text-brand-800">
                    <strong>Your slot:</strong> {slotText}
                  </div>
                )}
              </div>
              <label className="flex items-center gap-3 text-sm text-ink-700">
                <input type="checkbox" checked={f.skipCall} onChange={(e) => set("skipCall", e.target.checked)} className="h-4 w-4 accent-brand-500" />
                Skip the call, just email me a proposal
              </label>
              {err("slot")}
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-bold text-ink-900">Full name<input value={f.name} onChange={(e) => set("name", e.target.value)} className={input("name")} autoComplete="name" />{err("name")}</label>
              <label className="text-sm font-bold text-ink-900">Work email<input type="email" value={f.email} onChange={(e) => set("email", e.target.value)} className={input("email")} autoComplete="email" />{err("email")}</label>
              <label className="text-sm font-bold text-ink-900">Company<input value={f.company} onChange={(e) => set("company", e.target.value)} className={input("company")} autoComplete="organization" /></label>
              <label className="text-sm font-bold text-ink-900">Phone <span className="font-normal text-ink-400">(optional)</span><input value={f.phone} onChange={(e) => set("phone", e.target.value)} className={input("phone")} autoComplete="tel" /></label>
              <label className="text-sm font-bold text-ink-900 sm:col-span-2">Country
                <select value={f.country} onChange={(e) => set("country", e.target.value)} className={input("country")}>
                  {["United States", "Canada", "United Kingdom", "Australia", "UAE", "Bangladesh", "Other"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="text-sm font-bold text-ink-900 sm:col-span-2">Anything else we should know?
                <textarea rows={4} value={f.message} onChange={(e) => set("message", e.target.value)} className={cn(input("message"), "resize-none")} placeholder="Current volumes, tools you use, pain points…" />
              </label>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold text-ink-950">Review your brief</h3>
              <pre className="mt-4 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-ink-950 p-5 font-mono text-xs leading-relaxed text-ink-100">{body}</pre>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button onClick={() => send("email")} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 font-semibold text-white hover:bg-brand-600"><Mail className="h-4 w-4" /> Send via email</button>
                <button onClick={() => send("whatsapp")} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-ink-200 font-semibold text-ink-900 hover:border-ink-900"><WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Send via WhatsApp</button>
              </div>
              <p className="mt-3 text-xs text-ink-400">We sign NDAs before any detailed discussion. Your information is never shared.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between border-t border-ink-100 pt-5">
        <button onClick={() => setStep((s) => Math.max(0, s - 1))} className={cn("inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-ink-900", step === 0 && "invisible")}>
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        {step < 4 && (
          <button onClick={() => validate() && setStep((s) => s + 1)} className="inline-flex h-11 items-center gap-2 rounded-xl bg-ink-950 px-6 text-sm font-semibold text-white hover:bg-ink-800">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
