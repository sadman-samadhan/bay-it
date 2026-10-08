import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CaseStudyGrid } from "@/components/interactive/CaseStudyGrid";
import { CTABand, StatsBand } from "@/components/home/Blocks";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "How we've helped real estate, property management and growing businesses run leaner operations and better software.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Case Studies" }]} eyebrow="Selected work" title="Results our clients can measure" description="Client names are withheld under NDA. Happy to arrange reference calls on request." />
      <Section><CaseStudyGrid /></Section>
      <StatsBand />
      <CTABand />
    </>
  );
}
