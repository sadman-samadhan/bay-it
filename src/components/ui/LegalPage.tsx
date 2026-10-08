import { PageHero } from "./PageHero";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero crumbs={[{ label: title }]} title={title} description="Last updated 9 October 2026" />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
          <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">Template text for review. Please have this page checked by a legal adviser before launch.</p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-bold text-ink-950">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-ink-600">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
