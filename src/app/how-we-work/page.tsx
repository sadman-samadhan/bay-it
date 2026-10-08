import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { SavingsCalculator } from "@/components/interactive/SavingsCalculator";
import { CTABand, EngagementCards } from "@/components/home/Blocks";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "How We Work & Pricing",
  description: "Dedicated teams, managed services and fixed-scope projects: transparent pricing, a 2-week pilot and a structured onboarding process.",
};

const compare: [string, (boolean | string)[]][] = [
  ["Best for", ["Ongoing operations", "High, variable volume", "Software builds"]],
  ["Pricing", ["Monthly per specialist", "Per order / transaction", "Fixed, milestone-based"]],
  ["Works in your tools & hours", [true, true, true]],
  ["Team lead & QA included", [true, true, true]],
  ["Guaranteed SLAs", ["Optional", true, "Per milestone"]],
  ["Scale up / down monthly", [true, true, false]],
  ["Code / IP ownership", ["Yours", "Yours", "Yours"]],
];

const security = [
  "NDA signed by every team member",
  "Role-based, revocable system access",
  "Company-managed, monitored devices",
  "Access-controlled office & clean-desk policy",
  "Encrypted file sharing; no USB storage",
  "Background-verified hires",
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "How We Work" }]} eyebrow="Engagement & pricing" title="Simple, transparent ways to work together" description="No hidden fees. Start with a short pilot, then scale on a model that fits your volume and budget." />
      <Section>
        <EngagementCards />
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Compare" title="Which model is right for you?" />
        <div className="overflow-x-auto rounded-2xl border border-ink-100 bg-white">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead><tr className="border-b border-ink-100 bg-ink-50/60">{["", "Dedicated Team", "Managed Service", "Fixed-Scope Project"].map((h) => <th key={h} className="p-5 font-display font-bold text-ink-950">{h}</th>)}</tr></thead>
            <tbody>
              {compare.map(([k, vals]) => (
                <tr key={k} className="border-b border-ink-50 last:border-0">
                  <td className="p-5 font-semibold text-ink-700">{k}</td>
                  {vals.map((v, i) => <td key={i} className="p-5">{v === true ? <Check className="h-5 w-5 text-brand-500" /> : v === false ? <Minus className="h-5 w-5 text-ink-200" /> : <span className="text-ink-700">{v}</span>}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading dark eyebrow="Process" title="Five steps from first call to a scaled team" />
          <ProcessTimeline />
        </div>
      </section>
      <Section id="calculator">
        <SectionHeading eyebrow="Savings calculator" title="Estimate your savings" description="Indicative only. We'll send an exact proposal after a 30-minute call." />
        <SavingsCalculator />
      </Section>
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading align="left" eyebrow="Security & confidentiality" title="Your data is treated like our own" description="We work inside client systems every day, so security is built into how we hire, equip and supervise our teams." className="mb-0" />
          <Reveal className="grid gap-3 sm:grid-cols-2">
            {security.map((s) => <div key={s} className="flex gap-3 rounded-2xl bg-white p-5 text-sm font-semibold text-ink-800 shadow-sm"><Check className="h-5 w-5 shrink-0 text-brand-500" />{s}</div>)}
          </Reveal>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
