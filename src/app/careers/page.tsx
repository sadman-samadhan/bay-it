import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { benefits, culture } from "@/data/content";
import { company } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { JobBoard } from "@/components/interactive/JobBoard";

export const metadata: Metadata = {
  title: "Careers",
  description: `Explore your future at ${company.name}: real estate operations, back-office and software roles in Dhaka.`,
};

export default function CareersPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Careers" }]} eyebrow="We're hiring" title="Explore your future with us" description="Join a team where everyone can thrive: flat hierarchy, clear communication, and full ownership and responsibility." />
      <Section>
        <SectionHeading eyebrow="Our culture" title="We create an environment where everyone can thrive" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="rounded-2xl border border-ink-100 p-7">
              <Icon name={c.iconName} className="h-8 w-8 text-brand-500" />
              <h3 className="mt-5 text-lg font-bold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading align="left" eyebrow="Benefits" title="We take care of our people" className="mb-6" />
            <ul className="space-y-3">
              {benefits.map((b) => <li key={b} className="flex gap-3 font-medium text-ink-800"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" />{b}</li>)}
            </ul>
          </div>
          <div id="openings">
            <h2 className="mb-6 text-3xl font-bold text-ink-950">Open positions</h2>
            <JobBoard />
          </div>
        </div>
      </Section>
    </>
  );
}
