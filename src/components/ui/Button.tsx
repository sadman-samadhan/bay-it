import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "dark" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600",
  outline: "border border-ink-200 bg-white text-ink-900 hover:border-ink-900",
  light: "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10",
  dark: "bg-ink-950 text-white hover:bg-ink-800",
  ghost: "text-ink-700 hover:bg-ink-50",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500";

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={classes} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
