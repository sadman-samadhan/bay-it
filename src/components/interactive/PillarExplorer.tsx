"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { pillars, services, type PillarId } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function PillarExplorer() {
  const [active, setActive] = useState<PillarId>(pillars[0].id);
  const pillar = pillars.find((p) => p.id === active)!;
  const list = services.filter((s) => s.pillar === active);

  return (
    <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
      <div className="space-y-3">
        {pillars.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={cn(
              "group w-full rounded-2xl border p-5 text-left transition",
              active === p.id ? "border-brand-500 bg-brand-500 text-white shadow-xl shadow-brand-500/25" : "border-ink-100 bg-white hover:border-ink-300"
            )}
          >
            <div className="flex items-center gap-3">
              <span className={cn("font-mono text-xs", active === p.id ? "text-brand-100" : "text-ink-400")}>0{i + 1}</span>
              <span className={cn("grid h-10 w-10 place-items-center rounded-xl", active === p.id ? "bg-white/15" : "bg-brand-50 text-brand-600")}>
                <Icon name={p.iconName} className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">{p.title}</span>
            </div>
            <p className={cn("mt-3 text-sm leading-relaxed", active === p.id ? "text-brand-50" : "text-ink-500")}>{p.blurb}</p>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="grid content-start gap-4 sm:grid-cols-2"
        >
          {list.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-950/5">
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-950 text-accent-300 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={s.iconName} className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink-300 transition group-hover:rotate-45 group-hover:text-brand-500" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.summary}</p>
            </Link>
          ))}
          <Link href="/services" className="flex items-center justify-center rounded-2xl border border-dashed border-ink-200 p-6 text-sm font-semibold text-ink-600 transition hover:border-brand-400 hover:text-brand-600 sm:col-span-2">
            Explore all {pillar.title.toLowerCase()} services →
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
