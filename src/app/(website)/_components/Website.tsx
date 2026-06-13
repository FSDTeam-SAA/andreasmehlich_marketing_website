"use client"

import React from "react"
import { Info, Files, Paintbrush, Globe, Send, ArrowRight } from "lucide-react"

export default function Website() {
  // image_07d303.png এর প্রতিটি স্টেপের ডাটা, আইকন এবং কাস্টম কালার স্কিম
  const steps = [
    {
      title: "Information",
      description: "Get all the information about your business.",
      icon: Info,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Pages",
      description: "Create and organize your website pages.",
      icon: Files,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Theme",
      description: "Choose a theme that fits your brand.",
      icon: Paintbrush,
      iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Domain",
      description: "Secure your domain for your website.",
      icon: Globe,
      iconColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
    },
    {
      title: "Publish",
      description: "Go live and share your website with the world.",
      icon: Send,
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  ]

  return (
    <section className="w-full bg-[#00091E] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto container">
        
        {/* Header Title Section matching image_07d303.png */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The <span className="text-[#1B51FE]">Website</span> Building Journey
          </h2>
        </div>

        {/* Outer Container Layer for the Timeline Row */}
        <div className="rounded-2xl border border-zinc-900/60 bg-[#031133]/30 p-6 md:p-8 backdrop-blur-sm">
          
          {/* Flex Row Container */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isLastStep = index === steps.length - 1

              return (
                <div
                  key={index}
                  className="flex flex-1 animate-[fadeStep_0.7s_ease-out_both] items-center justify-between lg:justify-start lg:gap-4"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  
                  {/* Single Step Card Content Structure */}
                  <div className="flex items-center gap-4 text-left group">
                    {/* Glowing Icon Holder */}
                    <div className={`flex h-12 w-12 flex-shrink-0 animate-[softPulse_2.8s_ease-in-out_infinite] items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${step.iconColor}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    {/* Text block */}
                    <div className="max-w-[180px]">
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-[11px] leading-normal text-zinc-400 font-normal mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Arrow Element (Hidden after the last step, and turns into down-arrow on mobile dynamically) */}
                  {!isLastStep && (
                    <div className="flex items-center justify-center text-zinc-600 px-2 lg:mx-auto">
                      <ArrowRight className="h-4 w-4 animate-[arrowFlow_1.8s_ease-in-out_infinite] transform rotate-90 text-zinc-500 opacity-80 transition-transform lg:rotate-0" />
                    </div>
                  )}

                </div>
              )
            })}
          </div>

        </div>
      </div>
      <style jsx>{`
        @keyframes fadeStep {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes softPulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 22px rgba(59, 130, 246, 0.18);
          }
        }

        @keyframes arrowFlow {
          0%,
          100% {
            opacity: 0.45;
            transform: translateX(0) rotate(90deg);
          }
          50% {
            opacity: 1;
            transform: translateX(4px) rotate(90deg);
          }
        }

        @media (min-width: 1024px) {
          @keyframes arrowFlow {
            0%,
            100% {
              opacity: 0.45;
              transform: translateX(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: translateX(4px) rotate(0deg);
            }
          }
        }
      `}</style>
    </section>
  )
}
