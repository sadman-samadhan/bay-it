import type { Metadata } from "next";
import { faqs } from "@/data/content";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqSearch } from "@/components/interactive/FaqSearch";
import { CTABand } from "@/components/home/Blocks";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about our services, pricing, time zones, security, pilots and software ownership.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero crumbs={[{ label: "FAQ" }]} eyebrow="FAQ" title="Answers to common questions" description="If you don't find what you need, send us a message. We reply within a day." />
      <Section><div className="mx-auto max-w-3xl"><FaqSearch /></div></Section>
      <CTABand />
    </>
  );
}
