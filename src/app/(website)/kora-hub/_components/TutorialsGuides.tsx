import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const tutorials = [
  {
    number: "01",
    title: "Getting Started With KoraAI",
    duration: "6:45",
    image: "/images/korah_1.svg",
    accent: "from-blue-500/10 to-cyan-500/10",
  },
  {
    number: "02",
    title: "Connect Your Calendar",
    duration: "5:30",
    image: "/images/dash_2.svg",
    accent: "from-sky-500/10 to-blue-500/10",
  },
  {
    number: "03",
    title: "Build Your Website",
    duration: "8:12",
    image: "/images/webb_1.svg",
    accent: "from-violet-500/20 to-blue-500/10",
  },
  {
    number: "04",
    title: "Configure Your AI Assistant",
    duration: "7:20",
    image: "/images/korah_3.svg",
    accent: "from-slate-500/10 to-blue-500/10",
  },
  {
    number: "05",
    title: "Manage Leads And CRM",
    duration: "6:15",
    image: "/images/dashboard_image.svg",
    accent: "from-blue-500/10 to-slate-500/10",
  },
  {
    number: "06",
    title: "Launch Marketing Campaigns",
    duration: "9:30",
    image: "/images/kora_4.svg",
    accent: "from-blue-500/10 to-indigo-500/10",
  },
];

function TutorialsGuides() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12),transparent_32%)]" />

      <div className="container mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-5">
            <h2 className="text-3xl font-semibold leading-none text-white">
              Tutorials & Guides
            </h2>
            <p className="text-sm font-medium text-slate-400">
              Step-by-step guides to help you succeed with KoraAI.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            View all Tutorials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.number}
              href="#"
              className="group relative min-h-[126px] overflow-hidden rounded-xl border border-blue-300/15 bg-[#061126]/75 p-4 shadow-[0_0_34px_rgba(37,99,235,0.09)] transition-colors hover:border-blue-300/35"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tutorial.accent}`}
              />
              <div className="absolute inset-y-0 right-0 w-[48%] overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt=""
                  width={260}
                  height={180}
                  className="h-full w-full object-cover opacity-45 blur-[0.5px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061126] via-[#061126]/45 to-transparent" />
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <span className="text-2xl font-bold leading-none text-blue-400/90">
                  {tutorial.number}
                </span>

                <h3 className="mt-7 max-w-[120px] text-sm font-semibold leading-5 text-white">
                  {tutorial.title}
                </h3>

                <span className="absolute bottom-0 right-0 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  <Play className="h-3 w-3 fill-current" />
                  {tutorial.duration}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TutorialsGuides;
