/** Time-zone helpers built on Intl (no dependencies, DST-aware). */

export const TIMEZONES = [
  { id: "America/New_York", label: "Eastern (ET)" },
  { id: "America/Chicago", label: "Central (CT)" },
  { id: "America/Denver", label: "Mountain (MT)" },
  { id: "America/Los_Angeles", label: "Pacific (PT)" },
  { id: "Europe/London", label: "UK (GMT/BST)" },
  { id: "Asia/Dubai", label: "Gulf (GST)" },
  { id: "Asia/Dhaka", label: "Bangladesh (BST)" },
];

/** Offset (ms) of `tz` from UTC at the given instant. */
function tzOffsetMs(instant: Date, tz: string) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(instant)
      .map((p) => [p.type, p.value])
  );
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  return asUtc - instant.getTime();
}

/** The UTC instant for wall-clock `isoDate` + `hour`:00 in `tz`. */
export function zonedToInstant(isoDate: string, hour: number, tz: string) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const guess = new Date(Date.UTC(y, m - 1, d, hour));
  const first = new Date(guess.getTime() - tzOffsetMs(guess, tz));
  // Re-check once in case the guess crossed a DST boundary.
  return new Date(guess.getTime() - tzOffsetMs(first, tz));
}

export function formatIn(instant: Date, tz: string, opts: Intl.DateTimeFormatOptions) {
  return instant.toLocaleString("en-US", { timeZone: tz, ...opts });
}

/** Next `count` weekdays (Mon–Fri) starting tomorrow, as YYYY-MM-DD in the visitor's local calendar. */
export function nextWeekdays(count: number) {
  const out: { iso: string; label: string; day: string; date: string }[] = [];
  const pad = (n: number) => String(n).padStart(2, "0");
  const now = new Date();
  for (let i = 1; out.length < count && i < 30; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    out.push({
      iso: `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`,
      label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: String(d.getDate()),
    });
  }
  return out;
}
