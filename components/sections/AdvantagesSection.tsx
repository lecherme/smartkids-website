"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ADVANTAGES } from "@/lib/constants";
import { Building2, Shield, Zap, MapPin } from "lucide-react";

const advantageIcons = [Building2, Shield, Zap, MapPin];

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
            <div className="bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
                SmartKids vs 傳統外包
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex flex-col">
                  <div className="text-lg font-bold text-purple-400 mb-4 text-center">SmartKids</div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-cyan-500" />
                      </div>
                      <span className="font-medium text-zinc-200">透明溝通</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-cyan-500" />
                      </div>
                      <span className="font-medium text-zinc-200">靈活定價</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-cyan-500" />
                      </div>
                      <span className="font-medium text-zinc-200">技術深度</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-cyan-500" />
                      </div>
                      <span className="font-medium text-zinc-200">持續支持</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.005] border border-white/[0.03] backdrop-blur-xl border-t-white/5 flex flex-col">
                  <div className="text-lg font-bold text-zinc-500 mb-4 text-center">傳統外包</div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-orange-600/50" />
                      </div>
                      <span className="font-medium text-zinc-500">溝通障礙</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-orange-600/50" />
                      </div>
                      <span className="font-medium text-zinc-500">隱藏費用</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-orange-600/50" />
                      </div>
                      <span className="font-medium text-zinc-500">技術陳舊</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-orange-600/50" />
                      </div>
                      <span className="font-medium text-zinc-500">交付即結束</span>
                    </div>
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