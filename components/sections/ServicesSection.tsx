"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/constants";
import { GlobeIcon } from "@/components/ui/icons/GlobeIcon";
import { SmartphoneIcon } from "@/components/ui/icons/SmartphoneIcon";
import { SettingsIcon } from "@/components/ui/icons/SettingsIcon";
import { UsersIcon } from "@/components/ui/icons/UsersIcon";

const iconMap = {
  Globe: GlobeIcon,
  Smartphone: SmartphoneIcon,
  Settings: SettingsIcon,
  Users: UsersIcon,
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
                為企業提供全方位的數字化解決方案，從網站開發到中台定制，一站式服務
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
            <div className="mt-20 p-12 rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent mb-2">定制化</div>
                  <p className="text-zinc-500">
                    根據企業需求量身定制解決方案
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent mb-2">一站式</div>
                  <p className="text-zinc-500">
                    從諮詢、設計到開發、維護全程服務
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent mb-2">敏捷開發</div>
                  <p className="text-zinc-500">
                    快速迭代，及時響應市場變化
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