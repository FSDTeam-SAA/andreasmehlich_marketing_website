"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  // কোন প্রশ্নটি ওপেন আছে তার ইনডেক্স ট্র্যাক করার জন্য স্টেট
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // image_fc9382.png থেকে নেওয়া বাস্তবসম্মত প্রশ্ন এবং ডামি উত্তরসমূহ
  const faqData = [
    {
      question: "Can I manage multiple locations from one dashboard?",
      answer: "Yes, you can seamlessly connect and manage multiple business locations from a single centralized AI Dashboard with real-time switching."
    },
    {
      question: "Can I connect my existing tools and integrations?",
      answer: "Absolutely! KoraAI integrates perfectly with most popular calendars, payment gateways, and CRM systems right out of the box."
    },
    {
      question: "Can my team members access the dashboard?",
      answer: "Yes, you can invite your team members and assign them custom roles and access levels depending on their job responsibilities."
    },
    {
      question: "How real-time is the data in the dashboard?",
      answer: "The data updates instantly. Any appointment booked, message received, or payment made reflects on your dashboard within seconds."
    },
    {
      question: "Does the dashboard work on mobile devices?",
      answer: "Yes, the dashboard is fully responsive and optimized for mobile browsers, and it works perfectly alongside the Kora GO app."
    },
    {
      question: "Can I track revenue and payments?",
      answer: "Yes, the system provides detailed financial analytics, tracking your daily, weekly, and monthly revenue milestones effortlessly."
    },
    {
      question: "Can I customize user roles and permissions?",
      answer: "Yes, complete granular control is available. You can define precisely who can view reports, edit shifts, or access AI features."
    },
    {
      question: "Is training or setup support included?",
      answer: "We offer comprehensive onboarding documentation, step-by-step video tutorials, and 24/7 dedicated customer success support."
    },
    {
      question: "Is my data secure and protected?",
      answer: "Security is our priority. We use enterprise-grade end-to-end encryption to ensure your business data remains private and safe."
    },
    {
      question: "Can I export reports and analytics?",
      answer: "Yes, you can easily export all your performance logs, shift rosters, and financial reports into CSV or PDF formats anytime."
    }
  ]

  return (
    <section className="w-full bg-[#00091E] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto container">
        
        {/* Top Header Section matching image_fc9382.png */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            FAQ
          </div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">Questions</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
            Everything you need to know about the AI Dashboard and how it can transform your business.
          </p>
        </div>

        {/* 2-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-start w-full">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div 
                key={idx} 
                className="rounded-2xl border border-zinc-900/60 bg-[#020a21]/40 overflow-hidden transition-all duration-300 hover:border-zinc-800"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
                >
                  <span className="text-base font-bold tracking-wide text-zinc-200 pr-4 group-hover:text-white">
                    {faq.question}
                  </span>
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-zinc-400 bg-[#00091E]/50">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-white transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus className="h-5 w-5 font-bold text-white transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer Content Area with Smooth Animation */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 border-t border-zinc-900/40" : "max-h-0"
                  }`}
                >
                  <div className="p-5 text-xs leading-relaxed text-white font-normal bg-[#00091E]/20">
                    {faq.answer}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}