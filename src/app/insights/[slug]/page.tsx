import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { insights } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { CTABand, InsightCard } from "@/components/home/Blocks";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = insights.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt, openGraph: { type: "article" } } : {};
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((x) => x.slug === slug);
  if (!post) notFound();
  const more = insights.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero crumbs={[{ label: "Insights", href: "/insights" }, { label: post.category }]} eyebrow={post.category} title={post.title} description={post.excerpt}>
        <div className="font-mono text-xs text-ink-300">{formatDate(post.date)} · {post.readMinutes} min read</div>
      </PageHero>
      <Section>
        <article className="prose-article mx-auto max-w-3xl">
          {post.body.map((b, i) => {
            if (b.type === "list")
              return <ul key={i}>{b.items.map((it) => <li key={it} className="flex gap-3 text-ink-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-500" />{it}</li>)}</ul>;
            return b.type === "h2" ? <h2 key={i}>{b.text}</h2> : <p key={i}>{b.text}</p>;
          })}
          <div className="mt-12 rounded-2xl bg-ink-950 p-8 text-white">
            <h2 className="!mt-0 !text-white">Want help putting this into practice?</h2>
            <p className="!text-ink-300">We&apos;ll review your current workflow and suggest what to offshore or automate first, free.</p>
            <ButtonLink href="/get-started" className="mt-2">Book a free review</ButtonLink>
          </div>
        </article>
      </Section>
      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-2">{more.map((p) => <InsightCard key={p.slug} post={p} />)}</div>
      </Section>
      <CTABand />
    </>
  );
}
