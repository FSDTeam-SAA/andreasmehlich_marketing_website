"use client";

import React from "react";
import {
  MessageSquare,
  PhoneOff,
  Users,
  Calendar,
  Inbox,
  Smartphone,
  Layout,
  BarChart3,
} from "lucide-react";

export default function NeedToGrow() {
  // image_08c68a.png এর প্রতিটি কার্ডের ডাটা এবং আইকনগুলোর নির্দিষ্ট কালার স্কিম
  const tools = [
    {
      title: "AI Assistant",
      description: "Your 24/7 AI assistant for conversations and tasks.",
      icon: MessageSquare,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "AI Phone Agent",
      description: "Never miss a call. AI answers and books appointments.",
      icon: PhoneOff,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "CRM",
      description: "Manage employees, services and many in more in one crm.",
      icon: Users,
      iconColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
    },
    {
      title: "Calendar",
      description: "Smart scheduling and automated reminders.",
      icon: Calendar,
      iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Inbox",
      description: "All messages, mails and team meetings in one inbox.",
      icon: Inbox,
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "HR Mobile APP",
      description: "Your personal mobile app for employees and more.",
      icon: Smartphone,
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Website Builder",
      description: "Launch a stunning website in minutes with AI.",
      icon: Layout,
      iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Analytics",
      description: "Powerful insights to grow your business faster.",
      icon: BarChart3,
      iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section className="w-full bg-[#00091E] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto container">
        {/* Header Section from image_08c68a.png */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Everything You Need To <span className="text-[#0544F8]">Grow</span>
          </h2>
          <p className="max-w-2xl text-sm tracking-wide text-zinc-400 sm:text-base">
            Powerful AI tools working together to attract, engage and convert
            more customers.
          </p>
        </div>

        {/* Responsive Grid Layout (8 Columns on Large Desktop) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-2xl border border-zinc-900/50 bg-[#031133]/40 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-[#031133]/80 hover:-translate-y-1"
              >
                {/* Custom Icon Container */}
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl border ${tool.iconColor}`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Card Title */}
                <h3 className="mb-2 text-base font-bold tracking-wide text-white">
                  {tool.title}
                </h3>

                {/* Card Description */}
                <p className="text-[12px] leading-5 text-zinc-400 font-normal">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
