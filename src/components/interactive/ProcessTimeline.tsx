"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { processSteps } from "@/data/content";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ dark = true }: { dark?: boolean }) {
  const [i, setI] = useState(0);
  const step = processSteps[i];
  return (
    <div>
      <div className="relative grid grid-cols-5 gap-2">
        <div className={cn("absolute left-0 right-0 top-5 h-0.5", dark ? "bg-white/10" : "bg-ink-100")} />
        <motion.div className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-brand-500 to-accent-400" animate={{ width: `${(i / (processSteps.length - 1)) * 100}%` }} transition={{ duration: 0.4 }} />
        {processSteps.map((s, idx) => (
          <button key={s.title} onClick={() => setI(idx)} className="relative flex flex-col items-center gap-3 text-center">
            <span
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full border-2 font-mono text-sm font-bold transition",
                idx <= i ? "border-brand-400 bg-brand-500 text-white" : dark ? "border-white/15 bg-ink-950 text-ink-300" : "border-ink-200 bg-white text-ink-400"
              )}
            >
              {idx + 1}
            </span>
            <span className={cn("text-xs font-semibold sm:text-sm", idx === i ? (dark ? "text-white" : "text-ink-950") : dark ? "text-ink-400" : "text-ink-400")}>{s.title}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn("mx-auto mt-10 max-w-2xl rounded-2xl p-7 text-center", dark ? "glass" : "border border-ink-100 bg-white")}
        >
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent-400">{step.duration}</div>
          <h3 className={cn("mt-2 text-2xl font-bold", dark ? "text-white" : "text-ink-950")}>{step.title}</h3>
          <p className={cn("mt-3 leading-relaxed", dark ? "text-ink-200" : "text-ink-500")}>{step.text}</p>
          <div className="mt-6 flex justify-center gap-3">
            <button disabled={i === 0} onClick={() => setI(i - 1)} className={cn("rounded-lg px-4 py-2 text-sm font-semibold disabled:opacity-30", dark ? "bg-white/10 text-white" : "bg-ink-50 text-ink-800")}>Previous</button>
            <button disabled={i === processSteps.length - 1} onClick={() => setI(i + 1)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-30">Next step</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
