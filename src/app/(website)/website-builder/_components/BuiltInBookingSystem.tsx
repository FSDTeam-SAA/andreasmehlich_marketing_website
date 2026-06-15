"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Users,
  UserRoundCheck,
} from "lucide-react";

const bookingFeatures = [
  {
    icon: CalendarDays,
    title: "Online Booking 24/7",
    description: "Customers can book anytime, from any device.",
  },
  {
    icon: Users,
    title: "Calendar Integration",
    description: "All appointments sync instantly with your calendar.",
  },
  {
    icon: Bell,
    title: "Instant Confirmations",
    description: "Automatic email & SMS notifications for customers.",
  },
  {
    icon: UserRoundCheck,
    title: "Employee Assignment",
    description: "Assign appointments to specific team members.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Website Leads",
    description: "All bookings and leads are saved in your dashboard.",
  },
];

function BuiltInBookingSystem() {
  return (
    <section className="relative overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(37,99,235,0.18),transparent_34%)]" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 shadow-[0_0_26px_rgba(6,182,212,0.22)]">
            Built-In Booking System
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Turn Visitors Into{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Customers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Powerful online booking system integrated directly into your
            website. Capture leads, book appointments and grow your business.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src="/images/webb_2.svg"
            width={1260}
            height={570}
            alt="Built-in booking system workflow"
            className="mx-auto h-auto w-full drop-shadow-[0_0_60px_rgba(37,99,235,0.22)]"
          />
        </div>

        <div className="mt-9 overflow-hidden rounded-2xl border border-blue-300/10 bg-[#061126]/80 shadow-2xl shadow-black/40">
          <div className="grid gap-px bg-blue-300/10 sm:grid-cols-2 lg:grid-cols-5">
            {bookingFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[#041025] px-6 py-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-500/10 text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-start gap-5 rounded-2xl border border-blue-300/10 bg-[#061126]/80 p-6 shadow-2xl shadow-black/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-purple-500/15 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.22)]">
              <CalendarDays className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Ready To Get More Bookings?
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Activate your booking system and start converting visitors into
                customers.
              </p>
            </div>
          </div>

          <Link
            href="#"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-colors hover:bg-blue-500"
          >
            Build My Website
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BuiltInBookingSystem;
