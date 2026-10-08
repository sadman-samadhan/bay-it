"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { techStack } from "@/data/company";
import { cn } from "@/lib/utils";

export function TechStack() {
  const [group, setGroup] = useState("All");
  const items = techStack.flatMap((g) => g.items.map((name) => ({ name, group: g.group })));
  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:justify-center lg:px-0">
        {["All", ...techStack.map((g) => g.group)].map((g) => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={cn("shrink-0 rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-wider transition", group === g ? "border-brand-500 bg-brand-500 text-white" : "border-ink-200 bg-white text-ink-600 hover:border-ink-400")}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {items.map((it) => {
          const on = group === "All" || it.group === group;
          return (
            <motion.span
              key={it.name}
              animate={{ opacity: on ? 1 : 0.25, scale: on ? 1 : 0.96 }}
              className={cn("rounded-xl border px-4 py-2.5 text-sm font-semibold", on ? "border-ink-200 bg-white text-ink-900 shadow-sm" : "border-ink-100 bg-ink-50 text-ink-400")}
            >
              {it.name}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
