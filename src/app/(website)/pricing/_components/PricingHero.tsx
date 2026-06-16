import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CreditCard,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "No Setup Fees",
    description: "Get started in minutes",
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "border-cyan-300/20",
  },
  {
    icon: RefreshCcw,
    title: "Cancel Anytime",
    description: "No long-term contracts",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "border-violet-300/20",
  },
  {
    icon: CreditCard,
    title: "Stripe Secure Payments",
    description: "Your data is protected",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
    border: "border-blue-300/20",
  },
  {
    icon: CalendarDays,
    title: "Monthly & Yearly Billing",
    description: "Save up to 20% yearly",
    color: "text-pink-300",
    bg: "bg-pink-400/10",
    border: "border-pink-300/20",
  },
];

function PricingHero() {
  return (
    <div className="bg-[#010616] px-4 sm:px-6 lg:px-8">
      <section className="container relative isolate mx-auto overflow-hidden pb-10 pt-12 text-white lg:min-h-[calc(100vh-80px)] lg:pb-14 lg:pt-16">

        <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-md border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 shadow-[0_0_24px_rgba(37,99,235,0.20)]">
            Pricing
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[58px]">
            Pricing That Grows{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent sm:inline">
              With Your Business
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Start with what you need today. Scale your AI, employees and
            automation as your business grows.
          </p>
        </div>

        <div className="relative mt-8 w-full">
          
          <Image
            src="/images/price_1.svg"
            alt="KoraAI pricing plans for starter, pro, scale and enterprise businesses"
            width={1453}
            height={429}
            priority
            className="mx-auto h-auto w-full container"
          />
        </div>

        <div className="mt-4 flex flex-col items-center gap-3">
          <Link
            href="#plans"
            className="inline-flex h-12 min-w-44 items-center justify-center rounded-md border border-fuchsia-400/35 bg-[#070d22]/80 px-8 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.22)] transition-colors hover:border-fuchsia-300/60 hover:bg-fuchsia-500/10"
          >
            View Plans
          </Link>
          <span className="inline-flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-slate-300" />
            No credit card required
          </span>
        </div>

        <div className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description, color, bg, border }) => (
            <div
              key={title}
              className="flex items-center gap-4 border-white/10 px-4 py-3 lg:border-r lg:last:border-r-0"
            >
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-md border ${border} ${bg} ${color}`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm font-medium leading-5 text-white">
                  {title}
                </h2>
                <p className="mt-1 text-xs leading-4 text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}

export default PricingHero;
