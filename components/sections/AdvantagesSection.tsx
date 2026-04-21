"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ADVANTAGES } from "@/lib/constants";
import { Building2, Shield, Zap, MapPin, Check, X } from "lucide-react";

const advantageIcons = [Building2, Shield, Zap, MapPin];
const comparisonRows = [
  {
    label: "交付速度",
    smartkids: "以分階段方式推進需求、原型與上線，讓客戶更早看到可用成果",
    traditional: "前期投入較多，客戶通常需要更久才能看到實際成果",
  },
  {
    label: "AI 能力",
    smartkids: "可按業務需求集成 AI 客服、知識助手與自動化回覆能力",
    traditional: "通常以傳統功能開發為主，AI 能力需要額外規劃與整合",
  },
  {
    label: "成本結構",
    smartkids: "以開發服務費加維護服務費模式合作，範圍與節奏更清晰",
    traditional: "報價常偏重一次性交付，後續維護與變更安排較不靈活",
  },
  {
    label: "交付之後",
    smartkids: "可持續提供維護、優化與標準化模組支持，不是上線就結束",
    traditional: "交付後支援通常需要另行安排，後續優化節奏較不固定",
  },
];

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="relative py-24 md:py-36 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent bg-[#030303] section-transition overflow-hidden"
    >
      {/* Additional ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
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
                以香港本地服務能力結合現代技術交付方式，為中小企業提供清晰、穩定且可持續的合作體驗。
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

          <FadeIn direction="up" delay={0.35}>
            <div className="mb-20 rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  合作流程
                </h3>
                <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                  以清晰節奏推進項目，讓需求、交付與後續支持都有明確安排。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    step: "01",
                    title: "需求梳理",
                    description: "了解業務目標、使用場景與預算範圍。",
                  },
                  {
                    step: "02",
                    title: "原型確認",
                    description: "先確認核心頁面、流程與功能優先級。",
                  },
                  {
                    step: "03",
                    title: "開發上線",
                    description: "按階段完成開發、測試與正式部署。",
                  },
                  {
                    step: "04",
                    title: "維護優化",
                    description: "根據使用情況持續維護與迭代調整。",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-white/[0.05] bg-black/20 p-5"
                  >
                    <div className="text-sm font-semibold text-purple-300 mb-2">
                      {item.step}
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Comparison */}
          <FadeIn direction="up" delay={0.5}>
            <div className="relative overflow-hidden bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 p-6 md:p-10 rounded-[2rem]">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
                  SmartKids vs 傳統外包
                </h3>
                <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                  我們希望提供的是清晰的合作方式、穩定的交付節奏，以及可持續的後續支持。
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
                      <div className="text-sm text-zinc-400">透明協作，穩定交付，持續支持</div>
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
