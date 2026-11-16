import type { Metadata } from "next";
import { CTA, PageHeader, Section, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { about, values, whyChooseUs } from "@/data/content";
import { pillars } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — real estate operations, back-office services and software development.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={`About ${site.name}`} text={site.tagline} crumbs={[{ label: "About us" }]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
            {about.overview.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-gray-600">{p}</p>
            ))}
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Our mission</h3>
              <p className="mt-3 text-gray-700">{about.mission}</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">Our vision</h3>
              <p className="mt-3 text-gray-700">{about.vision}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Our practices" title="What we do" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id} className="rounded-lg border border-gray-200 bg-white p-6">
              <Icon name={p.iconName} className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{p.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-6">
              <Icon name={v.icon} className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 font-semibold text-gray-900">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Why choose us" title={`Why companies choose ${site.name}`} />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => (
            <div key={w.title}>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-700 ring-1 ring-gray-200">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
