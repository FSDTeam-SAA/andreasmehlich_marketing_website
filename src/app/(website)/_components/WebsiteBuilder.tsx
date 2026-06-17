"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WebsiteBuilder() {
  // image_fde21b.png এর প্রথম পার্টের চেকমার্ক লিস্ট আইটেমসমূহ
  const features = [
    "AI generated content",
    "Online booking integrated",
    "Mobile optimized",
    "SEO ready",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#00091E] px-6 lg:py-20 text-white md:px-12 lg:px-20">
      {/* ৩টি কলামে নিখুঁতভাবে ভাগ করার জন্য grid-cols-12 ব্যবহার করা হয়েছে */}
      <div className="container mx-auto grid grid-cols-1 items-center lg:gap-10 lg:grid-cols-12">
        {/* ================= FIRST PART: TEXT CONTENT (Takes 4 Cols) ================= */}
        <div className="flex h-full flex-col items-start justify-center space-y-6 lg:col-span-4">
          {/* Badge */}
          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Website Builder
          </div>

          {/* Main Heading matching image_fde21b.png */}
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-4xl/tight">
            Launch Your <span className="text-blue-500">Website</span> In
            Minutes
          </h2>

          {/* Subtitle */}
          <p className="max-w-md text-base leading-relaxed text-zinc-400">
            AI-powered website builder made for local businesses.
          </p>

          {/* Features Checkmark List */}
          <ul className="flex w-full flex-col space-y-3 pt-2">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm text-zinc-300"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-500" />
                <span className="font-medium tracking-wide">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="w-full pt-2 sm:w-auto">
            <Link
              href="/website-builder"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#0052ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,82,255,0.4)] transition-all hover:bg-[#0046d9] hover:scale-[1.02] active:scale-[0.98]"
            >
              Build My Website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ================= SECOND PART: DUMMY IMAGE / WEBSITE PREVIEW 1 (Takes 4 Cols) ================= */}
        <div className="relative flex min-h-[320px] w-full items-center justify-center rounded-2xl lg:col-span-4">
          {/* 
            image_fde21b.png এর প্রথম ওয়েবসাইট মকআপ (Bravo Cuts)।
            পরবর্তীতে আপনি চাইলে সরাসরি আপনার তৈরি করা ইমেজের <img> বা <Image /> কম্পোনেন্ট এখানে বসাতে পারেন।
          */}
          <Image
            src="/images/web_1.svg"
            height={500}
            width={500}
            alt="Website builder preview for Bravo Cuts"
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>

        {/* ================= THIRD PART: DUMMY IMAGE / WEBSITE PREVIEW 2 (Takes 4 Cols) ================= */}
        <div className="relative flex min-h-[320px] w-full items-center justify-center rounded-2xl lg:col-span-4">
          <Image
            src="/images/web_2.svg"
            height={500}
            width={500}
            alt="Website builder preview for Glow Beauty"
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
