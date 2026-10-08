import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import { company } from "@/data/company";
import { faqs, insights } from "@/data/content";
import { HeroDashboard } from "@/components/interactive/HeroDashboard";
import { PillarExplorer } from "@/components/interactive/PillarExplorer";
import { ProcessTimeline } from "@/components/interactive/ProcessTimeline";
import { SavingsCalculator } from "@/components/interactive/SavingsCalculator";
import { CaseStudyGrid } from "@/components/interactive/CaseStudyGrid";
import { TestimonialSlider } from "@/components/interactive/TestimonialSlider";
import { TechStack } from "@/components/interactive/TechStack";
import { CTABand, IndustriesGrid, InsightCard, StatesMarquee, StatsBand, WhyUsGrid } from "@/components/home/Blocks";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[140px]" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
              <Sparkles className="h-3.5 w-3.5" /> ITES · BPO · Software, from Dhaka
            </span>
            <h1 className="mt-7 text-[2.7rem] font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Your offshore team.
              <br />
              <span className="text-gradient">Engineered for scale.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200">
              {company.shortName} runs back-office operations for US real estate and property services companies, and builds the software that makes them faster. Your offshore team, working your hours.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/get-started" size="lg">Start a project <ArrowRight className="h-4 w-4" /></ButtonLink>
              <ButtonLink href="/services" size="lg" variant="light">Our services</ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {[
                { Icon: Zap, t: "Live in 2–4 weeks" },
                { Icon: ShieldCheck, t: "Secure by design" },
                { Icon: Clock, t: "Works US hours" },
              ].map(({ Icon, t }) => (
                <span key={t} className="glass inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-ink-100"><Icon className="h-4 w-4 text-accent-300" /> {t}</span>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex -space-x-2">
                {["VP", "CF", "DM", "OP"].map((x, i) => (
                  <span key={x} className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink-950 text-[10px] font-bold" style={{ background: ["#7352ff", "#06b6d4", "#5225d8", "#0891b2"][i] }}>{x}</span>
                ))}
              </div>
              <div className="text-sm text-ink-300">
                <span className="flex items-center gap-1 font-semibold text-white">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)} 5.0</span>
                Trusted by {company.stats.clients}+ companies across {company.stats.states}+ US states
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-500/20 to-accent-500/10 blur-2xl" />
            <HeroDashboard />
          </Reveal>
        </div>
      </section>

      <StatesMarquee />

      {/* About */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={`About ${company.name}`}
              title="Operations know-how and engineering talent, under one roof"
              className="mb-6"
            />
            <Reveal className="space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                Established in {company.founded}, {company.shortName} delivers scalable operations and digital transformation across borders. With a specialist focus on the US real estate industry, we act as a strategic partner to property preservation, maintenance, rehab and asset-management firms.
              </p>
              <p>Our analysts come from real preservation, maintenance and rehab desks, and our engineers build tools for exactly those workflows. That combination is what makes us different.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <ButtonLink href="/about" variant="outline">Explore us <ArrowRight className="h-4 w-4" /></ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {[
              { k: `${company.stats.states}+`, v: "US states supported", tone: "bg-brand-500 text-white" },
              { k: "24/5", v: "Operations coverage", tone: "bg-ink-950 text-white" },
              { k: `${company.stats.turnaroundHours} hr`, v: "Avg. work-order turnaround", tone: "bg-ink-50 text-ink-950" },
              { k: "60–70%", v: "Typical cost savings", tone: "bg-accent-400 text-ink-950" },
            ].map((c, i) => (
              <div key={c.v} className={`rounded-3xl p-7 ${c.tone} ${i % 2 ? "translate-y-8" : ""}`}>
                <div className="font-display text-4xl font-bold">{c.k}</div>
                <div className="mt-2 text-sm opacity-80">{c.v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section tone="muted">
        <SectionHeading eyebrow="Our services" title="Three practices. One accountable partner." description="Pick the operations you want handled, the back office you want streamlined, or the software you want built, or combine all three." />
        <PillarExplorer />
      </Section>

      <StatsBand />

      {/* Smart solutions */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glow-border relative overflow-hidden rounded-3xl bg-ink-950 p-6 font-mono text-[13px] leading-relaxed text-ink-200 shadow-2xl">
              <div className="mb-4 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" /></div>
              <div><span className="text-brand-300">export async function</span> <span className="text-accent-300">assignWorkOrder</span>(order) {"{"}</div>
              <div className="pl-5"><span className="text-brand-300">const</span> vendor = <span className="text-brand-300">await</span> vendors.nearest(order.zip, order.scope);</div>
              <div className="pl-5"><span className="text-brand-300">if</span> (!vendor.coiValid) <span className="text-brand-300">return</span> escalate(order, <span className="text-emerald-300">&quot;COI expired&quot;</span>);</div>
              <div className="pl-5"><span className="text-brand-300">await</span> notify(vendor, order, {"{"} dueIn: <span className="text-amber-300">&quot;24h&quot;</span> {"}"});</div>
              <div className="pl-5"><span className="text-brand-300">return</span> track(order).withPhotoQC();</div>
              <div>{"}"}</div>
              <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-emerald-300">✓ 1,284 orders auto-assigned today · 0 compliance misses</div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Automation & software"
              title={<>Software that makes your <span className="text-brand-500">back office</span> smarter.</>}
              description="We build modern apps, websites and ERP systems that help your business run smarter and scale faster. Because we run operations ourselves, we automate what actually slows teams down."
              className="mb-8"
            />
            <Reveal delay={0.1} className="flex flex-wrap gap-3">
              {["⚡ Fast to set up", "🛡️ Secure by design", "📱 Fully responsive", "🔗 Integrates with your tools"].map((t) => (
                <span key={t} className="rounded-xl border border-ink-100 bg-white px-4 py-2 text-sm font-semibold text-ink-800 shadow-sm">{t}</span>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/how-we-work">Explore pricing</ButtonLink>
              <ButtonLink href="/case-studies" variant="outline">See our work</ButtonLink>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Why Nexvia" title="Built for operations-heavy businesses" />
        <WhyUsGrid />
      </Section>

      {/* Process */}
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute right-0 top-0 h-80 w-96 rounded-full bg-brand-600/25 blur-[110px]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading dark eyebrow="How we work" title="From first call to full team in weeks, not months" />
          <ProcessTimeline />
        </div>
      </section>

      <Section id="calculator">
        <SectionHeading eyebrow="Savings calculator" title="See what an offshore team could save you" description="Add the roles you need and compare fully loaded in-house US costs with a dedicated Nexvia team." />
        <SavingsCalculator />
      </Section>

      <Section tone="muted">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Case studies" title="Selected work & results" className="mb-0" />
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:underline">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <CaseStudyGrid limit={3} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries" title="Deep in real estate. Ready for more." />
        <IndustriesGrid />
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Client voices" title="Loved by the teams we support" />
        <TestimonialSlider />
      </Section>

      <Section>
        <SectionHeading eyebrow="Technology" title="Any stack. Any tool. We work in yours." />
        <TechStack />
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading align="left" eyebrow="FAQ" title="Answers to common questions" description="If you don't find what you need, send us a message. We reply within a day." className="mb-6" />
            <ButtonLink href="/faq" variant="outline">All FAQs <ArrowRight className="h-4 w-4" /></ButtonLink>
          </div>
          <Accordion items={faqs.slice(0, 5)} />
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="News & insights" title="Notes from our operations floor" className="mb-0" />
          <Link href="/insights" className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:underline">All insights <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((p) => <InsightCard key={p.slug} post={p} />)}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
