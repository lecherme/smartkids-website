"use client";

import { CaseCard } from "@/components/ui/CaseCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { CAPABILITIES, FOOTER } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import {
  NextjsIcon,
  PythonIcon,
  CloudIcon,
  TypeScriptIcon,
  NodeIcon,
  AiIcon,
} from "@/components/ui/TechIcons";

const techIcons = [
  { Icon: NextjsIcon, name: "Next.js" },
  { Icon: PythonIcon, name: "Python" },
  { Icon: CloudIcon, name: "Azure" },
  { Icon: TypeScriptIcon, name: "TypeScript" },
  { Icon: NodeIcon, name: "Node.js" },
  { Icon: AiIcon, name: "AI / RAG" },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 md:py-36 bg-[#030303] section-transition ambient-bg from-purple-900/10 via-transparent to-transparent">
      {/* Ambient radial glow */}
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
                技術能力與落地方案
              </h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                以 AI-Native 技術棧與模組化實踐，幫助中小企業更穩定地完成從需求到上線。
              </p>
              <p className="text-base text-zinc-600 max-w-3xl mx-auto leading-relaxed mt-4">
                其中 AI / RAG 方案可應用於企業知識問答、客服回覆與內部資料檢索，適合需要提升回應效率與資訊可用性的團隊。
              </p>
            </div>
          </FadeIn>

          {/* Tech stack */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-center mb-10 text-white">
                技術棧
              </h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {techIcons.map(({ Icon, name }, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-500 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-colors duration-500" />
                    </div>
                    <span className="text-sm md:text-base text-zinc-500 group-hover:text-white transition-colors duration-500">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Case studies */}
          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-2xl font-bold text-center mb-10 text-white">
              落地方案
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
              <div className="inline-block rounded-3xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 px-10 py-10 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  讓 AI 更快落地到您的業務
                </h3>
                <p className="text-zinc-400 mb-4">
                  從官網、小程序到 AI 助手與自動化流程，我們會按實際需求提供合適的技術方案。
                </p>
                <Button
                  variant="ghost"
                  size="lg"
                  className="mx-auto flex items-center justify-center min-w-[160px] h-[70px] px-6 text-lg font-medium rounded-full cursor-pointer
                    bg-black text-white hover:bg-black
                    [border:2px_solid_transparent] [background:linear-gradient(to_right,#000000,#000000)_padding-box,_linear-gradient(to_right,#FF33CC,#8844FF)_border-box]
                    transition-all duration-300 hover:scale-105 group"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  開始合作諮詢
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
