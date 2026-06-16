import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Globe2,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  SquareChartGantt,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    audience: "Solo Business",
    price: "€49",
    note: "/ month",
    description: "Everything you need to get started and automate your business.",
    icon: User,
    accent: "cyan",
    border: "border-cyan-300/45",
    glow: "shadow-[0_0_42px_rgba(6,182,212,0.13)]",
    button: "from-cyan-500 to-blue-600",
    included: [
      { icon: MessageSquare, label: "AI WhatsApp Assistant", value: "120 min / month" },
      { icon: MessageSquare, label: "Website AI Chatbot", value: "100 conversations / month" },
      { icon: SquareChartGantt, label: "Kora Dashboard Assistant", value: "500 messages / month" },
      { icon: User, label: "Employees", value: "Not Included" },
      { icon: Phone, label: "AI Phone Assistant", value: "Not Included" },
      { icon: MonitorSmartphone, label: "Kora Mobile App Assistant", value: "Not Included" },
    ],
    system: "Assistant, Inbox, Calendar, Live View, Basic Websites + booking, Accounting",
  },
  {
    name: "Pro",
    audience: "Growing Business",
    price: "€129",
    note: "/ month",
    description: "Advanced tools and AI to grow smarter and save time.",
    icon: TrendingUp,
    accent: "blue",
    border: "border-blue-400/70",
    glow: "shadow-[0_0_52px_rgba(59,130,246,0.24)]",
    button: "from-blue-600 to-violet-600",
    badge: "Best Seller",
    included: [
      { icon: Phone, label: "AI Phone Assistant", value: "250 min / month" },
      { icon: MessageSquare, label: "AI WhatsApp Assistant", value: "400 min / month" },
      { icon: MessageSquare, label: "Website AI Chatbot", value: "400 conversations / month" },
      { icon: SquareChartGantt, label: "Kora Dashboard Assistant", value: "2,000 messages / month" },
      { icon: MonitorSmartphone, label: "Kora Mobile App Assistant", value: "2,000 messages / month" },
      { icon: Users, label: "Employees Included", value: "Up to 3 Employees" },
    ],
    system: "Everything in Starter, plus Full System, Employees and KoraGo",
  },
  {
    name: "Scale",
    audience: "Multi Location Business",
    price: "€249",
    note: "/ month",
    description: "More power, more automation and more team members.",
    icon: Building2,
    accent: "violet",
    border: "border-violet-400/45",
    glow: "shadow-[0_0_42px_rgba(139,92,246,0.15)]",
    button: "from-violet-600 to-purple-700",
    included: [
      { icon: Phone, label: "AI Phone Assistant", value: "750 min / month" },
      { icon: MessageSquare, label: "AI WhatsApp Assistant", value: "1,500 min / month" },
      { icon: MessageSquare, label: "Website AI Chatbot", value: "2,000 conversations / month" },
      { icon: SquareChartGantt, label: "Kora Dashboard Assistant", value: "10,000 messages / month" },
      { icon: MonitorSmartphone, label: "Kora Mobile App Assistant", value: "10,000 messages / month" },
      { icon: Users, label: "Employees Included", value: "Up to 10 Employees" },
    ],
    system: "Everything in Pro, plus Team Meetings, More Employees, Multi Location",
  },
  {
    name: "Enterprise",
    audience: "Enterprise Business",
    price: "€399+",
    note: "/ month",
    description: "Custom solutions with unlimited usage and dedicated support.",
    icon: Globe2,
    accent: "pink",
    border: "border-pink-400/50",
    glow: "shadow-[0_0_42px_rgba(236,72,153,0.14)]",
    button: "from-pink-500 to-rose-600",
    customPricing: "Custom Pricing",
    included: [
      "Custom AI Phone Usage",
      "Custom WhatsApp Usage",
      "Custom Website Chatbot Usage",
      "Custom Kora Assistant Usage",
      "Custom Employee Limits",
      "Custom Integrations",
      "Dedicated Support & Consultation",
    ],
    system: "Everything in Scale, plus Advanced Analytics, Custom Reports, API & Integrations",
  },
];

const accentClasses = {
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "border-cyan-300/35",
    divider: "border-cyan-300/10",
  },
  blue: {
    text: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-300/35",
    divider: "border-blue-300/10",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-300/35",
    divider: "border-violet-300/10",
  },
  pink: {
    text: "text-pink-300",
    bg: "bg-pink-500/10",
    border: "border-pink-300/35",
    divider: "border-pink-300/10",
  },
};

function ChoosePlan() {
  return (
    <section
      id="plans"
      className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_8%_42%,rgba(14,165,233,0.10),transparent_26%),radial-gradient(circle_at_92%_48%,rgba(236,72,153,0.12),transparent_28%)]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-md border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">
            Pricing
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
            Choose The Plan That{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              Fits You
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Start with what you need today. Upgrade anytime and scale your AI,
            team and automations as your business grows.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const accent = accentClasses[plan.accent as keyof typeof accentClasses];

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-full flex-col rounded-2xl border ${plan.border} bg-[#020a1c]/80 p-5 ${plan.glow} backdrop-blur-sm`}
              >
                {plan.badge && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_0_24px_rgba(99,102,241,0.55)]">
                    {plan.badge}
                  </div>
                )}

                <div className="text-center">
                  <div
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-full border ${accent.border} ${accent.bg} ${accent.text}`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className={`mt-4 text-xl font-bold uppercase ${accent.text}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-200">{plan.audience}</p>
                </div>

                <div className={`my-5 border-t ${accent.divider}`} />

                <div className="text-center">
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-3xl font-semibold leading-none text-white">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-slate-300">{plan.note}</span>
                  </div>
                  {plan.customPricing && (
                    <p className="mt-1 text-sm text-slate-300">{plan.customPricing}</p>
                  )}
                  <p className="mx-auto mt-4 max-w-[230px] text-xs leading-5 text-slate-300">
                    {plan.description}
                  </p>
                </div>

                <div className={`my-5 border-t ${accent.divider}`} />

                <div>
                  <h4 className={`text-xs font-bold uppercase ${accent.text}`}>
                    Dashboard System
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {plan.system}
                  </p>
                </div>

                <div className="mt-5 flex-1">
                  <h4 className={`text-xs font-bold uppercase ${accent.text}`}>
                    Included Usage
                  </h4>
                  <div className="mt-3 space-y-3">
                    {plan.included.map((item) => {
                      if (typeof item === "string") {
                        return (
                          <div key={item} className="flex gap-3 text-xs text-slate-300">
                            <span
                              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${accent.border} ${accent.text}`}
                            >
                              <Check className="h-3 w-3" strokeWidth={2} />
                            </span>
                            <span className="leading-5">{item}</span>
                          </div>
                        );
                      }

                      const ItemIcon = item.icon;

                      return (
                        <div key={`${plan.name}-${item.label}`} className="flex gap-3">
                          <span
                            className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border ${accent.border} ${accent.bg} ${accent.text}`}
                          >
                            <ItemIcon className="h-4 w-4" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0 text-xs leading-4">
                            <p className="text-slate-200">{item.label}</p>
                            <p className="text-slate-400">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="#"
                  className={`mt-7 inline-flex h-11 items-center justify-center gap-3 rounded-md bg-gradient-to-r ${plan.button} px-5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.25)] transition-transform hover:-translate-y-0.5`}
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-4 text-center text-sm text-slate-400 sm:text-left">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-violet-300/40 text-violet-300">
            <Check className="h-4 w-4" />
          </span>
          <p>
            All plans include core CRM, Calendar, Booking, Invoicing & more.
            Upgrade, downgrade or cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChoosePlan;
