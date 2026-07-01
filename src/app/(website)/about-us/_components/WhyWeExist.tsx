import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Save time with unified communication",
  "Reduce no-shows with smart automation",
  "Grow revenue with better customer experience",
];

function WhyWeExist() {
  return (
    <section className="relative isolate overflow-hidden bg-[#000618] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_50%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_20%_48%,rgba(139,92,246,0.08),transparent_26%)]" /> */}

      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
            Why We Exist
          </div>

          <h2 className="mt-8 text-4xl font-semibold leading-[1.16] text-white sm:text-[44px] lg:text-[48px]">
            Most local businesses run on{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              too many tools.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-slate-300">
            Calls in one app. Appointments in another. Messages somewhere else.
            Data spread across multiple platforms.
          </p>

          <div className="my-8 h-px max-w-md bg-blue-300/15" />

          <h3 className="text-xl font-semibold text-white">
            It&apos;s complex, inefficient and expensive.
          </h3>
          <p className="mt-4 max-w-md text-lg leading-8 text-slate-300">
            Kora AI brings everything together in one place so you can focus on
            what matters most.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4 text-base text-slate-300">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-400" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-10 -z-10 rounded-full" />
          <Image
            src="/images/about_3.svg"
            alt="Separate business tools connected around Kora AI"
            width={741}
            height={775}
            className="mx-auto h-auto w-full max-w-[640px]"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyWeExist;
