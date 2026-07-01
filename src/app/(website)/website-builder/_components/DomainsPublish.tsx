"use client";

import Image from "next/image";
import {
  BarChart3,
  Clock,
  FileText,
  Filter,
  Globe2,
  Lock,
  Rocket,
  ShieldCheck,
  Server,
  Users,
  Zap,
} from "lucide-react";

const publishingFeatures = [
  {
    icon: Globe2,
    title: "Custom Domains",
    description: "Use your own domain name",
  },
  {
    icon: Server,
    title: "Hosting Included",
    description: "Fast, secure and reliable hosting",
  },
  {
    icon: Lock,
    title: "SSL Certificate Included",
    description: "Secure your website with SSL",
  },
  {
    icon: Zap,
    title: "Global CDN",
    description: "Lightning fast worldwide",
  },
  {
    icon: Rocket,
    title: "One-Click Publishing",
    description: "Publish your website instantly",
  },
  {
    icon: ShieldCheck,
    title: "Always Online",
    description: "99.9% uptime guaranteed",
  },
];

const analyticsFeatures = [
  {
    icon: Users,
    title: "Visitor Tracking",
    description: "See who visits your website",
  },
  {
    icon: BarChart3,
    title: "Booking Insights",
    description: "Monitor bookings and revenue",
  },
  {
    icon: Filter,
    title: "Lead Tracking",
    description: "Track leads and conversions",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate",
    description: "Track and improve performance",
  },
  {
    icon: FileText,
    title: "Top Pages",
    description: "Discover your most popular pages",
  },
  {
    icon: Clock,
    title: "Real-Time Data",
    description: "Live data and instant updates",
  },
];

function FeatureGrid({
  features,
}: {
  features: {
    icon: typeof Globe2;
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="mt-7 grid gap-4 sm:grid-cols-2">
      {features.map(({ icon: Icon, title, description }) => (
        <div key={title} className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-blue-300">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ImagePanel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem]" />
      <Image
        src={src}
        width={780}
        height={430}
        alt={alt}
        className="h-auto w-full"
      />
    </div>
  );
}

function DomainsPublish() {
  return (
    <section className="relative overflow-hidden bg-[#010611] px-4 text-white sm:px-6 lg:px-8">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(37,99,235,0.10),transparent_30%)]" /> */}

      <div className="container relative mx-auto space-y-20 lg:space-y-24">
        <div className="grid items-center gap-12 rounded-2xl border border-blue-300/10 bg-[#010611]/70 p-6 shadow-2xl shadow-black/40 lg:grid-cols-12 lg:gap-12 lg:p-9">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Domains & Publishing
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Connect Your Domain{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                And Go Live
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              Make your website official. Connect your domain, enable SSL and
              publish with one click.
            </p>

            <FeatureGrid features={publishingFeatures} />
          </div>

          <div className="lg:col-span-7">
            <ImagePanel
              src="/images/webb_5.svg"
              alt="Domain publishing website preview"
            />
          </div>
        </div>

        <div className="grid items-center gap-12 rounded-2xl border border-blue-300/10 bg-[#010611]/70 p-6 lg:grid-cols-12 lg:gap-12 lg:p-9">
          <div className="lg:col-span-7">
            <ImagePanel
              src="/images/webb_6.svg"
              alt="Website analytics dashboard"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Website Analytics
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Know What&apos;s{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Working
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              Built-in analytics help you track visitors, bookings and
              performance so you can grow your business with data.
            </p>

            <FeatureGrid features={analyticsFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainsPublish;
