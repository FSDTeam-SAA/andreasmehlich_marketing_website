"use client";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Calculator,
  Globe2,
  LayoutGrid,
  Mail,
  MessageCircle,
  PhoneCall,
  Star,
  UsersRound,
  Video,
} from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "AI Receptionist",
    description:
      "Kora AI answers every call, qualifies customers and books appointments 24/7. Never miss another opportunity.",
    color: "text-blue-400",
    bg: "bg-blue-600/15",
  },
  {
    icon: CalendarDays,
    title: "Online Booking",
    description:
      "Let customers book appointments online anytime, anywhere. Fully customizable to your services.",
    color: "text-purple-400",
    bg: "bg-purple-600/15",
  },
  {
    icon: CalendarDays,
    title: "Smart Calendar",
    description:
      "Manage appointments, staff schedules and availability in one beautiful, easy-to-use calendar.",
    color: "text-emerald-400",
    bg: "bg-emerald-600/15",
  },
  {
    icon: UsersRound,
    title: "Team Scheduling",
    description:
      "Assign shifts, manage availability and keep your team in sync. Built for barbershops of any size.",
    color: "text-amber-400",
    bg: "bg-amber-500/15",
  },
  {
    icon: Star,
    title: "Reviews & Reputation",
    description:
      "Automatically request reviews and showcase your best feedback to attract more clients.",
    color: "text-pink-400",
    bg: "bg-pink-500/15",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track your growth, understand your customers and make data-driven decisions to scale your business.",
    color: "text-blue-400",
    bg: "bg-blue-600/15",
  },
];

const extraTools = [Calculator, Globe2, MessageCircle, Mail, Video];

function ButyFeaturesBarber() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_88%_70%,rgba(126,34,206,0.12),transparent_30%)]" />
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-blue-400">
            Features for Barbershops
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[54px]">
            All the Tools You Need to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Grow.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Powerful features built specifically for barbershops to save time,
            increase bookings and keep your clients happy.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, description, color, bg }) => (
            <article
              key={title}
              className="group rounded-xl border border-blue-300/10 bg-[#06142b]/75 p-6 shadow-xl shadow-black/20 transition-colors hover:border-blue-400/25 hover:bg-[#071832]/90"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${bg} ${color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {description}
                  </p>

                  <a
                    href="#"
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${color}`}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-blue-400/40 bg-[#06142b]/70 p-px shadow-[0_0_40px_rgba(37,99,235,0.12)]">
          <div className="grid gap-8 rounded-2xl bg-[#041025]/95 px-6 py-7 md:grid-cols-[1fr_auto_1.1fr] md:items-center lg:px-8">
            <div className="flex items-center gap-6">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-purple-400 bg-purple-600/15 text-purple-300 shadow-[0_0_30px_rgba(126,34,206,0.24)]">
                <LayoutGrid className="h-9 w-9" />
              </div>

              <div>
                <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Accounting, Website, Teamchat, Mail, Meetings and many more.
                  </span>
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Everything you need for your Barbershop.
                </p>
              </div>
            </div>

            <div className="hidden h-20 w-px bg-blue-300/15 md:block" />

            <div className="grid grid-cols-5 gap-3 sm:gap-5">
              {extraTools.map((Icon, index) => (
                <div
                  key={index}
                  className="grid aspect-square min-h-12 place-items-center rounded-full border border-white/5 bg-slate-800/55 text-slate-200"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButyFeaturesBarber;
