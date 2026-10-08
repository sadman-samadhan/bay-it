import type { Metadata } from "next";
import { pillars, services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTABand, EngagementCards, ServiceTile } from "@/components/home/Blocks";
import { SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Services",
  description: "Real estate operations (property preservation, maintenance, rehab), business process services and software development from Bangladesh.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow={`${services.length} services · 3 practices`}
        title="Operations, back office and software, delivered as one"
        description="Maintaining and securing properties, keeping the books, supporting your clients and building your platforms. Choose one service or combine them."
      >
        <div className="flex flex-wrap gap-2">
          {pillars.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              <Icon name={p.iconName} className="h-4 w-4 text-accent-300" /> {p.title}
            </a>
          ))}
        </div>
      </PageHero>

      {pillars.map((p, i) => (
        <Section key={p.id} id={p.id} tone={i % 2 ? "muted" : "white"}>
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-brand-600">0{i + 1} · Practice</div>
              <h2 className="mt-2 text-3xl font-bold text-ink-950 sm:text-4xl">{p.title}</h2>
            </div>
            <p className="max-w-md text-ink-500">{p.blurb}</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.filter((s) => s.pillar === p.id).map((s, idx) => (
              <Reveal key={s.slug} delay={(idx % 3) * 0.05}><ServiceTile s={s} /></Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="muted">
        <SectionHeading eyebrow="Engagement models" title="Flexible ways to work together" />
        <EngagementCards />
      </Section>
      <CTABand />
    </>
  );
}
