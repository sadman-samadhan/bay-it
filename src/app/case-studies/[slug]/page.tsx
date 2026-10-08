import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Quote } from "lucide-react";
import { caseStudies } from "@/data/content";
import { getPillar, services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/home/Blocks";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return c ? { title: c.title, description: c.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  const pillar = getPillar(c.pillar);
  const next = caseStudies[(caseStudies.indexOf(c) + 1) % caseStudies.length];
  const related = services.filter((s) => s.pillar === c.pillar).slice(0, 4);

  return (
    <>
      <PageHero crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: c.industry }]} eyebrow={`${pillar.title} · ${c.client}`} title={c.title} description={c.summary} />
      <div className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 shadow-xl">
          {c.results.map((r) => (
            <div key={r.label} className="bg-white p-5 text-center sm:p-8">
              <div className="font-display text-2xl font-bold text-brand-600 sm:text-4xl">{r.value}</div>
              <div className="mt-1 text-xs text-ink-500 sm:text-sm">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Section>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-brand-600">The challenge</h2>
              <p className="mt-3 text-xl leading-relaxed text-ink-800">{c.challenge}</p>
            </Reveal>
            <Reveal className="mt-12">
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-brand-600">What we did</h2>
              <ol className="mt-5 space-y-3">
                {c.solution.map((s, i) => (
                  <li key={s} className="flex gap-4 rounded-2xl border border-ink-100 p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink-950 font-mono text-sm text-accent-300">{i + 1}</span>
                    <span className="pt-1.5 text-ink-700">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            {c.quote && (
              <Reveal className="glow-border relative mt-12 overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
                <Quote className="absolute right-6 top-6 h-20 w-20 text-white/5" />
                <blockquote className="relative font-display text-2xl leading-snug">&ldquo;{c.quote.text}&rdquo;</blockquote>
                <div className="relative mt-5 text-sm"><span className="font-semibold">{c.quote.author}</span> <span className="text-ink-300">· {c.quote.role}</span></div>
              </Reveal>
            )}
          </div>
          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-ink-100 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-ink-400">Stack & tools</div>
              <div className="mt-3 flex flex-wrap gap-2">{c.stack.map((s) => <span key={s} className="rounded-lg bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700">{s}</span>)}</div>
              <div className="mt-6 font-mono text-xs uppercase tracking-wider text-ink-400">Related services</div>
              <ul className="mt-3 space-y-2 text-sm">{related.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="font-semibold text-brand-600 hover:underline">{s.title}</Link></li>)}</ul>
            </div>
            <Link href={`/case-studies/${next.slug}`} className="group block rounded-2xl bg-ink-950 p-6 text-white">
              <div className="font-mono text-xs uppercase tracking-wider text-accent-300">Next case study</div>
              <div className="mt-2 font-bold leading-snug group-hover:underline">{next.title}</div>
              <ArrowRight className="mt-4 h-5 w-5 text-accent-300 transition group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </Section>
      <CTABand title="Want results like these?" />
    </>
  );
}
