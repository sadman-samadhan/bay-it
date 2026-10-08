"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, CheckCircle2, Clock, FileCheck2, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

const FEED = [
  { id: "WO-48213", task: "Lawn cut · Photo QC passed", state: "TX", ok: true },
  { id: "WO-48214", task: "Lock change · Vendor dispatched", state: "FL", ok: true },
  { id: "BID-9921", task: "Roof tarp bid · Sent for approval", state: "GA", ok: true },
  { id: "WO-48215", task: "Winterization · Missing photo flagged", state: "OH", ok: false },
  { id: "INV-3302", task: "Invoice matched · $1,240", state: "NC", ok: true },
  { id: "WO-48216", task: "Debris removal · Completed", state: "AZ", ok: true },
  { id: "RH-0178", task: "Rehab draw #2 · Photo-verified", state: "IN", ok: true },
];

const BARS = [42, 58, 51, 66, 72, 61, 78, 84, 70, 88, 92, 86];

/** Decorative "live operations" panel for the hero, with ticking metrics and a rolling work-order feed. */
export function HeroDashboard() {
  const [count, setCount] = useState(1284);
  const [head, setHead] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => c + 1 + Math.floor(Math.random() * 3));
      setHead((h) => (h + 1) % FEED.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const rows = [0, 1, 2, 3].map((i) => FEED[(head + i) % FEED.length]);

  return (
    <div className="glow-border relative rounded-3xl bg-ink-900/80 p-5 shadow-2xl shadow-brand-900/40 backdrop-blur-xl sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-ink-300">ops.nexvia / preservation-desk</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-emerald-300">
          <Activity className="h-3 w-3" /> Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { Icon: FileCheck2, label: "Orders today", value: count.toLocaleString("en-US") },
          { Icon: Timer, label: "Avg. turnaround", value: "3.8 h" },
          { Icon: CheckCircle2, label: "QC accuracy", value: "99.2%" },
        ].map(({ Icon, label, value }) => (
          <div key={label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-3">
            <Icon className="h-4 w-4 text-accent-300" />
            <div className="mt-2 font-display text-xl font-bold tabular-nums text-white">{value}</div>
            <div className="text-[10px] text-ink-400">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-400">
          <span>Orders processed / hour</span>
          <span className="text-emerald-300">+18% vs last week</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
              className={cn("flex-1 rounded-t-md", i === BARS.length - 2 ? "bg-gradient-to-t from-accent-500 to-accent-300" : "bg-gradient-to-t from-brand-700 to-brand-400")}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <AnimatePresence initial={false}>
          {rows.map((r) => (
            <motion.div
              key={r.id}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
            >
              <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", r.ok ? "bg-emerald-400" : "bg-amber-400")} />
              <span className="font-mono text-[11px] text-accent-300">{r.id}</span>
              <span className="min-w-0 flex-1 truncate text-xs text-ink-200">{r.task}</span>
              <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-ink-300">{r.state}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-ink-400">
        <Clock className="h-3 w-3" /> Synced with client portals · Dhaka night shift
      </div>
    </div>
  );
}
