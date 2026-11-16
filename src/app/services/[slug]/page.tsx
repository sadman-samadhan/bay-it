import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { ButtonLink, CTA, PageHeader, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { getPillar, getService, services, servicesByPillar } from "@/data/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

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
  const related = servicesByPillar(s.pillar).filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHeader
        title={s.title}
        text={s.tagline}
        crumbs={[{ label: "Services", href: "/services/" }, { label: pillar.title, href: `/services/#${pillar.id}` }, { label: s.title }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="space-y-4">
              {s.description.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-gray-600">{p}</p>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">What we handle</h2>
            <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2">
              {s.capabilities.map((c) => (
                <div key={c.title} className="bg-white p-6">
                  <h3 className="font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{c.text}</p>
                </div>
              ))}
            </div>

            {s.deliverables.length > 0 && (
              <>
                <h2 className="mt-12 text-2xl font-semibold text-gray-900">What you receive</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 rounded-md border border-gray-200 px-4 py-3 text-gray-700">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" /> {d}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-700 ring-1 ring-gray-200">
                <Icon name={s.iconName} className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-gray-900">Discuss your requirements</h2>
              <p className="mt-2 text-sm text-gray-600">Tell us what you need and we&apos;ll send a clear proposal.</p>
              <div className="mt-5 flex flex-col gap-2">
                <ButtonLink href="/contact/">Get started</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" /> {site.phone}
                </ButtonLink>
              </div>
            </div>
            {related.length > 0 && (
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">More in {pillar.title}</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {related.map((o) => (
                    <li key={o.slug}>
                      <Link href={`/services/${o.slug}/`} className="text-gray-700 hover:text-brand-700">
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <CTA />
    </>
  );
}
