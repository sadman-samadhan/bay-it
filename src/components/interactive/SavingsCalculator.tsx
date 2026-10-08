"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { cn, formatUSD } from "@/lib/utils";

/** Indicative fully loaded annual US cost vs. dedicated offshore cost per role (placeholder benchmarks). */
const ROLES = [
  { id: "pp", label: "Preservation / Maintenance Coordinator", us: 58000, offshore: 17400 },
  { id: "ba", label: "Business Analyst (Rehab / Bids)", us: 72000, offshore: 21600 },
  { id: "ap", label: "Accounting / AP-AR Specialist", us: 62000, offshore: 19200 },
  { id: "cs", label: "Customer Support Specialist", us: 48000, offshore: 15600 },
  { id: "dev", label: "Full-Stack Developer", us: 135000, offshore: 42000 },
  { id: "qa", label: "QA Engineer", us: 98000, offshore: 30000 },
];

export function SavingsCalculator() {
  const [team, setTeam] = useState<Record<string, number>>({ pp: 3, ba: 1, ap: 1 });

  const change = (id: string, d: number) => setTeam((t) => ({ ...t, [id]: Math.max(0, Math.min(50, (t[id] ?? 0) + d)) }));
  const us = ROLES.reduce((s, r) => s + (team[r.id] ?? 0) * r.us, 0);
  const off = ROLES.reduce((s, r) => s + (team[r.id] ?? 0) * r.offshore, 0);
  const saved = us - off;
  const pct = us ? Math.round((saved / us) * 100) : 0;
  const heads = Object.values(team).reduce((a, b) => a + b, 0);

  return (
    <div className="grid overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-2xl shadow-ink-950/10 lg:grid-cols-[1.35fr_1fr]">
      <div className="p-6 sm:p-10">
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400">Build your team</div>
        <div className="mt-5 divide-y divide-ink-100">
          {ROLES.map((r) => {
            const n = team[r.id] ?? 0;
            return (
              <div key={r.id} className="flex items-center gap-4 py-3.5">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-ink-900">{r.label}</div>
                  <div className="text-xs text-ink-400">US ≈ {formatUSD(r.us)}/yr · Nexvia ≈ {formatUSD(r.offshore)}/yr</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => change(r.id, -1)} className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 hover:border-ink-900 disabled:opacity-30" disabled={!n} aria-label={`Remove ${r.label}`}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className={cn("w-8 text-center font-display text-lg font-bold tabular-nums", n ? "text-ink-950" : "text-ink-300")}>{n}</span>
                  <button onClick={() => change(r.id, 1)} className="grid h-9 w-9 place-items-center rounded-lg border border-ink-200 hover:border-ink-900" aria-label={`Add ${r.label}`}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-6 text-white sm:p-10">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400">Estimated annual savings</div>
          <motion.div key={saved} initial={{ opacity: 0.4, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 font-display text-5xl font-bold tracking-tight text-gradient sm:text-6xl">
            {formatUSD(saved)}
          </motion.div>
          <div className="mt-2 text-ink-300">{pct}% lower than hiring in the US · {heads} specialist{heads === 1 ? "" : "s"}</div>

          <div className="mt-8 space-y-4">
            {[
              { label: "In-house US cost", value: us, cls: "bg-ink-500" },
              { label: "Nexvia dedicated team", value: off, cls: "bg-gradient-to-r from-brand-500 to-accent-400" },
            ].map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-sm"><span className="text-ink-300">{b.label}</span><span className="font-semibold">{formatUSD(b.value)}</span></div>
                <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div className={cn("h-full rounded-full", b.cls)} animate={{ width: us ? `${(b.value / us) * 100}%` : "0%" }} transition={{ duration: 0.5 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-10">
          <Link href={`/get-started?team=${encodeURIComponent(ROLES.filter((r) => team[r.id]).map((r) => `${team[r.id]}× ${r.label}`).join(", "))}`} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 font-semibold hover:bg-brand-600">
            Get a tailored proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-3 text-center text-xs text-ink-400">Indicative benchmarks incl. salary, benefits & overhead. Actual pricing depends on scope.</p>
        </div>
      </div>
    </div>
  );
}
