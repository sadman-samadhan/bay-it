"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Menu, X } from "lucide-react";
import { pillars, services } from "@/data/services";
import { company } from "@/data/company";
import { Icon } from "@/components/ui/Icon";
import { DualClock } from "@/components/interactive/DualClock";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const nav = [
  { label: "Services", href: "/services", mega: true },
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMega(false);
    setMobile(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const active = (href: string) => pathname.startsWith(href);

  return (
    <>
      <div className="hidden bg-ink-950 text-ink-300 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <DualClock />
          <div className="flex items-center gap-5 text-xs">
            <a href={`mailto:${company.salesEmail}`} className="flex items-center gap-1.5 hover:text-white"><Mail className="h-3.5 w-3.5" /> {company.salesEmail}</a>
            <a href={company.usPhoneHref} className="hover:text-white">US {company.usPhone}</a>
            <a href={company.phoneHref} className="hover:text-white">BD {company.phone}</a>
          </div>
        </div>
      </div>

      <header className={cn("sticky top-0 z-50 border-b transition-all", scrolled ? "border-ink-100 bg-white/85 shadow-sm backdrop-blur-xl" : "border-transparent bg-white")}>
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center xl:flex" aria-label="Main">
            {nav.map((item) =>
              item.mega ? (
                <div key={item.href} className="flex h-[72px] items-center" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                  <Link href={item.href} onFocus={() => setMega(true)} aria-expanded={mega} className={cn("flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition", active(item.href) ? "text-brand-600" : "text-ink-700 hover:text-ink-950")}>
                    {item.label} <ChevronDown className={cn("h-4 w-4 transition-transform", mega && "rotate-180")} />
                  </Link>
                  <AnimatePresence>
                    {mega && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }} className="absolute left-1/2 top-full w-[min(1120px,calc(100vw-48px))] -translate-x-1/2 pt-1">
                        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 shadow-2xl shadow-ink-950/15">
                          {pillars.map((p) => (
                            <div key={p.id} className="bg-white p-6">
                              <div className="flex items-center gap-2.5">
                                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600"><Icon name={p.iconName} className="h-4.5 w-4.5" /></span>
                                <div className="font-display font-bold text-ink-950">{p.title}</div>
                              </div>
                              <p className="mt-2 text-xs leading-relaxed text-ink-500">{p.blurb}</p>
                              <ul className="mt-4 space-y-0.5">
                                {services.filter((s) => s.pillar === p.id).map((s) => (
                                  <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700">
                                      <Icon name={s.iconName} className="h-4 w-4 text-ink-300 group-hover:text-brand-500" /> {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={cn("whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition", active(item.href) ? "text-brand-600" : "text-ink-700 hover:text-ink-950")}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden whitespace-nowrap px-3 text-sm font-semibold text-ink-700 hover:text-ink-950 2xl:block">Contact</Link>
            <Link href="/get-started" className="hidden h-11 items-center gap-2 whitespace-nowrap rounded-xl bg-brand-500 px-5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 sm:inline-flex">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <button onClick={() => setMobile(true)} className="grid h-11 w-11 place-items-center rounded-xl border border-ink-100 xl:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div className="fixed inset-0 z-[70] xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setMobile(false)} />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 320, damping: 34 }} className="absolute right-0 top-0 flex h-full w-[min(420px,100%)] flex-col bg-white">
              <div className="flex h-[72px] items-center justify-between border-b border-ink-100 px-5">
                <Logo />
                <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center rounded-xl bg-ink-50" aria-label="Close menu"><X className="h-5 w-5" /></button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5" aria-label="Mobile">
                {[{ label: "Home", href: "/" }, ...nav, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((item) => (
                  <Link key={item.href} href={item.href} className={cn("block rounded-xl px-3 py-3 text-base font-semibold", (item.href === "/" ? pathname === "/" : active(item.href)) ? "bg-brand-50 text-brand-700" : "text-ink-900")}>
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-ink-100 pt-4">
                  <div className="px-3 font-mono text-xs uppercase tracking-wider text-ink-400">Services</div>
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink-600">
                      <Icon name={s.iconName} className="h-4 w-4 text-brand-500" /> {s.title}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="border-t border-ink-100 p-5">
                <Link href="/get-started" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-500 font-semibold text-white">Get Started <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
