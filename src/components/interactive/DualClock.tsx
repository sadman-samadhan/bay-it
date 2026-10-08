"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const fmt = (tz: string, d: Date) =>
  d.toLocaleTimeString("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit" });

/** Live Dhaka / New York clocks plus whether the US desk is currently online (9 AM – 6 PM ET, Mon–Fri). */
export function useDeskStatus() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const t = setInterval(tick, 30_000);
    return () => {
      clearTimeout(first);
      clearInterval(t);
    };
  }, []);
  if (!now) return null;
  const ny = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const online = ny.getDay() >= 1 && ny.getDay() <= 5 && ny.getHours() >= 9 && ny.getHours() < 18;
  return { dhaka: fmt("Asia/Dhaka", now), newYork: fmt("America/New_York", now), online };
}

export function DualClock({ className }: { className?: string }) {
  const s = useDeskStatus();
  return (
    <div className={cn("flex items-center gap-4 font-mono text-xs", className)}>
      <span className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          {s?.online && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />}
          <span className={cn("relative h-2 w-2 rounded-full", s?.online ? "bg-emerald-400" : "bg-ink-400")} />
        </span>
        {s ? (s.online ? "US desk online" : "US desk offline · overnight team active") : "US desk"}
      </span>
      <span className="opacity-70">Dhaka {s?.dhaka ?? "--:--"}</span>
      <span className="opacity-70">New York {s?.newYork ?? "--:--"}</span>
    </div>
  );
}
