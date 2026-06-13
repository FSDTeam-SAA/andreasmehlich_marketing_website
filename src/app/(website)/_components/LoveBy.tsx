"use client"

import React from "react"
import { Star, Play, ArrowUpRight } from "lucide-react"

export default function LoveBy() {
  const cardPattern =
    "url(\"data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.55' stroke-width='1.2'%3E%3Cpath d='M24 30h28a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H38l-10 9v-9h-4a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8Z'/%3E%3Cpath d='M84 20c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14Z'/%3E%3Cpath d='M92 84h18a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7h-7l-8 7v-7h-3a7 7 0 0 1-7-7V91a7 7 0 0 1 7-7Z'/%3E%3Cpath d='M22 104c8-10 18-10 26 0M36 91v28M24 43h24M24 51h17M73 117l12-12 12 12M112 38l10-10M122 38l-10-10'/%3E%3Ccircle cx='32' cy='88' r='4'/%3E%3Ccircle cx='115' cy='66' r='3'/%3E%3C/g%3E%3C/svg%3E\")";
  const cardImage =
    "url(\"data:image/svg+xml,%3Csvg width='360' height='260' viewBox='0 0 360 260' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%233b82f6'/%3E%3Cstop offset='1' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' stroke='url(%23g)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' opacity='.9'%3E%3Crect x='205' y='32' width='104' height='76' rx='18'/%3E%3Cpath d='M226 58h58M226 78h36M91 42h58a18 18 0 0 1 18 18v32a18 18 0 0 1-18 18h-25l-22 20v-20H91a18 18 0 0 1-18-18V60a18 18 0 0 1 18-18Z'/%3E%3Cpath d='M93 71h50M93 91h34M67 171c16-24 45-24 62 0M98 131v71M47 218h104M242 145c25 0 45 20 45 45s-20 45-45 45-45-20-45-45 20-45 45-45Z'/%3E%3Cpath d='M223 190l13 13 29-32M305 139l25-25M330 139l-25-25'/%3E%3Ccircle cx='55' cy='50' r='5'/%3E%3Ccircle cx='315' cy='210' r='6'/%3E%3C/g%3E%3C/svg%3E\")";

  // image_fcfd57.png থেকে নেওয়া বাস্তবসম্মত ডাটা সেট
  const testimonials = [
    {
      name: "David Miller",
      role: "Barbershop Owner",
      quote: "Kora AI has completely transformed our business. We save hours every day and our booking rate has drastically increased.",
      initials: "DM",
      avatar: "from-blue-500 to-cyan-400",
    },
    {
      name: "Sophie Taylor",
      role: "Salon Owner",
      quote: "The AI receptionist is incredible. It handles everything so professionally and answers clients instantly without any delay.",
      initials: "ST",
      avatar: "from-fuchsia-500 to-pink-400",
    },
    {
      name: "Dr. James Carter",
      role: "Dental Clinic Owner",
      quote: "Kora AI is our secret weapon. We scale operations, improve customer happiness, and convert leads dynamically in real time.",
      initials: "JC",
      avatar: "from-emerald-500 to-teal-400",
    },
    {
      name: "Sarah Jenkins",
      role: "Spa Owner",
      quote: "More leads, more bookings, and significantly more revenue. Kora AI is an absolute game changer for local business ecosystems.",
      initials: "SJ",
      avatar: "from-violet-500 to-indigo-400",
    }
  ]

  return (
    <section className="w-full bg-[#00091E] px-6 py-20 text-white md:px-12 lg:px-20 overflow-hidden">
      {/* বর্ডার অ্যানিমেশনের জন্য গ্লোবাল CSS ইনজেকশন */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes border-beam {
          0%, 100% { offset-distance: 0%; }
          50% { offset-distance: 100%; }
        }
        .animate-border-beam {
          position: absolute;
          inset: 0;
          border: 1px solid transparent;
          border-radius: 1.5rem;
          background: linear-gradient(to right, #3b82f6, #06b6d4, #8b5cf6) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: destination-out;
          motion-path: path('M 24 0 L 320 0 C 333 0, 344 11, 344 24 L 344 196 C 344 209, 333 220, 320 220 L 24 220 C 11 220, 0 209, 0 196 L 0 24 C 0 11, 11 0, 24 0 Z');
          animation: border-beam 6s linear infinite;
          width: 100%;
          height: 100%;
        }
      `}} />

      <div className="mx-auto container">
        
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved By Business Owners
          </h2>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="relative rounded-3xl p-[1px] overflow-hidden group bg-gradient-to-b from-zinc-800/40 to-transparent hover:from-blue-500/20 transition-all duration-300"
            >
              {/* মডার্ন বর্ডার লাইট বিম ইফেক্ট (Border Beam Effect) */}
              <div className="animate-border-beam opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Inner Panel Container */}
              <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[23px] bg-[#020b24]/90 p-5 backdrop-blur-md">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: cardImage,
                    backgroundPosition: "right -42px bottom -22px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "260px 190px",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: cardPattern,
                    backgroundSize: "140px 140px",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-[#020b24]/35 to-[#020b24]/70" />
                
                {/* Top Badge Content Layer */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-blue-400 tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">
                      Kora AI
                    </span>
                    <button className="h-6 w-6 rounded-full bg-zinc-900/60 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Feedback Quote */}
                  <p className="text-xs leading-relaxed text-zinc-300 font-normal line-clamp-4">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* Bottom User Profile Section */}
                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-zinc-900/80 pt-4">
                  
                  {/* Info Row */}
                  <div className="flex items-center gap-3">
                    <div
                      aria-label={item.name}
                      className={`relative grid h-9 w-9 flex-shrink-0 place-items-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br ${item.avatar}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),transparent_26%),radial-gradient(circle_at_70%_75%,rgba(0,0,0,0.22),transparent_36%)]" />
                      <span className="relative text-[10px] font-bold text-white">
                        {item.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide">{item.name}</h4>
                      <p className="text-[10px] text-zinc-500 font-medium mt-0.5">{item.role}</p>
                    </div>
                  </div>

                  {/* Mini Media Action & Stars */}
                  <div className="flex flex-col items-end gap-1.5">
                    {/* Floating Audio/Video Preview Mini Play Circle Button */}
                    <button className="h-7 w-7 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:scale-105 transition-transform">
                      <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                    </button>
                    {/* Stars Rating Row matching image_fcfd57.png */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
