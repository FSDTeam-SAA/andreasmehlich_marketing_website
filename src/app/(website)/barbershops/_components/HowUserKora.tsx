"use client";

import {
  Car,
  Crown,
  Dumbbell,
  MapPin,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "James Davis",
    business: "Haircut Studio",
    location: "Dublin, Ireland",
    quote:
      "KoraAI handles our calls and bookings 24/7. We've never missed so many appointments. Game changer!",
    initials: "JD",
    avatar: "from-slate-200 via-sky-200 to-blue-600",
  },
  {
    name: "Olivia Wilson",
    business: "Glow Beauty Salon",
    location: "London, UK",
    quote:
      "The dashboard gives me complete control of my business. I can see everything in real-time.",
    initials: "OW",
    avatar: "from-amber-200 via-rose-300 to-fuchsia-700",
  },
  {
    name: "Michael Brown",
    business: "Beard Trim Barbershop",
    location: "Manchester, UK",
    quote:
      "The AI phone agent is incredible! It sounds so natural and our clients love it.",
    initials: "MB",
    avatar: "from-cyan-100 via-blue-300 to-slate-800",
  },
  {
    name: "Sarah Johnson",
    business: "Wellness Center",
    location: "Toronto, Canada",
    quote:
      "Kora Go app keeps my team organized and productive every day. Everything just works together.",
    initials: "SJ",
    avatar: "from-orange-200 via-amber-400 to-rose-700",
  },
];

const brands = [
  { name: "Glow Beauty", icon: Sparkles },
  { name: "Beard Trim", icon: Crown },
  { name: "Haircut Studio", icon: Scissors },
  { name: "Wellness Center", icon: Sparkles },
  { name: "Fitness Gym", icon: Dumbbell },
  { name: "AutoCare", icon: Car },
];

function HowUserKora() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_14%,rgba(37,99,235,0.20),transparent_30%),radial-gradient(circle_at_8%_28%,rgba(14,165,233,0.10),transparent_28%),radial-gradient(circle_at_94%_34%,rgba(139,92,246,0.12),transparent_30%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-36 w-72 -translate-x-1/2 rounded-full border border-blue-400/15 opacity-70" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300 shadow-[0_0_24px_rgba(37,99,235,0.22)]">
            Testimonials
          </div>

          <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Loved By Business Owners{" "}
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Who Use KoraAI Every Day
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Thousands of local businesses are saving time, getting more leads,
            and growing faster with KoraAI.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[330px] flex-col rounded-2xl border border-blue-300/15 bg-[#061126]/70 p-6 shadow-[0_0_42px_rgba(37,99,235,0.10)] backdrop-blur-sm transition-colors hover:border-blue-300/30"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br ${item.avatar} shadow-[0_0_24px_rgba(37,99,235,0.18)]`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,0.70),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(0,0,0,0.28),transparent_45%)]" />
                  <span className="relative text-sm font-black text-white drop-shadow">
                    {item.initials}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-5 text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {item.business}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {item.location}
                  </p>
                </div>
              </div>

              <p className="mt-9 flex-1 text-lg leading-9 text-slate-300">
                {item.quote}
              </p>

              <div className="mt-8 flex gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-current"
                    strokeWidth={1.8}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-blue-300/15 bg-[#061126]/55 px-5 py-8 shadow-[0_0_50px_rgba(37,99,235,0.10)] backdrop-blur-sm">
          <p className="text-center text-base text-slate-300">
            Join 1000+ businesses already growing with KoraAI.
          </p>

          <div className="mt-7 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center justify-center gap-3 text-slate-400"
              >
                <Icon className="h-8 w-8 shrink-0" strokeWidth={1.8} />
                <span className="max-w-[96px] text-sm font-bold uppercase leading-4 tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowUserKora;
