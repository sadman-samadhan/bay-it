"use client";

import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { company } from "@/data/company";
import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function FloatingActions() {
  const wa = whatsappUrl(`Hi ${company.shortName}, I'd like to discuss outsourcing / a software project.`);
  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition hover:scale-105 md:grid"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366] opacity-40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink-100 bg-white/95 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-2.5 backdrop-blur md:hidden">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center gap-2 rounded-xl border border-ink-200 text-sm font-semibold text-ink-900">
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> WhatsApp
        </a>
        <Link href="/get-started" className="flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-500 text-sm font-semibold text-white">
          <CalendarClock className="h-4 w-4" /> Book a call
        </Link>
      </div>
    </>
  );
}
