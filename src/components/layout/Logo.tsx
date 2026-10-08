import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${company.name} home`}>
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg shadow-brand-600/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-90" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 19V5l14 14V5" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={cn("font-display block text-xl font-bold tracking-tight", dark ? "text-white" : "text-ink-950")}>
          {company.logoWord[0]}
          <span className="text-brand-500">{company.logoWord[1]}</span>
        </span>
        <span className={cn("mt-1 block font-mono text-[9px] uppercase tracking-[0.22em]", dark ? "text-ink-300" : "text-ink-400")}>Limited · ITES & Software</span>
      </span>
    </Link>
  );
}
