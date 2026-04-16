"use client";

import { CaseCard } from "@/components/ui/CaseCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { CAPABILITIES, FOOTER } from "@/lib/constants";
import {
  ReactIcon,
  VueIcon,
  SpringBootIcon,
  CloudIcon,
  TypeScriptIcon,
  NodeIcon,
} from "@/components/ui/TechIcons";

const techIcons = [
  { Icon: ReactIcon, name: "React" },
  { Icon: VueIcon, name: "Vue" },
  { Icon: SpringBootIcon, name: "Spring Boot" },
  { Icon: CloudIcon, name: "Cloud" },
  { Icon: TypeScriptIcon, name: "TypeScript" },
  { Icon: NodeIcon, name: "Node.js" },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                技術能力與成功案例
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                掌握前沿技術棧，為各行業企業提供可靠的技術解決方案
              </p>
            </div>
          </FadeIn>

          {/* Tech stack */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-center mb-10">
                技術棧
              </h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {techIcons.map(({ Icon, name }, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-slate-300 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Case studies */}
          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-2xl font-bold text-center mb-10">
              成功案例
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAPABILITIES.cases.map((caseStudy: {title: string, description: string, tags: readonly string[]}, index: number) => (
                <FadeIn
                  key={index}
                  delay={0.1 * index}
                  direction="up"
                  className="h-full"
                >
                  <CaseCard
                    title={caseStudy.title}
                    description={caseStudy.description}
                    tags={caseStudy.tags}
                    delay={index * 100}
                  />
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn direction="up" delay={0.8}>
            <div className="mt-20 text-center">
              <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400">
                <div className="bg-slate-900 rounded-xl px-8 py-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    您的項目，我們的專長
                  </h3>
                  <p className="text-slate-300 mb-4">
                    無論您的需求是什麼，我們都能提供專業的解決方案
                  </p>
                  <a
                    href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    開始合作諮詢
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}