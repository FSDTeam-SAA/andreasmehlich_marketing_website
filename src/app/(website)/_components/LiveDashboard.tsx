"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function LiveDashboard() {
  // image_085dca.png এর ডান পাশের চেকমার্ক লিস্ট আইটেমসমূহ
  const features = [
    "Real-time activity feed",
    "Advanced analytics & reports",
    "Team performance tracking",
    "Smart automation rules",
  ]

  return (
    <section className="w-full bg-[#00091E] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        
        {/* LEFT SIDE: Dummy Image / Dashboard UI Container */}
        <div className="relative flex items-center justify-center lg:col-span-7">
         <Image src="/images/dashboard_image.svg" width={680} height={680} alt="dashboard image" className="h-auto w-full max-w-[680px]"/>
        </div>

        {/* RIGHT SIDE: Content Section */}
        <div className="flex max-w-lg flex-col items-start space-y-5 lg:col-span-5">
          
          {/* Section Badge */}
          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Live Dashboard
          </div>

          {/* Main Heading from image_085dca.png */}
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[42px]/tight">
            Run Your Business{" "}
            <span className="block text-blue-500">
              Smarter <span className="text-white">Than Ever</span>
            </span>
          </h2>

          {/* Paragraph / Subtitle */}
          <p className="max-w-md text-base leading-relaxed text-zinc-400">
            Get a real-time overview of your calls, leads, appointments, 
            revenue and team performance — all in one place.
          </p>

          {/* Features Checkmark List */}
          <ul className="flex w-full flex-col space-y-3 pt-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-zinc-200">
                {/* Custom Glowing Blue Check Icon matching image_085dca.png */}
                <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Action Button */}
          <div className="pt-4 w-full sm:w-auto">
            <Link
              href="/dashboard"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#0052ff] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,82,255,0.4)] transition-all hover:bg-[#0046d9] hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
