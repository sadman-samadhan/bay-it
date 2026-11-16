import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Container, CTA, Section, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icon";
import { featuredServices, pillars, servicesByPillar } from "@/data/services";
import { process, whyChooseUs } from "@/data/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-gray-100">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">ITES · BPO · Software</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Operations and software teams that work as part of yours
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              We run back-office operations for real estate and property services companies — preservation,
              maintenance, rehab, accounting and vendor management — and build the software that makes them smarter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact/">Get started</ButtonLink>
              <ButtonLink href="/services/" variant="outline">
                Explore services <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <Section>
        <SectionHeading eyebrow="What we do" title="Three practices, one partner" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id} className="flex flex-col rounded-lg border border-gray-200 p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                <Icon name={p.iconName} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2 border-t border-gray-100 pt-5 text-sm">
                {servicesByPillar(p.id).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`} className="text-gray-700 hover:text-brand-700">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured services */}
      <Section muted>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Services" title="Our core services" />
          <ButtonLink href="/services/" variant="outline" className="self-start sm:self-auto">
            View all services <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading eyebrow="How we work" title="A simple, proven onboarding process" />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="bg-white p-6">
              <span className="text-sm font-semibold text-brand-700">{p.step}</span>
              <h3 className="mt-3 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why choose us */}
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
