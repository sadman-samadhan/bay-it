import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { pillars, services } from "@/data/services";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/BrandIcons";
import { NewsletterForm } from "@/components/interactive/NewsletterForm";
import { Logo } from "./Logo";

export function Footer() {
  const socials = [
    { href: company.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: company.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: company.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: company.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
  ];
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/insights" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-950 pb-16 text-ink-300 md:pb-0">
      <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Stay ahead of the back office.</h2>
            <p className="mt-3 max-w-lg">Monthly notes on outsourcing, real estate operations and automation. No spam, unsubscribe anytime.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{company.tagline}. Serving clients in the US and worldwide from Dhaka since {company.founded}.</p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-ink-200 transition hover:border-brand-400 hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.memberships.map((m) => (
                <span key={m} className="rounded-lg border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-200">{m}</span>
              ))}
            </div>
          </div>
          {pillars.map((p) => (
            <div key={p.id}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-white">{p.short}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {services.filter((s) => s.pillar === p.id).slice(0, 6).map((s) => (
                  <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-white">Company</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
              {companyLinks.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 py-8 text-sm md:grid-cols-3">
          <span className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {company.office.address}</span>
          <span className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> <span>BD <a className="hover:text-white" href={company.phoneHref}>{company.phone}</a> · US <a className="hover:text-white" href={company.usPhoneHref}>{company.usPhone}</a></span></span>
          <a href={`mailto:${company.email}`} className="flex gap-2 hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {company.email}</a>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/get-started" className="inline-flex items-center gap-1 text-brand-300 hover:text-brand-200">Start a project <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
