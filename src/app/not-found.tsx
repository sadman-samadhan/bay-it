import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-32 text-white">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <div className="font-mono text-sm text-accent-300">Error 404</div>
        <h1 className="mt-4 text-5xl font-bold sm:text-7xl"><span className="text-gradient">Page not found</span></h1>
        <p className="mt-5 text-lg text-ink-200">The page you&apos;re looking for has moved or never existed.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-500 px-6 font-semibold hover:bg-brand-600"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
          <Link href="/services" className="inline-flex h-12 items-center rounded-xl border border-white/15 px-6 font-semibold hover:bg-white/10">Browse services</Link>
        </div>
      </div>
    </section>
  );
}
