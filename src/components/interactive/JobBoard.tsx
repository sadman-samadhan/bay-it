"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, MapPin, Search } from "lucide-react";
import { jobs } from "@/data/content";
import { company } from "@/data/company";
import { mailtoUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function JobBoard() {
  const [team, setTeam] = useState("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const teams = ["All", ...Array.from(new Set(jobs.map((j) => j.team)))];
  const list = jobs.filter((j) => (team === "All" || j.team === team) && (!q.trim() || `${j.title} ${j.summary}`.toLowerCase().includes(q.toLowerCase())));

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search roles" aria-label="Search roles" className="h-12 w-full rounded-xl border border-ink-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-brand-500" />
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {teams.map((t) => (
            <button key={t} onClick={() => setTeam(t)} className={cn("shrink-0 rounded-lg border px-4 py-2.5 text-sm font-semibold", team === t ? "border-ink-950 bg-ink-950 text-white" : "border-ink-200 bg-white text-ink-700")}>{t}</button>
          ))}
        </div>
      </div>
      <p className="mt-4 font-mono text-xs text-ink-400">{list.length} of {jobs.length} open roles</p>
      <div className="mt-4 space-y-3">
        {list.map((j) => (
          <div key={j.id} className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
            <button onClick={() => setOpen(open === j.id ? null : j.id)} aria-expanded={open === j.id} className="flex w-full items-center gap-4 p-6 text-left">
              <div className="flex-1">
                <div className="font-mono text-[11px] uppercase tracking-wider text-brand-600">{j.team}</div>
                <div className="mt-1 text-lg font-bold text-ink-950">{j.title}</div>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-ink-500">
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{j.type}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{j.location}</span>
                </div>
              </div>
              <ChevronDown className={cn("h-5 w-5 text-ink-400 transition", open === j.id && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {open === j.id && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="border-t border-ink-100 p-6">
                    <p className="text-ink-600">{j.summary}</p>
                    <a href={mailtoUrl(`Application: ${j.title}`, `Hello ${company.shortName} HR,\n\nI'd like to apply for ${j.title}.\n\nName:\nPhone:\nLinkedIn:\n\nCV attached.`, company.careersEmail)} className="mt-5 inline-flex h-11 items-center rounded-xl bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600">
                      Apply now
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
