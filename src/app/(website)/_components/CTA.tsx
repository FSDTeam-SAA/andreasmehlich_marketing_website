"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-[#00091E] px-6 lg:py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto container">
        {/* Main CTA Box Panel with Glow and Borders matching image_fc80fa.png */}
        <div className="relative rounded-3xl border border-blue-500/20 p-8 md:p-12 lg:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#050E25]">
          {/* Decorative background grid/waves effect using CSS layout */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            {/* ================= LEFT SIDE: CONTENT & BUTTONS ================= */}
            <div className="flex flex-col items-start space-y-6 lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl/tight text-white">
                Ready To Take Control <br className="hidden sm:inline" />
                Of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                  Your Business?
                </span>
              </h2>

              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
                Join thousands of business owners using KoraAI to save time, get
                more leads and grow faster.
              </p>

              {/* Button Groups */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                <Link href="/pricing">
                  <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0052ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,82,255,0.4)] transition-all hover:bg-[#0046d9] hover:scale-[1.02] active:scale-[0.98]">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* ================= RIGHT SIDE: GLOWING ROBOT SMILEY VECTOR ================= */}
            <div className="relative lg:col-span-5 flex items-center justify-center lg:justify-end w-full min-h-[220px]">
              <Image
                src="/images/cta_image.png"
                width={500}
                height={500}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
