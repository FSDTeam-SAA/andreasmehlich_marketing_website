"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Link2,
  Brain,
  ShieldCheck,
  RefreshCw,
  Headphones,
} from "lucide-react";
import Image from "next/image";

export default function AllInOneEcosystem() {
  // নিচের হরাইজনটাল ফুটার বারের ডাটা
  const footerFeatures = [
    {
      title: "Fully Integrated",
      desc: "All tools work together seamlessly.",
      icon: Link2,
      color: "text-blue-400 bg-blue-500/10",
    },
    {
      title: "AI-Powered",
      desc: "Intelligent automation that saves you time.",
      icon: Brain,
      color: "text-purple-400 bg-purple-500/10",
    },
    {
      title: "Secure & Reliable",
      desc: "Your data is safe with enterprise-grade security.",
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-500/10",
    },
    {
      title: "Always Evolving",
      desc: "New features and updates to keep you ahead.",
      icon: RefreshCw,
      color: "text-sky-400 bg-sky-500/10",
    },
    {
      title: "Dedicated Support",
      desc: "We're here to help you succeed.",
      icon: Headphones,
      color: "text-pink-400 bg-pink-500/10",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#00091E] px-4 py-14 text-white select-none sm:px-6 sm:py-16 md:px-12 lg:px-20 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(37,99,235,0.16),transparent_34%),linear-gradient(180deg,rgba(0,9,30,0)_0%,#00091E_16%,#00091E_84%,rgba(0,9,30,0)_100%)]" />
      <div className="relative mx-auto container">
        {/* ================= MAIN TWO-COLUMN CONTENT ================= */}
        <div className="grid grid-cols-1 items-center gap-8 lg:min-h-[640px] lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & Hero Action */}
          <div className="z-10 flex flex-col items-center space-y-5 text-center lg:col-span-5 lg:items-start lg:space-y-6 lg:text-left">
            <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              ALL-IN-ONE ECOSYSTEM
            </div>
            <h2 className="max-w-xl text-3xl font-medium tracking-tight sm:text-5xl lg:text-5xl/tight">
              Everything Connected. <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                One AI Operating System.
              </span>
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
              KoraAI brings every tool your business needs into one intelligent
              ecosystem — so everything works together, effortlessly.
            </p>
            <div className="w-full pt-1 sm:w-auto lg:pt-2">
              <Link
                href="/pricing"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0052ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,82,255,0.3)] transition-all hover:bg-[#0046d9] sm:w-auto"
              >
                Explore KoraAI
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative -mt-2 flex h-[340px] w-full items-center justify-center overflow-hidden sm:h-[560px] lg:col-span-7 lg:-mr-10 lg:mt-0 lg:h-[680px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10),rgba(0,9,30,0)_52%,#00091E_82%)]" />
            <div className="absolute inset-4 rounded-full bg-blue-600/8 blur-3xl" />
            {/* <div className="absolute h-[72%] w-[72%] rounded-full border border-blue-400/15 shadow-[0_0_90px_rgba(37,99,235,0.22)]" /> */}
            <Image
              src="/images/cercleImage.svg"
              width={760}
              height={760}
              alt="KoraAI all-in-one ecosystem"
              className="relative h-auto w-full max-w-[430px] [mask-image:linear-gradient(90deg,transparent_0%,#000_11%,#000_78%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_10%,#000_88%,transparent_100%)] [mask-composite:intersect] drop-shadow-[0_0_38px_rgba(37,99,235,0.20)] sm:max-w-[640px] lg:max-w-[760px]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#00091E_0%,rgba(0,9,30,0)_13%,rgba(0,9,30,0)_72%,#00091E_96%),linear-gradient(180deg,#00091E_0%,rgba(0,9,30,0)_12%,rgba(0,9,30,0)_86%,#00091E_100%)]" />
          </div>
        </div>

        {/* ================= BOTTOM FEATURE BANNER BAR ================= */}
        <div className="mt-2 rounded-2xl border border-blue-300/10 bg-[#020a21]/70 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm sm:mt-6 sm:p-5 lg:mt-10">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5 md:divide-x md:divide-zinc-900">
            {footerFeatures.map((feat, idx) => {
              const FooterIcon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center rounded-xl p-3 text-center transition-colors hover:bg-white/[0.03] md:rounded-none ${
                    idx === footerFeatures.length - 1
                      ? "col-span-2 md:col-span-1"
                      : ""
                  }`}
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-zinc-200 ${feat.color}`}
                  >
                    <FooterIcon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white tracking-wide">
                    {feat.title}
                  </h3>
                  <p className="text-[10px] text-zinc-400 leading-relaxed mt-1 max-w-[140px]">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
