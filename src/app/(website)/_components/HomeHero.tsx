"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Crown,
  Dumbbell,
  Scissors,
  Sparkles,
  Stethoscope,
  Utensils,
} from "lucide-react";

const industries = [
  { label: "Barbershop", icon: Scissors },
  { label: "Beauty Salon", icon: Sparkles },
  { label: "Dental Clinic", icon: Stethoscope },
  { label: "Gym & Fitness", icon: Dumbbell },
  { label: "Spa & Wellness", icon: Crown },
  { label: "Auto Service", icon: Car },
  { label: "Restaurant", icon: Utensils },
];

const avatars = [
  { label: "AT", color: "#0f766e" },
  { label: "JM", color: "#b45309" },
  { label: "RK", color: "#1d4ed8" },
  { label: "NL", color: "#7c3aed" },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#00091E] px-4 pb-8 pt-12 sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:pb-10 lg:pt-16 border-b border-blue-400/15">
     
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:min-h-[calc(100vh-136px)]">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-blue-400/15 bg-blue-400/10 px-3 py-1.5 text-[11px] font-bold uppercase text-slate-300 shadow-[0_0_24px_rgba(37,99,235,0.16)]">
              AI-Powered Growth
            </div>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[48px]">
              Your AI Operating System{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                For Local Businesses
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-6 text-slate-200">
              AI Receptionist, CRM, HR-Mobile App, Website, Accounting &
              Analytics - all in one platform.
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/pricing"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[#0643F6] px-7 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.55)] transition-colors hover:bg-blue-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#need-to-grow"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-blue-300/10 bg-[#03142d]/60 px-6 text-sm font-medium text-slate-200 transition-colors hover:border-blue-300/25 hover:bg-blue-500/10 hover:text-white"
              >
                Explore KoraAI
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <div
                    key={avatar.label}
                    className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#00091E] text-[10px] font-bold text-white"
                    style={{ backgroundColor: avatar.color }}
                  >
                    {avatar.label}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-300">
                Trusted by{" "}
                <span className="font-semibold text-white">10,000+</span>{" "}
                business owners
              </p>
            </div>
          </div>

          <div className="relative lg:-mr-4">
            <div className="absolute -inset-3 -z-10" />
            <div className="overflow-hidden rounded-[1.7rem] border border-blue-400/25 bg-[#061126]/75 p-2 shadow-[0_0_70px_rgba(37,99,235,0.26)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.25rem] bg-[#071126]">
                <Image
                  src="/images/hero.svg"
                  alt="KoraAI business dashboard preview"
                  width={668}
                  height={451}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden bg-blue-300/10 sm:grid-cols-3 lg:grid-cols-7">
          {industries.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 bg-[#00091E] px-4 py-5 text-xs font-semibold uppercase text-slate-400"
            >
              <Icon className="h-5 w-5 text-slate-300" strokeWidth={1.7} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
