"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Dumbbell,
  HeartPulse,
  Scissors,
  Sparkles,
  Utensils,
  WandSparkles,
} from "lucide-react";

const categories = [
  { label: "All Templates", icon: WandSparkles, active: true },
  { label: "Health & Beauty", icon: Sparkles },
  { label: "Fitness", icon: Dumbbell },
  { label: "Automotive", icon: Car },
  { label: "Wellness", icon: HeartPulse },
  { label: "Food & Drink", icon: Utensils },
  { label: "Services", icon: Scissors },
];

const templateCards = [
  {
    title: "Barbershop",
    description: "Modern & Bold Design",
    image: "/images/web_1.svg",
    icon: Scissors,
    color: "text-amber-400",
    border: "border-blue-500/45",
  },
  {
    title: "Beauty Salon",
    description: "Elegant & Feminine",
    image: "/images/buty_1.svg",
    icon: Sparkles,
    color: "text-pink-400",
    border: "border-blue-500/35",
  },
  {
    title: "Tattoo Studio",
    description: "Dark & Edgy Style",
    image: "/images/web_2.svg",
    icon: Scissors,
    color: "text-slate-200",
    border: "border-blue-500/35",
  },
  {
    title: "Fitness Studio",
    description: "Strong & Energetic",
    image: "/images/webb_5.svg",
    icon: Dumbbell,
    color: "text-lime-400",
    border: "border-blue-500/35",
  },
  {
    title: "Auto Service",
    description: "Clean & Professional",
    image: "/images/webb_6.svg",
    icon: Car,
    color: "text-red-400",
    border: "border-blue-500/45",
  },
];

function ButyYourIndustry() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_14%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_48%_86%,rgba(37,99,235,0.18),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-16 -z-10 h-40 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.28),transparent_65%)]" />
      <div className="absolute bottom-20 left-0 right-0 -z-10 h-px bg-blue-500/30 shadow-[0_0_42px_12px_rgba(37,99,235,0.34)]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-300 shadow-[0_0_24px_rgba(37,99,235,0.20)]">
            Industry Templates
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Professionally Designed Templates{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              For Your Industry
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Choose a template, customize it with AI and launch your website.
            Built for local businesses. Optimized for results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                type="button"
                className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-xs font-semibold transition-colors ${
                  active
                    ? "border-blue-400/50 bg-blue-500/15 text-blue-300 shadow-[0_0_22px_rgba(37,99,235,0.22)]"
                    : "border-blue-300/10 bg-[#061126]/80 text-slate-400 hover:border-blue-300/25 hover:text-slate-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {templateCards.map(
              ({ title, description, image, icon: Icon, color, border }) => (
                <article
                  key={title}
                  className={`group overflow-hidden rounded-2xl border ${border} bg-[#061126]/80 p-3 shadow-[0_0_34px_rgba(37,99,235,0.16)] transition-colors hover:border-blue-400/70`}
                >
                  <div className="overflow-hidden rounded-xl border border-blue-300/10 bg-[#020813]">
                    <Image
                      src={image}
                      alt={`${title} website template preview`}
                      width={459}
                      height={335}
                      className="aspect-[4/5] h-auto w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 px-1 pb-1">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current/40 bg-white/5 ${color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-white">
                          {title}
                        </h3>
                        <p className="mt-1 truncate text-xs text-slate-400">
                          {description}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </article>
              )
            )}
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-400/30 bg-[#06142b]/90 p-px shadow-[0_0_42px_rgba(37,99,235,0.18)]">
          <div className="flex flex-col gap-5 rounded-2xl bg-[#061126]/95 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-600/15 text-blue-300 shadow-[0_0_28px_rgba(37,99,235,0.28)]">
                <WandSparkles className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Don&apos;t See Your Industry?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Our AI can create the perfect template for any type of
                  business.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.48)] transition-colors hover:bg-blue-500"
            >
              Create Custom Template
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButyYourIndustry;
