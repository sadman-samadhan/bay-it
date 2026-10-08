"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { faqs } from "@/data/content";
import { Accordion } from "@/components/ui/Accordion";

export function FaqSearch() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const items = faqs.filter((f) => !query || f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query));
  return (
    <div>
      <div className="relative mb-8">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search: pricing, security, time zones…" aria-label="Search FAQs" className="h-14 w-full rounded-2xl border border-ink-200 bg-white pl-14 pr-5 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10" />
      </div>
      {items.length ? <Accordion key={query} items={items} defaultOpen={query ? 0 : 0} /> : <p className="rounded-2xl border border-dashed border-ink-200 p-8 text-center text-ink-500">No matches. Ask us directly on the contact page.</p>}
    </div>
  );
}
