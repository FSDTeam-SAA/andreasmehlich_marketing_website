"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  const particles = [
    "left-[8%] top-[26%] h-1.5 w-1.5 [animation-delay:0ms]",
    "left-[20%] top-[18%] h-1 w-1 [animation-delay:350ms]",
    "left-[18%] top-[55%] h-2 w-2 [animation-delay:900ms]",
    "left-[34%] bottom-[18%] h-1 w-1 [animation-delay:1200ms]",
    "right-[30%] top-[16%] h-1.5 w-1.5 [animation-delay:600ms]",
    "right-[10%] top-[34%] h-2 w-2 [animation-delay:1100ms]",
    "right-[18%] bottom-[22%] h-1.5 w-1.5 [animation-delay:450ms]",
    "right-[5%] bottom-[42%] h-1 w-1 [animation-delay:1600ms]",
    "left-[46%] top-[38%] h-1 w-1 [animation-delay:750ms]",
    "left-[52%] bottom-[30%] h-1.5 w-1.5 [animation-delay:1400ms]",
    "left-[7%] bottom-[32%] h-1 w-1 [animation-delay:1900ms]",
    "right-[34%] bottom-[12%] h-1 w-1 [animation-delay:2200ms]",
    "right-[45%] top-[12%] h-1 w-1 [animation-delay:1700ms]",
    "left-[62%] top-[58%] h-1 w-1 [animation-delay:250ms]",
  ];

  return (
    <section className="w-full bg-[#00091E] px-6 py-10 text-white md:px-12 lg:px-20 lg:py-12">
      <div className="mx-auto container">
        {/* Main CTA Box Panel with Glow and Borders matching image_fc80fa.png */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#050E25] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:p-9 lg:p-11">
          {/* Decorative background grid/waves effect using CSS layout */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-10 items-center">
            {/* ================= LEFT SIDE: CONTENT & BUTTONS ================= */}
            <div className="flex flex-col items-start space-y-6 lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl/tight text-white">
                Ready To Take Control <br className="hidden sm:inline" />
                Of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-400">
                  Your Business?
                </span>
              </h2>

              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
                Join thousands of business owners using KoraAI to save time, get
                more leads and grow faster.
              </p>

              {/* Button Groups */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                <Link href="/pricing">
                  <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0052ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(0,82,255,0.4)] transition-all hover:bg-[#0046d9] hover:scale-[1.02] active:scale-[0.98]">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* ================= RIGHT SIDE: GLOWING ROBOT SMILEY VECTOR ================= */}
            <div className="relative flex min-h-[210px] w-full items-center justify-center lg:col-span-5 lg:justify-end">
              <div className="cta-visual relative flex aspect-square w-full max-w-[315px] items-center justify-center md:max-w-[340px]">
                <div className="cta-network absolute inset-0 overflow-hidden rounded-full">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 340 340"
                    fill="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="ctaPlexusGradient"
                        x1="0"
                        y1="0"
                        x2="340"
                        y2="340"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#38bdf8" stopOpacity="0.1" />
                        <stop offset="0.5" stopColor="#0080ff" stopOpacity="0.78" />
                        <stop offset="1" stopColor="#a78bfa" stopOpacity="0.18" />
                      </linearGradient>
                      <filter
                        id="ctaPlexusGlow"
                        x="-40%"
                        y="-40%"
                        width="180%"
                        height="180%"
                      >
                        <feGaussianBlur stdDeviation="2.2" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <g className="cta-mesh cta-mesh-one">
                      <path
                        className="cta-link"
                        d="M8 110 C48 84 76 70 116 90 C149 107 172 68 214 58 C260 47 294 67 336 104"
                      />
                      <path
                        className="cta-link cta-link-soft"
                        d="M18 158 C68 132 98 143 132 124 C170 102 203 114 238 92 C278 67 308 84 335 126"
                      />
                      <path
                        className="cta-link cta-link-soft"
                        d="M22 218 C61 191 99 200 136 181 C178 159 212 168 248 143 C285 119 315 132 338 161"
                      />
                    </g>
                    <g className="cta-mesh cta-mesh-two">
                      <path
                        className="cta-link"
                        d="M0 262 C43 231 79 235 116 250 C153 266 182 224 224 215 C267 206 302 224 340 192"
                      />
                      <path
                        className="cta-link cta-link-soft"
                        d="M38 52 L78 102 L118 90 L132 181 L176 154 L214 58 L248 143 L314 116"
                      />
                      <path
                        className="cta-link cta-link-soft"
                        d="M42 282 L82 218 L136 181 L176 236 L224 215 L268 274 L318 228"
                      />
                    </g>
                    <g className="cta-svg-dots" filter="url(#ctaPlexusGlow)">
                      {[
                        [38, 52],
                        [78, 102],
                        [118, 90],
                        [176, 154],
                        [214, 58],
                        [248, 143],
                        [314, 116],
                        [42, 282],
                        [82, 218],
                        [136, 181],
                        [176, 236],
                        [224, 215],
                        [268, 274],
                        [318, 228],
                      ].map(([cx, cy], index) => (
                        <circle
                          key={`${cx}-${cy}`}
                          className="cta-svg-dot"
                          cx={cx}
                          cy={cy}
                          r={index % 3 === 0 ? 2.3 : 1.65}
                        />
                      ))}
                    </g>
                  </svg>
                </div>

                <div className="cta-constellation absolute inset-0">
                  <span className="cta-glow-dot absolute left-[22%] top-[18%] h-12 w-12 rounded-full bg-blue-500/10 blur-xl" />
                  <span className="cta-glow-dot cta-glow-dot-two absolute right-[8%] top-[32%] h-16 w-16 rounded-full bg-blue-400/10 blur-xl" />
                  <span className="cta-glow-dot cta-glow-dot-three absolute left-[38%] bottom-[16%] h-14 w-14 rounded-full bg-purple-400/10 blur-xl" />
                </div>

                {particles.map((particle) => (
                  <span
                    key={particle}
                    className={`cta-particle absolute ${particle} rounded-full bg-blue-100 shadow-[0_0_18px_rgba(56,189,248,0.95)]`}
                  />
                ))}

                <div className="cta-face-halo absolute z-10 h-[58%] w-[58%] rounded-full border border-blue-300/20 shadow-[0_0_44px_rgba(0,128,255,0.35)]" />

                <div className="cta-image relative z-20">
                  <Image
                    src="/images/cta_image.png"
                    width={500}
                    height={500}
                    alt="KoraAI assistant"
                    className="h-auto w-full drop-shadow-[0_0_32px_rgba(0,128,255,0.38)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-visual::before {
          position: absolute;
          content: "";
          border-radius: 9999px;
          pointer-events: none;
        }

        .cta-visual::before {
          inset: 18%;
          background: radial-gradient(
            circle,
            rgba(0, 128, 255, 0.24),
            rgba(0, 128, 255, 0.08) 46%,
            transparent 72%
          );
          filter: blur(10px);
          animation: ctaGlow 3.8s ease-in-out infinite;
        }

        .cta-network {
          opacity: 0.9;
          filter: drop-shadow(0 0 12px rgba(0, 128, 255, 0.5));
          animation: ctaNetworkFloat 7s ease-in-out infinite,
            ctaNetworkWave 11s ease-in-out infinite;
        }

        .cta-mesh {
          transform-box: fill-box;
          transform-origin: center;
        }

        .cta-mesh-one {
          animation: ctaMeshOne 8s ease-in-out infinite;
        }

        .cta-mesh-two {
          animation: ctaMeshTwo 9s ease-in-out infinite;
        }

        .cta-link {
          stroke: url(#ctaPlexusGradient);
          stroke-width: 1.1;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 4 9;
          filter: url(#ctaPlexusGlow);
          animation: ctaLinkFlow 6s linear infinite,
            ctaLinkPulse 3.6s ease-in-out infinite;
        }

        .cta-link-soft {
          opacity: 0.68;
          stroke-width: 0.9;
          animation-delay: 0.8s;
        }

        .cta-svg-dot {
          fill: #bfdbfe;
          opacity: 0.75;
          animation: ctaSvgDotPulse 3.2s ease-in-out infinite;
        }

        .cta-svg-dot:nth-child(2n) {
          animation-delay: 0.7s;
        }

        .cta-svg-dot:nth-child(3n) {
          animation-delay: 1.3s;
        }

        .cta-constellation {
          animation: ctaConstellationDrift 10s ease-in-out infinite;
        }

        .cta-glow-dot {
          animation: ctaGlowDot 4.5s ease-in-out infinite;
        }

        .cta-glow-dot-two {
          animation-delay: 1s;
        }

        .cta-glow-dot-three {
          animation-delay: 1.8s;
        }

        .cta-particle {
          animation: ctaParticleFloat 4.8s ease-in-out infinite,
            ctaParticlePulse 2.8s ease-in-out infinite;
        }

        .cta-face-halo {
          animation: ctaFaceHalo 3.5s ease-in-out infinite;
        }

        .cta-image {
          animation: ctaFloat 5s ease-in-out infinite;
        }

        @keyframes ctaGlow {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.94);
          }
          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        @keyframes ctaFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes ctaNetworkFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(7px, -5px, 0) scale(1.02);
          }
        }

        @keyframes ctaNetworkWave {
          0%,
          100% {
            border-radius: 45% 55% 50% 50%;
          }
          50% {
            border-radius: 55% 45% 48% 52%;
          }
        }

        @keyframes ctaMeshOne {
          0%,
          100% {
            transform: translate3d(-4px, 2px, 0) scale(1);
          }
          50% {
            transform: translate3d(8px, -7px, 0) scale(1.03);
          }
        }

        @keyframes ctaMeshTwo {
          0%,
          100% {
            transform: translate3d(5px, -3px, 0) scale(1);
          }
          50% {
            transform: translate3d(-7px, 7px, 0) scale(1.04);
          }
        }

        @keyframes ctaLinkFlow {
          to {
            stroke-dashoffset: -45;
          }
        }

        @keyframes ctaLinkPulse {
          0%,
          100% {
            opacity: 0.42;
          }
          50% {
            opacity: 0.95;
          }
        }

        @keyframes ctaSvgDotPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.82);
          }
          50% {
            opacity: 1;
            transform: scale(1.24);
          }
        }

        @keyframes ctaConstellationDrift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-8px, 6px, 0);
          }
        }

        @keyframes ctaGlowDot {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.82);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.12);
          }
        }

        @keyframes ctaParticleFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(7px, -10px, 0);
          }
        }

        @keyframes ctaParticlePulse {
          0%,
          100% {
            opacity: 0.4;
            box-shadow: 0 0 12px rgba(56, 189, 248, 0.75);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 22px rgba(56, 189, 248, 1);
          }
        }

        @keyframes ctaFaceHalo {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.82;
            transform: scale(1.04);
          }
        }
      `}</style>
    </section>
  );
}
