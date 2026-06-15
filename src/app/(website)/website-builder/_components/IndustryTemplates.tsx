"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Crown,
  Dumbbell,
  Scissors,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const industries = [
  { label: "AI Templates", icon: WandSparkles },
  { label: "Health & Beauty", icon: Sparkles },
  { label: "Fitness", icon: Dumbbell },
  { label: "Automotive", icon: Car },
  { label: "Services", icon: Scissors },
];

function IndustryTemplates() {
  return (
    <section className="relative overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(37,99,235,0.18),transparent_36%),radial-gradient(circle_at_22%_76%,rgba(37,99,235,0.12),transparent_26%)]" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 shadow-[0_0_26px_rgba(6,182,212,0.18)]">
            Industry Templates
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Professionally Designed Templates{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              For Your Industry
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Choose a template, customize it with AI and launch your website.
            Built for local businesses and optimized for results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {industries.map(({ label, icon: Icon }, index) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
                  index === 0
                    ? "border-blue-400/40 bg-blue-500/15 text-blue-300"
                    : "border-blue-300/10 bg-[#061126]/80 text-slate-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-12 container">
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <Image
            src="/images/webb_4.svg"
            width={1200}
            height={660}
            alt="Industry website templates"
            className="mx-auto h-auto w-full drop-shadow-[0_0_60px_rgba(37,99,235,0.24)]"
          />
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-blue-300/10 bg-[#061126]/80 p-6 shadow-2xl shadow-black/40">
          <div className="flex justify-between items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-500/15 text-blue-300 shadow-[0_0_28px_rgba(37,99,235,0.24)]">
              <Crown className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Don&apos;t See Your Industry?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Our AI can create the perfect template for any type of business.
              </p>
            </div>
            <div>
              <Link
                href="#"
                className="group mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-colors hover:bg-blue-500"
              >
                Create Custom Template
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryTemplates;
