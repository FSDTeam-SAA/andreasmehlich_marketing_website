"use client";

import Image from "next/image";
import {
  Bell,
  CalendarDays,
  CheckSquare,
  Clock,
  Mail,
  MessageSquareText,
  Mic,
  Users,
} from "lucide-react";

const scheduleFeatures = [
  { icon: CalendarDays, label: "Daily schedule" },
  { icon: Clock, label: "Upcoming appointments" },
  { icon: Users, label: "Employee calendar" },
  { icon: Users, label: "Shift overview" },
  { icon: CheckSquare, label: "Personal tasks" },
];

const communicationFeatures = [
  { icon: MessageSquareText, label: "Team inbox" },
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Internal messages" },
  { icon: Users, label: "Meeting updates" },
  { icon: Mail, label: "Email access" },
];

const assistantPrompts = [
  "What is my next appointment?",
  "Show my schedule tomorrow.",
  "Check my leave balance.",
  "What tasks are assigned today?",
];

function FeatureItem({
  icon: Icon,
  label,
}: {
  icon: typeof CalendarDays;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-blue-300">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm font-medium text-slate-300">{label}</span>
    </div>
  );
}

function PhoneImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-8 bottom-4 h-12 rounded-full bg-blue-500/20 blur-2xl" />
      <Image
        src={src}
        width={360}
        height={620}
        alt={alt}
        className="relative h-auto w-full [mask-image:linear-gradient(90deg,transparent_0%,#000_10%,#000_88%,transparent_100%),linear-gradient(180deg,transparent_0%,#000_8%,#000_88%,transparent_100%)] [mask-composite:intersect] drop-shadow-[0_0_32px_rgba(37,99,235,0.16)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000711_0%,rgba(0,7,17,0)_12%,rgba(0,7,17,0)_84%,#000711_100%),linear-gradient(180deg,#000711_0%,rgba(0,7,17,0)_10%,rgba(0,7,17,0)_84%,#000711_100%)]" />
    </div>
  );
}

function ScheduleTask() {
  return (
    <section className="relative mt-10 overflow-hidden bg-[#000711] px-4 pb-16 text-white sm:px-6 lg:px-8 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_55%_96%,rgba(79,70,229,0.12),transparent_34%),linear-gradient(180deg,#020813_0%,#000711_12%,#000711_88%,#020813_100%)]" />

      <div className="relative mx-auto max-w-6xl space-y-10 lg:space-y-14">
        <div className="grid min-h-[420px] items-center gap-8 overflow-hidden rounded-2xl border border-blue-300/10 p-6 shadow-2xl shadow-black/40 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Schedule & Tasks
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Organize Your Day.{" "}
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Stay On Track.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              View your schedule, manage tasks and never miss an important
              appointment.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {scheduleFeatures.map((feature) => (
                <FeatureItem key={feature.label} {...feature} />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-6">
            <PhoneImage
              src="/images/kora_2.svg"
              alt="Kora Go schedule and tasks screen"
            />
          </div>
        </div>

        <div className="grid min-h-[420px] items-center gap-8 overflow-hidden rounded-2xl border border-blue-300/10 p-6 shadow-2xl shadow-black/40 lg:grid-cols-12 lg:p-10">
          <div className="order-2 flex justify-center lg:order-1 lg:col-span-6">
            <PhoneImage
              src="/images/kora_3.svg"
              alt="Kora Go team communication screen"
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Team Communication
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Stay Connected.{" "}
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Always In The Loop.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-400">
              Communicate with your team, access important messages and never
              miss critical updates.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {communicationFeatures.map((feature) => (
                <FeatureItem key={feature.label} {...feature} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid min-h-[420px] items-center gap-8 overflow-hidden rounded-2xl border border-blue-300/10 p-6 shadow-2xl shadow-black/40 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Kora Assistant
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Your Personal{" "}
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Assistant.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              Ask anything, get instant answers and let KoraAI handle the work
              for you.
            </p>

            <div className="mt-7 space-y-3">
              {assistantPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="flex items-center gap-3 rounded-lg border border-blue-300/10 bg-[#07162f]/80 px-4 py-3"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-purple-500/15 text-purple-300">
                    <SparkleIcon />
                  </div>
                  <span className="text-sm font-medium text-slate-300">
                    {prompt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:col-span-6">
            <PhoneImage
              src="/images/kora_4.svg"
              alt="Kora Go AI assistant screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return <Mic className="h-4 w-4" />;
}

export default ScheduleTask;
