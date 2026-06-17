"use client";

import Image from "next/image";
import {
  BriefcaseBusiness,
  FileText,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";

const builderFeatures = [
  {
    icon: Sparkles,
    title: "Generate Pages Automatically",
    description:
      "AI creates all the essential pages your business needs, ready to go.",
  },
  {
    icon: FileText,
    title: "Create Content Instantly",
    description:
      "Get unique, SEO-friendly content written specifically for your business.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Add Services Automatically",
    description:
      "Showcase your services, pricing and benefits with AI-powered suggestions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive By Default",
    description:
      "Every website looks perfect on all devices, automatically optimized.",
  },
  {
    icon: Search,
    title: "SEO Optimized Structure",
    description:
      "Built with best practices so you can rank higher and get found online.",
  },
];

function AIWebsiteBuilder() {
  return (
    <section id="AI-website-builder" className="relative overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(37,99,235,0.18),transparent_36%),radial-gradient(circle_at_18%_50%,rgba(14,165,233,0.10),transparent_28%)]" />

      <div className="container relative mx-auto grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="max-w-lg">
          <div className="inline-flex items-center rounded-full border border-blue-400/15 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-300">
            AI Website Builder
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Let AI Build <br />
            It{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              For You
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
            Answer a few simple questions about your business and our AI creates
            a complete, professional website in minutes.
          </p>

          <div className="mt-9 space-y-5">
            {builderFeatures.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="grid grid-cols-[56px_1fr] gap-4 border-b border-blue-300/10 pb-5 last:border-b-0 last:pb-0"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-300 shadow-[0_0_24px_rgba(37,99,235,0.14)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <Image
            src="/images/webb_3.svg"
            width={920}
            height={610}
            alt="AI website builder dashboard"
            className="h-auto w-full drop-shadow-[0_0_60px_rgba(37,99,235,0.24)]"
          />
        </div>
      </div>
    </section>
  );
}

export default AIWebsiteBuilder;
