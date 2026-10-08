import type { Metadata } from "next";
import { insights } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand, InsightCard } from "@/components/home/Blocks";
import { NewsletterForm } from "@/components/interactive/NewsletterForm";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Practical writing on offshore operations, real estate back-office and business software.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Insights" }]} eyebrow="News & blogs" title="Notes from our operations floor" description="Get the latest updates, guides and news on outsourcing, real estate operations and automation.">
        <div className="max-w-lg"><NewsletterForm /></div>
      </PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{insights.map((p) => <InsightCard key={p.slug} post={p} />)}</div>
      </Section>
      <CTABand />
    </>
  );
}
