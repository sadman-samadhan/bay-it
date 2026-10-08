import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  description,
  crumbs,
  eyebrow,
  children,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs: { label: string; href?: string }[];
  eyebrow?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-500/15 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white" aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.16em] text-accent-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200 text-pretty">{description}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
