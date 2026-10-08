"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { company } from "@/data/company";
import { mailtoUrl } from "@/lib/contact";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^\S+@\S+\.\S+$/.test(email)) return setState("error");
        window.location.href = mailtoUrl("Newsletter subscription", `Please subscribe ${email} to the ${company.shortName} newsletter.`);
        setState("done");
      }}
      className="w-full"
    >
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 focus-within:border-brand-400">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setState("idle");
          }}
          placeholder="you@company.com"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-4 text-white outline-none placeholder:text-ink-400"
        />
        <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand-500 px-5 text-sm font-semibold text-white hover:bg-brand-600">
          {state === "done" ? <><Check className="h-4 w-4" /> Subscribed</> : <>Subscribe <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
      {state === "error" && <p className="mt-2 text-xs text-red-300">Please enter a valid email address.</p>}
    </form>
  );
}
