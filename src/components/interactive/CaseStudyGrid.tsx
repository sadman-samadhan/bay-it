"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/content";
import { pillars } from "@/data/services";
import { cn } from "@/lib/utils";

const gradients = {
  "real-estate-ops": "from-brand-600 via-brand-800 to-ink-950",
  "business-process": "from-accent-600 via-ink-800 to-ink-950",
  software: "from-ink-700 via-brand-900 to-ink-950",
};

export function CaseStudyGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("all");
  const list = caseStudies.filter((c) => filter === "all" || c.pillar === filter).slice(0, limit);

  return (
    <div>
      {!limit && (
        <div className="no-scrollbar -mx-4 mb-10 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:px-0">
          {[{ id: "all", short: "All work" }, ...pillars].map((p) => (
            <button key={p.id} onClick={() => setFilter(p.id)} className={cn("shrink-0 rounded-lg border px-4 py-2 text-sm font-semibold transition", filter === p.id ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 text-ink-700 hover:border-ink-400")}>
              {p.short}
            </button>
          ))}
        </div>
      )}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((c) => (
            <motion.div key={c.slug} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}>
              <Link href={`/case-studies/${c.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-950/10">
                <div className={cn("relative overflow-hidden bg-gradient-to-br p-6 text-white", gradients[c.pillar])}>
                  <div className="absolute inset-0 bg-grid-dark" />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-md bg-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider">{c.industry}</span>
                    <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
                  </div>
                  <div className="relative mt-10 grid grid-cols-3 gap-2">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <div className="font-display text-xl font-bold">{r.value}</div>
                        <div className="text-[10px] leading-tight text-white/70">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="font-mono text-xs text-ink-400">{c.client}</div>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-ink-950 group-hover:text-brand-600">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-500">{c.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => <span key={s} className="rounded-md bg-ink-50 px-2 py-1 text-[11px] font-medium text-ink-600">{s}</span>)}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
