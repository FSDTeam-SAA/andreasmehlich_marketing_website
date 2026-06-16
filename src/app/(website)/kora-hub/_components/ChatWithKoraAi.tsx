"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  {
    type: "user",
    text: "How does KoraAI work for a beauty salon?",
    time: "10:30 AM",
  },
  {
    type: "ai",
    text: "KoraAI helps beauty salons answer calls, book appointments, send reminders, follow up with leads, and automate marketing - so you can focus on your clients.",
    time: "10:30 AM",
  },
  {
    type: "user",
    text: "Can KoraAI replace my receptionist?",
    time: "10:31 AM",
  },
  {
    type: "ai",
    text: "Yes! Our AI Phone Agent handles calls 24/7, books appointments, answers common questions and captures leads - just like a real receptionist.",
    time: "10:30 AM",
  },
];

const questions = [
  {
    question: "How does the AI phone assistant work?",
    answer:
      "KoraAI answers calls, understands common customer questions, books appointments and captures leads even when your team is busy.",
  },
  {
    question: "Can I use my own phone number?",
    answer:
      "Yes. You can connect your existing business number or use a new number for your AI phone assistant.",
  },
  {
    question: "Does KoraAI work with WhatsApp?",
    answer:
      "Yes. KoraAI can help automate WhatsApp conversations, follow-ups and customer replies based on your plan.",
  },
  {
    question: "How fast can I get started?",
    answer:
      "Most businesses can get started in minutes. After setup, KoraAI can begin answering questions and helping with bookings.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can upgrade, downgrade or cancel your plan anytime without long-term contracts.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. KoraAI is built with secure data handling, protected access and privacy-focused workflows for your business.",
  },
];

function ChatWithKoraAi() {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState(messages);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = inputValue.trim();

    if (!message) {
      return;
    }

    setChatMessages((currentMessages) => [
      ...currentMessages,
      {
        type: "user",
        text: message,
        time: "Now",
      },
    ]);
    setInputValue("");
  }

  return (
    <section className="relative isolate overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="grid items-start gap-5 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative flex min-h-0 flex-col rounded-2xl border border-blue-300/15 bg-[#061126]/70 p-5 shadow-[0_0_48px_rgba(37,99,235,0.10)] backdrop-blur-sm sm:p-6 lg:h-[500px] lg:pl-16">
            <Image
              src="/images/korah_3.svg"
              alt="Kora AI chatbot assistant"
              width={116}
              height={114}
              className="absolute -left-7 top-24 z-10 h-16 w-16 drop-shadow-[0_0_30px_rgba(14,165,233,0.70)] sm:-left-10 sm:top-28 sm:h-24 sm:w-24"
            />

            <div className="ml-8 sm:ml-0">
              <h2 className="text-2xl font-semibold text-white">
                Chat With Kora AI
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Ask anything. Get instant answers.
              </p>
            </div>

            <ScrollArea className="mt-6 min-h-0 flex-1 pr-2">
              <div className="space-y-4">
                {chatMessages.map((message, index) => {
                  const isAi = message.type === "ai";

                  return (
                    <div
                      key={`${message.type}-${index}`}
                      className={`flex ${isAi ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`rounded-lg border border-blue-300/10 bg-[#0a1730]/85 px-4 py-3 shadow-[0_12px_34px_rgba(0,0,0,0.18)] ${
                          isAi ? "w-full max-w-[410px]" : "w-full max-w-[430px]"
                        }`}
                      >
                        {isAi && (
                          <div className="mb-2 flex items-center gap-2">
                            <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-500/15 text-blue-400">
                              <Sparkles className="h-3.5 w-3.5 fill-current" />
                            </span>
                            <span className="text-xs font-semibold text-white">
                              Kora AI
                            </span>
                          </div>
                        )}
                        <p className="text-xs leading-5 text-slate-300">
                          {message.text}
                        </p>
                        <p className="mt-1 text-right text-[10px] text-blue-300/70">
                          {message.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            <form
              onSubmit={handleSubmit}
              className="mt-5 flex items-center gap-3 rounded-lg border border-blue-300/10 bg-[#0a1730]/80 px-4 py-3"
            >
              <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask Kora AI anything..."
                className="min-w-0 flex-1 bg-transparent text-xs text-slate-200 outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.42)] transition-colors hover:bg-blue-500"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-blue-300/15 bg-[#061126]/70 p-5 shadow-[0_0_48px_rgba(37,99,235,0.10)] backdrop-blur-sm sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Q&A Center
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Find answers to the most common questions.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                View all industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="question-0"
              className="mt-6 overflow-hidden rounded-lg border border-blue-300/10"
            >
              {questions.map(({ question, answer }, index) => (
                <AccordionItem
                  key={question}
                  value={`question-${index}`}
                  className="border-blue-300/10 bg-[#0a1730]/70 last:border-b-0"
                >
                  <AccordionTrigger className="px-4 py-4 text-sm font-medium text-slate-300 hover:bg-blue-500/10 hover:text-white hover:no-underline [&>svg]:text-blue-400">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#08152b]/75 px-4 pb-4 pr-10 text-xs leading-5 text-slate-400">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatWithKoraAi;
