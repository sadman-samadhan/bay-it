import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { company } from "@/data/company";
import { engagementModels, industries, whyUs, type Insight } from "@/data/content";
import type { Service } from "@/data/services";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { cn, formatDate, formatUSD } from "@/lib/utils";

const STATES = ["Texas", "Florida", "Georgia", "Ohio", "North Carolina", "Arizona", "Indiana", "Tennessee", "Michigan", "Illinois", "Pennsylvania", "South Carolina", "Missouri", "Alabama", "Nevada", "California", "New York"];

export function StatesMarquee() {
  const row = [...STATES, ...STATES];
  return (
    <div className="border-y border-ink-100 bg-white py-6">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 md:block">Supporting work orders in</span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-10">
            {row.map((s, i) => (
              <span key={`${s}-${i}`} className="font-display text-lg font-bold text-ink-300">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsBand() {
  const s = company.stats;
  const items = [
    { value: s.workOrders, suffix: "+", label: "Work orders processed" },
    { value: s.states, suffix: "+", label: "US states supported" },
    { value: s.professionals, suffix: "+", label: "Trained professionals" },
    { value: s.satisfaction, suffix: "%", label: "Client satisfaction" },
  ];
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-white">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute left-1/4 top-0 h-64 w-96 rounded-full bg-brand-600/30 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 0.06} className="border-l border-white/10 pl-6">
            <div className="font-display text-4xl font-bold sm:text-5xl"><Counter value={it.value} suffix={it.suffix} /></div>
            <div className="mt-2 text-sm text-ink-300">{it.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WhyUsGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
      {whyUs.map((w, i) => (
        <Reveal key={w.title} delay={(i % 3) * 0.06} className="group bg-white p-8 transition hover:bg-ink-50/60">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
            <Icon name={w.iconName} className="h-6 w-6" />
          </span>
          <h3 className="mt-6 text-lg font-bold text-ink-950">{w.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function IndustriesGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {industries.slice(0, limit).map((ind, i) => (
        <Reveal key={ind.title} delay={(i % 4) * 0.05} className="group rounded-2xl border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-950/5">
          <Icon name={ind.iconName} className="h-7 w-7 text-brand-500" />
          <h3 className="mt-5 font-bold text-ink-950">{ind.title}</h3>
          <p className="mt-1.5 text-sm text-ink-500">{ind.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function EngagementCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {engagementModels.map((m, i) => (
        <Reveal key={m.id} delay={i * 0.06}>
          <div className={cn("relative flex h-full flex-col rounded-3xl border p-8", m.badge ? "border-transparent bg-ink-950 text-white shadow-2xl shadow-brand-900/30" : "border-ink-100 bg-white")}>
            {m.badge && <span className="absolute right-6 top-6 rounded-md bg-accent-400 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-ink-950">{m.badge}</span>}
            <span className={cn("grid h-12 w-12 place-items-center rounded-xl", m.badge ? "bg-white/10 text-accent-300" : "bg-brand-50 text-brand-600")}><Icon name={m.iconName} className="h-6 w-6" /></span>
            <h3 className="mt-6 text-2xl font-bold">{m.title}</h3>
            <p className={cn("mt-2 text-sm leading-relaxed", m.badge ? "text-ink-300" : "text-ink-500")}>{m.text}</p>
            <div className="mt-6">
              <span className="font-display text-3xl font-bold">{m.priceFrom ? `From ${formatUSD(m.priceFrom)}` : "Per order"}</span>
              <div className={cn("text-xs", m.badge ? "text-ink-400" : "text-ink-400")}>{m.unit}</div>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {m.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm"><Check className={cn("mt-0.5 h-4 w-4 shrink-0", m.badge ? "text-accent-300" : "text-brand-500")} /><span className={m.badge ? "text-ink-100" : "text-ink-700"}>{p}</span></li>
              ))}
            </ul>
            <Link href="/get-started" className={cn("mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl font-semibold transition", m.badge ? "bg-brand-500 text-white hover:bg-brand-600" : "bg-ink-950 text-white hover:bg-ink-800")}>
              Discuss this model <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ServiceTile({ s }: { s: Service }) {
  return (
    <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-ink-950/5">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-950 text-accent-300 transition group-hover:bg-brand-500 group-hover:text-white"><Icon name={s.iconName} className="h-6 w-6" /></span>
        <ArrowUpRight className="h-5 w-5 text-ink-300 transition group-hover:rotate-45 group-hover:text-brand-500" />
      </div>
      <h3 className="mt-6 text-lg font-bold text-ink-950">{s.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{s.summary}</p>
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-ink-100 pt-4">
        {s.outcomes.map((o) => (
          <div key={o.label}>
            <div className="font-display text-sm font-bold text-ink-950">{o.value}</div>
            <div className="text-[10px] leading-tight text-ink-400">{o.label}</div>
          </div>
        ))}
      </div>
    </Link>
  );
}

export function InsightCard({ post }: { post: Insight }) {
  return (
    <Link href={`/insights/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-950/5">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
        <span className="text-brand-600">{post.category}</span>
        <span className="text-ink-400">{post.readMinutes} min</span>
      </div>
      <h3 className="mt-5 text-xl font-bold leading-snug text-ink-950 group-hover:text-brand-600">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm text-ink-500">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-ink-400">{formatDate(post.date)}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand-600">Read <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

export function CTABand({ title = "Let's build your offshore advantage.", text = "Tell us about your operations or product. We'll come back within one business day with a plan, a team proposal and a pilot option." }: { title?: string; text?: string }) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-white sm:px-14 sm:py-20">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-brand-600/40 blur-[100px]" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-accent-500/25 blur-[100px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-balance sm:text-5xl">{title}</h2>
            <p className="mt-5 max-w-xl text-lg text-ink-200">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/get-started" size="lg" className="flex-1">Start a project <ArrowRight className="h-4 w-4" /></ButtonLink>
            <ButtonLink href="/how-we-work#calculator" size="lg" variant="light" className="flex-1">Calculate your savings</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
