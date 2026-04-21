"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ADVANTAGES } from "@/lib/constants";
import { Building2, Shield, Zap, MapPin, Check, X } from "lucide-react";

const advantageIcons = [Building2, Shield, Zap, MapPin];
const comparisonRows = [
  {
    label: "溝通方式",
    smartkids: "透明同步，需求變更可快速對齊",
    traditional: "多層傳遞，容易出現理解落差",
  },
  {
    label: "合作模式",
    smartkids: "靈活定價，按目標與階段調整",
    traditional: "報價僵化，常伴隨隱藏費用",
  },
  {
    label: "技術能力",
    smartkids: "現代技術棧，兼顧速度與可維護性",
    traditional: "技術更新慢，長期成本偏高",
  },
  {
    label: "交付之後",
    smartkids: "持續支持與優化，不是上線就結束",
    traditional: "交付即結束，後續協作斷層明顯",
  },
];

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 md:py-36 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent bg-[#030303] section-transition">
      {/* Additional ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-900/10 rounded-full blur-[200px]" />
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <FadeIn direction="up" className="pointer-events-none">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
                市場優勢
              </h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                為什麼選擇SmartKids Tech？我們為您提供獨特的價值主張
              </p>
            </div>
          </FadeIn>

          {/* Advantages grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {ADVANTAGES.map((advantage: {title: string, description: string}, index: number) => {
              const Icon = advantageIcons[index];
              return (
                <FadeIn
                  key={index}
                  delay={0.1 * index}
                  direction="up"
                  className="h-full"
                >
                  <div className="h-full p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 hover:border-white/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="w-14 h-14 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {advantage.title}
                    </h3>

                    <p className="text-zinc-500 leading-relaxed">
                      {advantage.description}
                    </p>

                    {/* Removed "了解更多优势" link */}
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Comparison */}
          <FadeIn direction="up" delay={0.5}>
            <div className="relative overflow-hidden bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 p-6 md:p-10 rounded-[2rem]">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
                  SmartKids vs 傳統外包
                </h3>
                <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                  不只是做得出來，而是從溝通、執行到後續支持，都更穩定也更省心。
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl border-t-white/10 p-6 md:p-7 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <Check className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">SmartKids</div>
                      <div className="text-sm text-zinc-400">更透明、更靈活、更長期</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {comparisonRows.map((row) => (
                      <div
                        key={row.label}
                        className="rounded-2xl border border-white/[0.05] bg-black/20 p-4"
                      >
                        <div className="text-sm font-medium text-purple-300 mb-2">
                          {row.label}
                        </div>
                        <p className="text-base leading-relaxed text-zinc-100">
                          {row.smartkids}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl border-t-white/10 p-6 md:p-7 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                      <X className="h-5 w-5 text-zinc-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-zinc-200">傳統外包</div>
                      <div className="text-sm text-zinc-500">流程割裂，後期風險更高</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {comparisonRows.map((row) => (
                      <div
                        key={row.label}
                        className="rounded-2xl border border-white/[0.05] bg-black/20 p-4"
                      >
                        <div className="text-sm font-medium text-zinc-500 mb-2">
                          {row.label}
                        </div>
                        <p className="text-base leading-relaxed text-zinc-400">
                          {row.traditional}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
