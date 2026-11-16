import type { Metadata } from "next";
import { CTA, PageHeader, Section } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icon";
import { pillars, servicesByPillar } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Real estate operations, business process services and software development from ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our services"
        text="From property operations desks to custom software, our teams handle the work that keeps your business running — reliably, securely and at scale."
        crumbs={[{ label: "Services" }]}
      />

      {pillars.map((p, i) => (
        <Section key={p.id} muted={i % 2 === 1} id={p.id}>
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
              <Icon name={p.iconName} className="h-5 w-5" />
            </span>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">{p.title}</h2>
              <p className="mt-2 text-gray-600">{p.blurb}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesByPillar(p.id).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      ))}

      <CTA />
    </>
  );
}
