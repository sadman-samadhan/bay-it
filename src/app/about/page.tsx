import type { Metadata } from "next";
import { Compass, HeartHandshake, Lightbulb, Sprout, Target, Users } from "lucide-react";
import { company } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand, StatsBand, WhyUsGrid } from "@/components/home/Blocks";

export const metadata: Metadata = {
  title: "About Us",
  description: `${company.name} is an ITES, BPO and software company based in Dhaka, Bangladesh, serving US real estate and global businesses since ${company.founded}.`,
};

const values = [
  { Icon: HeartHandshake, title: "Compassion", text: "We treat our clients' problems and our colleagues' growth as our own." },
  { Icon: Lightbulb, title: "Innovation", text: "We question every manual step and automate what we can." },
  { Icon: Users, title: "Accessibility", text: "Clear communication, overlapping hours and leaders you can actually reach." },
  { Icon: Sprout, title: "Community", text: "We create skilled careers for Bangladeshi youth and invest in their future." },
];

const leaders = [
  { initials: "CH", name: "Chairman & Co-Founder", role: "Strategy & global partnerships", text: "Leads the company's vision of making Bangladesh a trusted destination for high-value ITES and software work." },
  { initials: "MD", name: "Managing Director & Co-Founder", role: "Operations & people", text: "Built our delivery model around skilled manpower, integrity and a positive, accountable work culture." },
  { initials: "CT", name: "Head of Technology", role: "Software & automation", text: "Turns what our operations teams learn every day into software, integrations and dashboards." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "About" }]} eyebrow={`Since ${company.founded}`} title="An ITES company built on operations experience" description={`${company.name} provides international back-office, real estate operations and software services from Dhaka, working as an extension of our clients' own teams.`} />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Who we are" title="Your strategic partner in the US real estate market and beyond" className="mb-6" />
            <Reveal className="space-y-4 text-lg leading-relaxed text-ink-600">
              <p>We support US LLCs and incorporated companies with management, accounting, business communication, administrative and marketing services, as well as business research, client onboarding, vendor management, and supply and procurement.</p>
              <p>Today our teams work across {company.stats.states}+ US states for national-level companies in property preservation, property maintenance and rehab, providing full-stack business solutions alongside custom software.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {[
              { Icon: Target, t: "Our mission", d: "Deliver dependable, measurable operations and software that let our clients grow without growing overhead." },
              { Icon: Compass, t: "Our vision", d: "Make Bangladesh a first-choice destination for high-value ITES, and create meaningful careers for its youth." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-3xl bg-ink-950 p-8 text-white">
                <Icon className="h-8 w-8 text-accent-300" />
                <h3 className="mt-5 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{d}</p>
              </div>
            ))}
            <div className="rounded-3xl bg-brand-500 p-8 text-white sm:col-span-2">
              <h3 className="text-xl font-bold">Contributing to Bangladesh&apos;s economy</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-50">We bring export revenue into the country, train young professionals to international standards and build the next generation of leaders and entrepreneurs.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <StatsBand />

      <Section>
        <SectionHeading eyebrow="Our core values" title="What guides every engagement" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06} className="rounded-2xl border border-ink-100 p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-lg font-bold text-ink-950">{title}</h3>
              <p className="mt-2 text-sm text-ink-500">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Our team" title="Meet our leaders" description="Names and photos to be added by the client." />
        <div className="grid gap-6 md:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06} className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-2xl font-bold text-white">{l.initials}</div>
              <h3 className="mt-6 text-lg font-bold text-ink-950">{l.name}</h3>
              <div className="font-mono text-xs uppercase tracking-wider text-brand-600">{l.role}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{l.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why clients choose us" title="The Nexvia difference" />
        <WhyUsGrid />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {company.memberships.map((m) => <span key={m} className="rounded-xl border border-ink-200 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-600">{m}</span>)}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
