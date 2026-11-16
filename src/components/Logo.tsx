import Link from "next/link";
import { cn } from "@/lib/utils";

/** π drawn with rounded strokes; the top bar ends in a circuit node. */
export function LogoMark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  const bg = inverted ? "#FFFFFF" : "#2F4A8A";
  const fg = inverted ? "#2F4A8A" : "#FFFFFF";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="11" fill={bg} />
      <g fill="none" stroke={fg} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 15.5 H33" />
        <path d="M18 15.5 V37.5" />
        <path d="M30 15.5 V32 Q30 37 35 37" />
      </g>
      <circle cx="38.5" cy="15.5" r="2.75" fill={fg} />
    </svg>
  );
}

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Pi Tech — home">
      <LogoMark className="h-9 w-9 shrink-0" inverted={inverted} />
      <span className="text-lg leading-none tracking-tight">
        <span className={cn("font-bold", inverted ? "text-white" : "text-gray-900")}>Pi</span>{" "}
        <span className={cn("font-medium", inverted ? "text-gray-300" : "text-gray-600")}>Tech</span>
      </span>
    </Link>
  );
}
