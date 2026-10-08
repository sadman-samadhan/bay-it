import type { Metadata } from "next";
import { Clock, FileLock2, Handshake, Rocket } from "lucide-react";
import { company } from "@/data/company";
import { ProjectBrief } from "@/components/interactive/ProjectBrief";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Tell us what you need and book a 30-minute discovery call in your time zone.",
};

export default async function GetStartedPage({ searchParams }: { searchParams: Promise<{ service?: string; team?: string }> }) {
  const { service, team } = await searchParams;
  return (
    <section className="relative bg-ink-50/60">
      <div className="absolute inset-x-0 top-0 h-96 overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute left-1/2 top-0 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent-300">Get started</span>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Tell us about your project</h1>
          <p className="mt-3 text-ink-200">Two minutes now saves a week of back-and-forth. We reply within one business day.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-ink-950/10 sm:p-10">
            <ProjectBrief initialService={service} initialTeam={team} />
          </div>
          <aside className="space-y-4">
            {[
              { Icon: Clock, t: "Reply within 1 business day", d: "From a solutions lead, not a bot." },
              { Icon: FileLock2, t: "NDA on request", d: "We sign before any detailed discussion." },
              { Icon: Rocket, t: "2-week paid pilot", d: "Prove the value before committing." },
              { Icon: Handshake, t: "No lock-in", d: "Monthly terms on dedicated teams." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                <div><div className="font-bold text-ink-950">{t}</div><div className="text-sm text-ink-500">{d}</div></div>
              </div>
            ))}
            <div className="rounded-2xl bg-ink-950 p-6 text-sm text-ink-300">
              Prefer email? <a href={`mailto:${company.salesEmail}`} className="font-semibold text-accent-300">{company.salesEmail}</a>
              <br />US line: <a href={company.usPhoneHref} className="font-semibold text-white">{company.usPhone}</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
