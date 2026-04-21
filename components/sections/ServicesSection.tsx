"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/constants";
import { Globe, Smartphone, Settings2, Users } from "lucide-react";

const iconMap = {
  Globe,
  Smartphone,
  Settings: Settings2,
  Users,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#030303] overflow-hidden section-transition ambient-bg from-purple-900/10 via-transparent to-transparent">

      {/* Ambient radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-900/10 rounded-full blur-[200px]" />
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-4 pointer-events-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
                核心服務
              </h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                聚焦 Web、小程序、AI 集成與自動化工作流，為中小企業提供實用而可持續的數位解決方案。
              </p>
            </div>
          </FadeIn>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {SERVICES.map((service: {title: string, description: string, icon: string}, index: number) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <FadeIn
                  key={index}
                  delay={0.1 * index}
                  direction="up"
                  className="h-full"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={Icon}
                    delay={index * 100}
                  />
                </FadeIn>
              );
            })}
          </div>

          {/* Additional info */}
          <FadeIn delay={0.5} direction="up">
            <div className="mt-20 p-12 rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent mb-2">現代技術棧</div>
                  <p className="text-zinc-500">
                    以現代框架與工程流程，提升交付效率與後續可維護性
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent mb-2">敏捷交付</div>
                  <p className="text-zinc-500">
                    以分階段方式推進需求、原型與上線，讓合作節奏更清晰
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent mb-2">持續支持</div>
                  <p className="text-zinc-500">
                    從開發到維護持續跟進，幫助系統穩定運行與逐步優化
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
