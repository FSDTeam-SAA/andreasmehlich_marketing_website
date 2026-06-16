"use client";

import {
  Bot,
  Command,
  CreditCard,
  Grid2X2,
  Monitor,
  Rocket,
  Search as SearchIcon,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const topics = [
  { label: "Getting Started", icon: Rocket, color: "text-blue-300" },
  { label: "Dashboard", icon: Grid2X2, color: "text-sky-300" },
  { label: "Website Builder", icon: Monitor, color: "text-cyan-300" },
  { label: "Kora Assistant", icon: Bot, color: "text-cyan-300" },
  { label: "Billing & Limits", icon: CreditCard, color: "text-amber-300" },
  { label: "API & Integrations", icon: Sparkles, color: "text-fuchsia-300" },
];

function Search() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_8%_42%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_92%_42%,rgba(139,92,246,0.12),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.46),transparent_68%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_30px_rgba(59,130,246,0.95)]" />

      <div className="container mx-auto flex min-h-[calc(100vh-220px)] flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">
          <Grid2X2 className="h-3.5 w-3.5 text-blue-300" />
          Kora Hub
        </div>

        <h1 className="mt-7 text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-[64px]">
          Search KoraAI{" "}
          <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Knowledge Hub
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Find exactly what you need. <br className="hidden sm:block" />
          Search guides, features, setup instructions, billing info and more.
        </p>

        <div className="relative mt-8 w-full max-w-4xl">
          <SearchIcon className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides, features, setup instructions, billing info and more..."
            className="h-16 w-full rounded-2xl border border-fuchsia-400/45 bg-[#071126]/85 px-14 pr-20 text-base text-slate-200 shadow-[0_0_36px_rgba(37,99,235,0.24)] outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/60"
          />
          <span className="absolute right-5 top-1/2 inline-flex h-8 -translate-y-1/2 items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 text-xs font-semibold text-slate-300">
            <Command className="h-3.5 w-3.5" />K
          </span>
        </div>

        <div className="mt-8 text-[11px] font-bold uppercase tracking-[0.36em] text-blue-300">
          Popular Topics
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {topics.map(({ label, icon: Icon, color }) => (
            <button
              key={label}
              type="button"
              onClick={() => setQuery(label)}
              className="inline-flex h-11 items-center gap-3 rounded-full border border-blue-300/15 bg-[#061126]/75 px-5 text-sm font-medium text-slate-300 transition-colors hover:border-blue-300/35 hover:bg-blue-500/10 hover:text-white"
            >
              <Icon className={`h-4 w-4 ${color}`} strokeWidth={1.8} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
