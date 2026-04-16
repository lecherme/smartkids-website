"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ADVANTAGES } from "@/lib/constants";
import { Building2, Shield, Zap, MapPin } from "lucide-react";

const advantageIcons = [Building2, Shield, Zap, MapPin];

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                市場優勢
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {advantage.title}
                    </h3>

                    <p className="text-slate-400">
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
            <div className="rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                SmartKids vs 傳統外包
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/5 to-green-500/0 border border-green-500/10 flex flex-col">
                  <div className="text-lg font-bold text-green-400 mb-4 text-center">SmartKids</div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                      </div>
                      <span className="font-medium">透明溝通</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                      </div>
                      <span className="font-medium">靈活定價</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                      </div>
                      <span className="font-medium">技術深度</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-green-500" />
                      </div>
                      <span className="font-medium">持續支持</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/5 to-red-500/0 border border-red-500/10 flex flex-col">
                  <div className="text-lg font-bold text-red-400 mb-4 text-center">傳統外包</div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-red-500" />
                      </div>
                      <span className="font-medium">溝通障礙</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-red-500" />
                      </div>
                      <span className="font-medium">隱藏費用</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-red-500" />
                      </div>
                      <span className="font-medium">技術陳舊</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-red-500" />
                      </div>
                      <span className="font-medium">交付即結束</span>
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