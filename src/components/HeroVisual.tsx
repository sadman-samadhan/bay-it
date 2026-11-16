import { Camera, CheckCircle2, ClipboardList, FileText, Truck } from "lucide-react";

const queue = [
  { icon: Camera, title: "Photo QC · 214 Elm St", status: "Approved", tone: "done" },
  { icon: FileText, title: "Bid review · 87 Oak Ave", status: "In review", tone: "active" },
  { icon: Truck, title: "Vendor dispatch · 5 Pine Rd", status: "Dispatched", tone: "active" },
  { icon: ClipboardList, title: "Invoice match · 39 Lake Dr", status: "Queued", tone: "idle" },
] as const;

const tones = {
  done: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  active: "bg-brand-50 text-brand-700 ring-brand-100",
  idle: "bg-gray-100 text-gray-600 ring-gray-200",
};

const code = [
  [{ c: "text-brand-700", t: "export async function" }, { c: "text-gray-900", t: " routeOrder" }, { c: "text-gray-500", t: "(order) {" }],
  [{ c: "text-gray-500", t: "  const " }, { c: "text-gray-900", t: "vendor" }, { c: "text-gray-500", t: " = await " }, { c: "text-brand-700", t: "findVendor" }, { c: "text-gray-500", t: "(order.zip);" }],
  [{ c: "text-gray-500", t: "  await " }, { c: "text-brand-700", t: "dispatch" }, { c: "text-gray-500", t: "(order, vendor);" }],
  [{ c: "text-gray-500", t: "  return " }, { c: "text-emerald-700", t: "\"scheduled\"" }, { c: "text-gray-500", t: ";" }],
  [{ c: "text-gray-500", t: "}" }],
];

/** Code-drawn hero illustration: software + operations, in the site's palette. */
export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[5/4] w-full max-w-xl select-none overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(229 231 235 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(229 231 235 / 0.7) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Code editor window */}
      <div className="absolute left-[8%] right-[6%] top-[9%] rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
          <span className="ml-3 rounded bg-gray-50 px-2 py-0.5 font-mono text-[10px] text-gray-500 sm:text-xs">operations.ts</span>
        </div>
        <pre className="overflow-hidden px-4 py-3 font-mono text-[10px] leading-relaxed sm:text-xs">
          {code.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-3 shrink-0 text-right text-gray-300">{i + 1}</span>
              <span className="whitespace-pre">
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>{tok.t}</span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>

      {/* Work-order queue card */}
      <div className="absolute bottom-[7%] left-[4%] w-[68%] rounded-xl border border-gray-200 bg-white p-3 shadow-md sm:p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 sm:text-xs">Work order queue</p>
        <ul className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
          {queue.map(({ icon: I, title, status, tone }) => (
            <li key={title} className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-50 text-gray-600 ring-1 ring-gray-200 sm:h-7 sm:w-7">
                <I className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-gray-800 sm:text-xs">{title}</span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium ring-1 sm:text-[11px] ${tones[tone]}`}>{status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Status badge */}
      <div className="absolute bottom-[30%] right-[4%] flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-md">
        <CheckCircle2 className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
        <div className="leading-tight">
          <p className="text-[10px] font-semibold text-gray-900 sm:text-xs">Desk online</p>
          <p className="text-[9px] text-gray-500 sm:text-[11px]">Your business hours</p>
        </div>
      </div>
    </div>
  );
}
