import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  MessageSquareText,
  Trophy,
  Users,
} from "lucide-react";

const avatars = [
  { label: "JD", color: "#0f766e" },
  { label: "OW", color: "#b45309" },
  { label: "MB", color: "#1d4ed8" },
  { label: "SJ", color: "#7c3aed" },
];

const stats = [
  {
    icon: Users,
    value: "12,500+",
    label: "Business Owners",
    note: "Learning with KoraAI",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-300/20",
  },
  {
    icon: MessageSquareText,
    value: "85,000+",
    label: "Questions Answered",
    note: "By Kora AI",
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-300/20",
  },
  {
    icon: Trophy,
    value: "1,200+",
    label: "Customer Stories",
    note: "Shared",
    color: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-300/20",
  },
  {
    icon: Bot,
    value: "24/7",
    label: "Kora AI Assistance",
    note: "Always here to help",
    color: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-300/20",
  },
];

function KorahubHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 pb-10 pt-12 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:pb-14 lg:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_66%_42%,rgba(37,99,235,0.20),transparent_34%),radial-gradient(circle_at_18%_26%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(139,92,246,0.10),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-blue-300/10" />

      <div className="container mx-auto flex flex-col justify-center lg:min-h-[calc(100vh-150px)]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-blue-300 shadow-[0_0_24px_rgba(37,99,235,0.18)]">
              Kora Hub
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-[76px]">
              Welcome to Kora{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>

            <h2 className="mt-7 text-2xl font-semibold leading-tight sm:text-3xl">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Learn. Explore. Grow.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
              Your central place for real stories, practical guides, use cases
              and AI-powered answers. Everything you need to understand how
              KoraAI grows local businesses.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#Real"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 text-base font-semibold text-white shadow-[0_0_32px_rgba(37,99,235,0.55)] transition-colors hover:bg-blue-500"
              >
                Explore Kora Hub
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-blue-300/15 bg-[#061126]/70 px-8 text-base font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.label}
                    className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#010616] text-[10px] font-bold text-white shadow-[0_0_18px_rgba(37,99,235,0.18)]"
                    style={{ backgroundColor: avatar.color }}
                  >
                    {avatar.label}
                  </div>
                ))}
              </div>
              <p className="max-w-xs text-sm leading-5 text-slate-300">
                <span className="font-semibold text-white">12,500+</span>{" "}
                business owners learning and growing together
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-8 -z-10 rounded-full bg-blue-500/20 blur-3xl" />
            <Image
              src="/images/korah_1.svg"
              alt="Kora Hub content network with customer stories, AI assistant, use cases and tutorials"
              width={935}
              height={834}
              priority
              className="mx-auto h-auto w-full max-w-[760px] drop-shadow-[0_0_60px_rgba(37,99,235,0.26)]"
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-300/15 bg-[#061126]/60 px-5 py-5 shadow-[0_0_50px_rgba(37,99,235,0.12)] backdrop-blur-sm lg:mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-blue-300/10">
            {stats.map(({ icon: Icon, value, label, note, color, bg, border }) => (
              <div key={label} className="flex items-center gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                <div
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full border ${border} ${bg} ${color}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {label}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KorahubHero;
