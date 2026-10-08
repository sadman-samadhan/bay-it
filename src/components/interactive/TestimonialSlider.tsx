"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { Stars } from "@/components/ui/Stars";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, [paused]);
  const t = testimonials[i];

  return (
    <div className="glow-border relative overflow-hidden rounded-3xl bg-ink-900 p-8 sm:p-14" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Quote className="absolute right-8 top-8 h-28 w-28 text-white/[0.04]" />
      <AnimatePresence mode="wait">
        <motion.figure key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }} className="relative max-w-3xl">
          <Stars value={t.rating} />
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">&ldquo;{t.text}&rdquo;</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-bold text-white">{t.author.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
            <div>
              <div className="font-semibold text-white">{t.author}</div>
              <div className="text-sm text-ink-300">{t.company}</div>
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className="relative mt-10 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={cn("h-1.5 rounded-full transition-all", idx === i ? "w-8 bg-accent-400" : "w-3 bg-white/20")} />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white hover:bg-white/10" aria-label="Previous"><ArrowLeft className="h-4 w-4" /></button>
          <button onClick={() => setI((i + 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-white hover:bg-brand-600" aria-label="Next"><ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}
