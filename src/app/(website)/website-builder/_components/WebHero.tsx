"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Globe2,
  MonitorSmartphone,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Generated",
    description: "Built by AI in minutes",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Optimized",
    description: "Looks perfect on every device",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Optimized to rank higher",
  },
  {
    icon: Globe2,
    title: "Domain Connected",
    description: "Use your own domain or get a new one",
  },
];

const avatars = [
  { label: "MK", color: "#0f766e" },
  { label: "AN", color: "#b45309" },
  { label: "LS", color: "#1d4ed8" },
  { label: "PR", color: "#7c3aed" },
];

function WebHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000711] px-4 py-14 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_44%,rgba(37,99,235,0.16),transparent_38%),radial-gradient(circle_at_18%_28%,rgba(37,99,235,0.10),transparent_30%),linear-gradient(180deg,#000711_0%,#000711_82%,#020813_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-blue-300/10" />

      <div className="container mx-auto grid min-h-[calc(100vh-180px)] items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-300 shadow-[0_0_24px_rgba(37,99,235,0.16)]">
            <Bot className="h-3.5 w-3.5" />
            AI Website Builder
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            Build Your Website{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              In Minutes.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            KoraAI creates, publishes and manages your business website so you
            can focus on your customers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#built-in-booking-system"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_32px_rgba(37,99,235,0.52)] transition-colors hover:bg-blue-500"
            >
              Build My Website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-blue-300/10 bg-blue-300/10 sm:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-[#051126]/90 px-4 py-5 text-center"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-blue-500/10 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-3 text-xs font-semibold text-white">
                  {title}
                </h2>
                <p className="mt-2 text-[11px] leading-4 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <div
                  key={avatar.label}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#000711] text-[10px] font-bold text-white"
                  style={{ backgroundColor: avatar.color }}
                >
                  {avatar.label}
                </div>
              ))}
            </div>

            <div>
              <div className="flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Trusted by 1000+ business owners
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.13),rgba(0,7,17,0)_70%)]" />

          <div className="relative">
            <Image
              src="/images/webb_1.svg"
              width={920}
              height={620}
              alt="KoraAI website builder preview"
              priority
              className="h-auto w-full [mask-image:linear-gradient(90deg,transparent_0%,#000_9%,#000_88%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_8%,#000_86%,transparent_100%)] [mask-composite:intersect] drop-shadow-[0_0_42px_rgba(37,99,235,0.18)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000711_0%,rgba(0,7,17,0)_11%,rgba(0,7,17,0)_84%,#000711_100%),linear-gradient(180deg,#000711_0%,rgba(0,7,17,0)_10%,rgba(0,7,17,0)_82%,#000711_100%)]" />

            {/* <div className="mx-auto mt-4 flex max-w-md items-center justify-between rounded-xl border border-blue-300/10 bg-[#061126]/90 px-4 py-3 text-sm text-slate-300 shadow-2xl shadow-black/40">
              <span className="inline-flex items-center gap-2 truncate">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-400" />
                freshcutsbarbershop.com
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                Published
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebHero;
