import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand, IndustriesGrid, StatesMarquee } from "@/components/home/Blocks";

export const metadata: Metadata = {
  title: "Industries",
  description: "Specialists in US real estate operations: property preservation, REO, SFR, property management and rehab, plus fintech, retail, healthcare and logistics.",
};

const realEstate = [
  { title: "Property preservation & REO", points: ["Work order processing", "Photo QC to investor guidelines", "Bids, invoices & chargebacks", "Vendor dispatch & follow-up"] },
  { title: "Single-family rental & BTR", points: ["Turn coordination", "Maintenance ticket triage", "Resident communication", "Portfolio reporting"] },
  { title: "Rehab & investors", points: ["Scopes & budgets", "Contractor bid levelling", "Draw audits", "Schedule tracking"] },
  { title: "Property & asset managers", points: ["Lease & document admin", "AP/AR for property LLCs", "Vendor compliance", "Owner reporting"] },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Industries" }]} eyebrow="Where we specialise" title="Domain experts in US real estate operations" description="Most of our team has worked inside preservation, maintenance and rehab operations. We also bring that process discipline to other industries." />
      <StatesMarquee />
      <Section>
        <SectionHeading eyebrow="Real estate" title="Every department of the property lifecycle" />
        <div className="grid gap-6 md:grid-cols-2">
          {realEstate.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.06} className="rounded-3xl border border-ink-100 p-8">
              <div className="font-mono text-xs text-brand-500">0{i + 1}</div>
              <h3 className="mt-2 text-2xl font-bold text-ink-950">{r.title}</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {r.points.map((p) => <li key={p} className="flex gap-2.5 text-sm font-medium text-ink-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="All industries" title="Who we work with" />
        <IndustriesGrid />
      </Section>
      <CTABand title="Don't see your industry?" text="If your business runs on repeatable processes, documents and data, we can probably help. Tell us how you work." />
    </>
  );
}
