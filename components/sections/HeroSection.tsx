"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { HERO, FOOTER } from "@/lib/constants";
import { Globe, ChevronRight } from "lucide-react";

export function HeroSection() {
  const firstLine = "AI-Native Web";
  const secondLine = "與企業自動化方案";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24 md:py-32 section-transition ambient-bg from-purple-900/10 via-transparent to-transparent bg-[#030303] pointer-events-auto">

      {/* Subtle grid overlay */}
      {/* <div className="absolute inset-0 opacity-5 pointer-events-none select-none" style={{ pointerEvents: 'none' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div> */}

      <div className="relative container mx-auto px-6 z-20 pointer-events-none">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - transparent stroke style */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 mb-10 px-6 py-3 rounded-full border border-white/[0.05] bg-white/[0.01] backdrop-blur-xl border-t-white/10">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-normal tracking-wider">香港 · 大灣區 · AI-Native</span>
            </div>
          </FadeIn>

          {/* Main headline - split into two lines */}
          <FadeIn delay={0.3} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tighter mb-8 leading-tight">
              <div className="bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
                {firstLine}
              </div>
              <div className="text-white mt-6 tracking-wide">
                {secondLine}
              </div>
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn delay={0.5} direction="up">
            <p className="text-2xl font-medium font-display text-white mb-12 max-w-2xl mx-auto">
              {HERO.subheadline}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.7} direction="up" className="relative z-50">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Primary CTA - Web3 gradient button */}
              <Button
                variant="ghost"
                size="lg"
                className="flex items-center justify-center min-w-[160px] h-[70px] px-6 text-lg font-medium rounded-full cursor-pointer
                  bg-black text-white hover:bg-black
                  [border:2px_solid_transparent] [background:linear-gradient(to_right,#000000,#000000)_padding-box,_linear-gradient(to_right,#FF33CC,#8844FF)_border-box]
                  transition-all duration-300 hover:scale-105 group"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.cta}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Secondary CTA - Glassmorphism button */}
              <Button
                variant="ghost"
                size="lg"
                className="flex items-center justify-center min-w-[160px] h-[70px] px-6 text-lg font-medium rounded-full cursor-pointer
                  bg-black text-white border-2 border-white hover:bg-black
                  transition-all duration-300 hover:scale-105"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                href="#capabilities"
              >
                查看案例
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={1} direction="up" className="relative z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-4xl mx-auto">
              {[
                { value: "Next.js", label: "Web 與企業官網開發" },
                { value: "AI", label: "客服與知識助手集成" },
                { value: "Supabase", label: "自動化與數據工作流" },
                { value: "HK / GBA", label: "香港與大灣區服務" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-10 rounded-3xl backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] border-t-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm font-normal tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Ambient Lighting - Ultra-soft radial gradients */}
      {/* <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none select-none" style={{ pointerEvents: 'none' }}>
        {/* Large radial glow center */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-900/10 rounded-full blur-[200px]" /> */}
        {/* Purple glow bottom left */}
        {/* <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[180px]" /> */}
        {/* Cyan glow bottom right */}
        {/* <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px]" /> */}
        {/* Top center subtle glow */}
        {/* <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" /> */}
        {/* Core glow behind title - larger and softer */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-[200px]" /> */}
      {/* </div> */}

      {/* Geometric wave line decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden -z-10 pointer-events-none select-none" style={{ pointerEvents: 'none' }}>
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div
            className="absolute bottom-2 left-0 right-0 h-6"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.3) 20%, rgba(59, 130, 246, 0.3) 50%, rgba(34, 211, 238, 0.3) 80%, transparent 100%)",
              clipPath: "polygon(0% 100%, 10% 60%, 20% 100%, 30% 40%, 40% 100%, 50% 20%, 60% 100%, 70% 60%, 80% 100%, 90% 30%, 100% 100%, 100% 100%, 0% 100%)"
            }}
          />
        </div>
      </div> */}

      {/* Scroll indicator */}
      {/* <FadeIn delay={1.5}>
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none select-none">
          <div className="animate-bounce">
            <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-xl">
              <div className="w-1.5 h-4 bg-gradient-to-b from-purple-500 to-cyan-400 rounded-full mt-3" />
            </div>
          </div>
        </div>
      </FadeIn> */}
    </section>
  );
}
