import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function RadyToSee() {
  return (
    <section className="bg-[#010616] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative isolate overflow-hidden rounded-xl border border-blue-400/30 bg-[#061126]/75 px-6 py-7 shadow-[0_0_46px_rgba(37,99,235,0.18)] sm:px-10 lg:px-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_92%_50%,rgba(37,99,235,0.34),transparent_22%),linear-gradient(90deg,rgba(37,99,235,0.08),transparent_45%,rgba(139,92,246,0.12))]" />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_130px]">
            <div>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Ready to see what KoraAI can do for your business?
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Join thousands of local businesses already growing with KoraAI.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-colors hover:bg-blue-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/kora-hub"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-blue-300/15 bg-[#07142d]/60 px-7 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
              >
                Explore Kora Hub
              </Link>
            </div>

            <Image
              src="/images/korah_3.svg"
              alt="Kora AI assistant"
              width={116}
              height={114}
              className="absolute right-8 top-1/2 hidden h-28 w-28 -translate-y-1/2 drop-shadow-[0_0_34px_rgba(14,165,233,0.76)] lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RadyToSee;
