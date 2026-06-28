"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Apple,
  ArrowDownToLine,
  CalendarDays,
  Play,
} from "lucide-react";

function KoraHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000711] px-4 py-14 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_38%,rgba(37,99,235,0.16),transparent_38%),radial-gradient(circle_at_18%_76%,rgba(59,130,246,0.10),transparent_30%),linear-gradient(180deg,#000711_0%,#000711_84%,#020813_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),transparent_66%)]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-px bg-blue-400/30 shadow-[0_0_42px_12px_rgba(37,99,235,0.45)]" />

      <div className="container mx-auto grid min-h-[calc(100vh-170px)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(37,99,235,0.20)]">
            <span className="grid h-5 w-5 place-items-center rounded bg-blue-600 text-xs text-white">
              K
            </span>
            Kora Go App
          </div>

          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[64px]">
            Your Team.{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connected Anywhere.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
            Kora Go gives your employees everything they need in one mobile app
            — schedules, tasks, chat, requests and AI assistance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.55)] transition-colors hover:bg-blue-500"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download App
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-blue-300/15 bg-[#03142d]/60 px-7 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
            >
              <CalendarDays className="h-4 w-4" />
              Book Demo
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-white/20 bg-black px-3 text-left text-white"
            >
              <Apple className="h-5 w-5" />
              <span>
                <span className="block text-[9px] leading-none text-zinc-300">
                  Download on the
                </span>
                <span className="block text-sm font-semibold leading-tight">
                  App Store
                </span>
              </span>
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-white/20 bg-black px-3 text-left text-white"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>
                <span className="block text-[9px] leading-none text-zinc-300">
                  Get it on
                </span>
                <span className="block text-sm font-semibold leading-tight">
                  Google Play
                </span>
              </span>
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-blue-300/10 bg-blue-300/10">
            {["Schedules", "Tasks", "AI Help"].map((item) => (
              <div key={item} className="bg-[#051126]/90 px-4 py-4 text-center">
                <div className="text-lg font-semibold text-white">24/7</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden lg:min-h-[620px]">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-blue-500/8 blur-3xl" />

          <div className="relative z-10 w-full max-w-[680px]">
            <Image
              src="/images/kora_1.svg"
              width={760}
              height={720}
              alt="Kora Go mobile app preview"
              priority
              className="mx-auto h-auto w-full [mask-image:linear-gradient(90deg,transparent_0%,#000_10%,#000_88%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_8%,#000_88%,transparent_100%)] [mask-composite:intersect] drop-shadow-[0_0_40px_rgba(37,99,235,0.18)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000711_0%,rgba(0,7,17,0)_12%,rgba(0,7,17,0)_84%,#000711_100%),linear-gradient(180deg,#000711_0%,rgba(0,7,17,0)_10%,rgba(0,7,17,0)_84%,#000711_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default KoraHero;
