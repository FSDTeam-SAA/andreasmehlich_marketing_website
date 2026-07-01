"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function AIDashboardOverview() {
  return (
    <section className="relative overflow-hidden bg-[#000712] px-4 py-16 text-zinc-100 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.08),transparent_38%),linear-gradient(180deg,#000712_0%,#000712_78%,#020813_100%)]" />

      <div className="relative flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <Badge
            className="border-blue-400/20 bg-blue-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-blue-300"
            variant="outline"
          >
            AI Dashboard Overview
          </Badge>

          <h1 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-5xl">
            Everything You Need{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent block">
              In One Place
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            The AI Dashboard gives you a real-time overview of every part of
            your business so you can make smarter decisions, faster.
          </p>
        </div>

        <div className="mt-14 w-full container ">
          <div className="relative bg-[#000712]">
            {/* <div className="absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10),rgba(0,7,18,0)_68%)]" /> */}

            <div className="relative overflow-hidden bg-[#000712]">
              <Image
                src="/images/dash_1.svg"
                width={1200}
                height={675}
                alt="AI dashboard overview"
                priority
                className="h-auto w-full [mask-image:linear-gradient(90deg,transparent_0%,#000_7%,#000_93%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_8%,#000_92%,transparent_100%)] [mask-composite:intersect]"
              />
              {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000712_0%,rgba(0,7,18,0)_9%,rgba(0,7,18,0)_91%,#000712_100%),linear-gradient(180deg,#000712_0%,rgba(0,7,18,0)_10%,rgba(0,7,18,0)_90%,#000712_100%)]" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIDashboardOverview;
