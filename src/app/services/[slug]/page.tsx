import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getPillar, getService, services } from "@/data/services";
import { caseStudies, faqs as generalFaqs } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { CTABand, ServiceTile } from "@/components/home/Blocks";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const pillar = getPillar(s.pillar);
  const related = services.filter((x) => x.pillar === s.pillar && x.slug !== s.slug).slice(0, 3);
  const cases = caseStudies.filter((c) => c.pillar === s.pillar).slice(0, 2);
  const faqs = s.faqs.length ? [...s.faqs, ...generalFaqs.slice(4, 6)] : generalFaqs.slice(2, 7);

  return (
    <>
      <PageHero crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]} eyebrow={pillar.title} title={s.title} description={s.tagline}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`/get-started?service=${s.slug}`} size="lg">Discuss your requirements <ArrowRight className="h-4 w-4" /></ButtonLink>
          <ButtonLink href="/how-we-work#calculator" variant="light" size="lg">Estimate savings</ButtonLink>
        </div>
      </PageHero>

      <div className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 shadow-xl shadow-ink-950/10">
          {s.outcomes.map((o) => (
            <div key={o.label} className="bg-white p-5 text-center sm:p-7">
              <div className="font-display text-2xl font-bold text-brand-600 sm:text-4xl">{o.value}</div>
              <div className="mt-1 text-xs font-medium text-ink-500 sm:text-sm">{o.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_340px]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-ink-950">Overview</h2>
              {s.description.map((p) => <p key={p.slice(0, 20)} className="mt-4 text-lg leading-relaxed text-ink-600">{p}</p>)}
            </Reveal>
            <Reveal className="mt-14">
              <h2 className="text-2xl font-bold text-ink-950">What we handle</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.capabilities.map((c, i) => (
                  <div key={c.title} className="rounded-2xl border border-ink-100 p-6 transition hover:border-brand-200 hover:shadow-lg">
                    <div className="font-mono text-xs text-brand-500">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 font-bold text-ink-950">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{c.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-14">
              <h2 className="text-2xl font-bold text-ink-950">What you receive</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 rounded-xl bg-ink-50 p-4 text-sm font-semibold text-ink-800"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500" /> {d}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-14">
              <h2 className="mb-6 text-2xl font-bold text-ink-950">Frequently asked</h2>
              <Accordion items={faqs} />
            </Reveal>
          </div>
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="glow-border relative overflow-hidden rounded-3xl bg-ink-950 p-7 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500"><Icon name={s.iconName} className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-bold">Start with a 2-week pilot</h3>
              <p className="mt-2 text-sm text-ink-300">Real work, agreed KPIs, no long-term commitment. Most teams go live in 2–4 weeks.</p>
              <Link href={`/get-started?service=${s.slug}`} className="mt-6 flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 font-semibold hover:bg-brand-600">Get a proposal <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-3xl border border-ink-100 p-7">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400">Tools & platforms</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tools.map((t) => <span key={t} className="rounded-lg border border-ink-100 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700">{t}</span>)}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading dark eyebrow="Onboarding" title="How we get you live" />
          <ProcessTimeline />
        </div>
      </section>

      {cases.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Proof" title="Results from similar engagements" />
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group rounded-2xl border border-ink-100 p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="font-mono text-xs text-ink-400">{c.client}</div>
                <h3 className="mt-2 text-xl font-bold text-ink-950 group-hover:text-brand-600">{c.title}</h3>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {c.results.map((r) => <div key={r.label}><div className="font-display text-xl font-bold text-brand-600">{r.value}</div><div className="text-xs text-ink-500">{r.label}</div></div>)}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow={pillar.title} title="Related services" />
          <div className="grid gap-6 md:grid-cols-3">{related.map((r) => <ServiceTile key={r.slug} s={r} />)}</div>
        </Section>
      )}
      <CTABand />
    </>
  );
}
