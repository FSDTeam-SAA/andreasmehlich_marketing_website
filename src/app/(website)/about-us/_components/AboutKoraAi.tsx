import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const brands = [
  "FlashCuts",
  "Salon Luxe",
  "INK Society",
  "Wellness",
];

const features = [
  "Real-time activity feed",
  "Advanced analytics & reports",
  "Team performance tracking",
  "Smart automation rules",
];

function AboutKoraAi() {
  return (
    <section className="relative isolate overflow-hidden bg-[#00020E] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              About Kora AI
            </div>

            <h2 className="mt-8 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[54px]">
              Building the Future of{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                Local Business Software
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-slate-300">
              Kora AI was created to help local businesses manage communication,
              scheduling, websites, employees and customer interactions from one
              connected platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-md bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-colors hover:bg-blue-500"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                Trusted by 1,200+ businesses
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold text-slate-500 sm:grid-cols-4">
                {brands.map((brand) => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-10 -z-10 rounded-full bg-blue-500/18 blur-3xl" />
            <div className="relative mx-auto max-w-[820px] overflow-hidden">
              <Image
                src="/images/about_1.svg"
                alt="Kora AI platform shown across dashboard, website builder and mobile app"
                width={1037}
                height={860}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-blue-300/15 bg-[#061126]/65 shadow-[0_0_56px_rgba(37,99,235,0.12)] lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative min-h-[320px] overflow-hidden bg-[#061126] p-3 sm:p-5">
            <Image
              src="/images/about_2.svg"
              alt="Kora AI real-time dashboard overview"
              width={775}
              height={506}
              className="h-full min-h-[300px] w-full object-contain drop-shadow-[0_0_40px_rgba(37,99,235,0.2)] [mask-image:linear-gradient(90deg,transparent_0%,#000_5%,#000_95%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_8%,#000_92%,transparent_100%)] [mask-composite:intersect]"
            />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_50%,rgba(37,99,235,0.18),transparent_42%)]" />
            <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-violet-300">
              One Dashboard
            </div>

            <h3 className="mt-6 text-4xl font-semibold leading-tight text-white">
              Run Your Business{" "}
              <span className="block bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent">
                Smarter Than Ever
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              Get a real-time overview of your calls, leads, appointments,
              revenue and team performance - all in one place.
            </p>

            <div className="mt-7 space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  {feature}
                </div>
              ))}
            </div>

            <Link
              href="/pricing"
              className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-colors hover:bg-blue-500"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutKoraAi;
