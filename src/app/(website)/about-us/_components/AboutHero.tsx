import { BarChart3, ShieldCheck, Users, Zap } from "lucide-react";

const values = [
  {
    title: "Customer First",
    description:
      "Everything we build starts with understanding the needs of local businesses and their customers.",
    icon: Users,
    color: "text-blue-300",
    bg: "bg-blue-500/15",
    line: "bg-blue-400",
  },
  {
    title: "Innovation",
    description:
      "We use AI and automation to solve real problems and simplify the way businesses work.",
    icon: Zap,
    color: "text-violet-300",
    bg: "bg-violet-500/15",
    line: "bg-violet-400",
  },
  {
    title: "Reliability",
    description:
      "Local businesses rely on us every day. We build secure, stable and trustworthy solutions.",
    icon: ShieldCheck,
    color: "text-sky-300",
    bg: "bg-sky-500/15",
    line: "bg-sky-400",
  },
  {
    title: "Growth",
    description:
      "We're here to help businesses grow stronger, serve more customers and achieve more.",
    icon: BarChart3,
    color: "text-purple-300",
    bg: "bg-purple-500/15",
    line: "bg-purple-400",
  },
];

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.10),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-blue-300/10" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
            Our Mission
          </div>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[58px]">
            Our mission is simple.{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              Help every local business operate
            </span>
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              like a modern company.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300">
            We built KoraAI to give local businesses the tools, automation and
            intelligence they need to save time, delight customers and grow with
            confidence.
          </p>
        </div>

        <div className="relative mx-auto mt-14 h-20 max-w-5xl">
          <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_26px_rgba(59,130,246,0.95)]" />
          <div className="absolute inset-x-8 top-10 h-24 rounded-[100%] border-t border-blue-500/70 shadow-[0_-18px_36px_rgba(37,99,235,0.45)]" />
        </div>

        <div className="text-center text-[11px] font-bold uppercase tracking-[0.42em] text-blue-300">
          What Drives Us
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, description, icon: Icon, color, bg, line }) => (
            <article
              key={title}
              className="rounded-xl border border-blue-300/15 bg-[#061126]/70 p-7 text-center shadow-[0_0_34px_rgba(37,99,235,0.08)] backdrop-blur-sm"
            >
              <div
                className={`mx-auto grid h-16 w-16 place-items-center rounded-xl ${bg} ${color} shadow-[0_0_24px_rgba(37,99,235,0.16)]`}
              >
                <Icon className="h-8 w-8" strokeWidth={1.8} />
              </div>

              <h2 className="mt-7 text-xl font-semibold text-white">{title}</h2>
              <div className={`mx-auto mt-4 h-0.5 w-9 rounded-full ${line}`} />
              <p className="mx-auto mt-5 max-w-xs text-sm leading-6 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
