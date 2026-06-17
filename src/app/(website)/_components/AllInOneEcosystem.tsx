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
    <section className="relative w-full overflow-hidden bg-[#00091E] px-6 lg:py-20 text-white md:px-12 lg:px-20 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_18%_35%,rgba(14,165,233,0.10),transparent_30%)]" />
      <div className="relative mx-auto container">
        {/* ================= MAIN TWO-COLUMN CONTENT ================= */}
        <div className="grid min-h-[640px] grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & Hero Action */}
          <div className="z-10 flex flex-col items-start space-y-6 lg:col-span-5">
            <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              ALL-IN-ONE ECOSYSTEM
            </div>
            <h2 className="max-w-xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-5xl/tight">
              Everything Connected. <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                One AI Operating System.
              </span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-zinc-400">
              KoraAI brings every tool your business needs into one intelligent
              ecosystem — so everything works together, effortlessly.
            </p>
            <div className="pt-2">
              <Link
                href="/pricing"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#0052ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,82,255,0.3)] transition-all hover:bg-[#0046d9]"
              >
                Explore KoraAI
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative flex h-[520px] w-full items-center justify-center sm:h-[680px] lg:col-span-7 lg:-mr-10">
            <div className="absolute inset-4 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute h-[72%] w-[72%] rounded-full border border-blue-400/15 shadow-[0_0_90px_rgba(37,99,235,0.22)]" />
            <Image
              src="/images/cercleImage.svg"
              width={760}
              height={760}
              alt="KoraAI all-in-one ecosystem"
              className="relative h-auto w-full max-w-[760px] drop-shadow-[0_0_45px_rgba(37,99,235,0.25)]"
              priority
            />
          </div>
        </div>

        {/* ================= BOTTOM FEATURE BANNER BAR ================= */}
        <div className="mt-10 rounded-2xl border border-blue-300/10 bg-[#020a21]/70 p-5 shadow-2xl shadow-black/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5 md:divide-x md:divide-zinc-900">
            {footerFeatures.map((feat, idx) => {
              const FooterIcon = feat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center rounded-xl p-3 text-center transition-colors hover:bg-white/[0.03] md:rounded-none"
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
