import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/interactive/ContactForm";
import { DualClock } from "@/components/interactive/DualClock";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} in Dhaka, Bangladesh. US and BD phone lines, email and WhatsApp.`,
};

export default function ContactPage() {
  const cards = [
    { Icon: MapPin, title: "Our address", lines: [company.office.address] },
    { Icon: Phone, title: "Phone numbers", lines: [`BD ${company.phone}`, `US ${company.usPhone}`] },
    { Icon: Mail, title: "Office emails", lines: [company.email, company.salesEmail, company.careersEmail] },
  ];
  return (
    <>
      <PageHero crumbs={[{ label: "Contact" }]} eyebrow="We're here to help" title="Contact us" description="Questions about outsourcing, a software idea or a partnership? Reach out and a real person will reply within one business day.">
        <DualClock className="text-ink-200" />
      </PageHero>
      <div className="relative z-10 mx-auto -mt-10 grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {cards.map(({ Icon, title, lines }) => (
          <div key={title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-xl shadow-ink-950/5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
            <div className="mt-4 font-bold text-ink-950">{title}</div>
            {lines.map((l) => <div key={l} className="mt-1 text-sm text-ink-500">{l}</div>)}
          </div>
        ))}
      </div>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-ink-100">
              <iframe title="Office location" src={`https://maps.google.com/maps?q=${encodeURIComponent(company.office.mapQuery)}&z=15&output=embed`} className="h-72 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="rounded-3xl bg-ink-950 p-7 text-white">
              <div className="flex items-center gap-2 font-bold"><Clock className="h-5 w-5 text-accent-300" /> Working hours</div>
              <p className="mt-3 text-sm text-ink-300">{company.hours.bd}</p>
              <p className="mt-1 text-sm text-ink-300">{company.hours.us}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
