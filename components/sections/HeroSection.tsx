"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { HERO, FOOTER } from "@/lib/constants";
import { Globe, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-900/20" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main headline */}
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">香港 · 大灣區 · 國際</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {HERO.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
              {HERO.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.7} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group px-8 py-4 text-lg font-semibold
             bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600
             hover:from-blue-600 hover:via-blue-700 hover:to-cyan-700
             text-white shadow-xl hover:shadow-blue-500/40
             transition-all duration-300"
                href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.cta}
                {/* <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg
                border border-white/20
                bg-white/5 backdrop-blur-lg
                text-white
                hover:bg-white/10
                transition-all duration-300"
                href="#capabilities"
              >
                查看案例
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={1} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {[
                { value: "50+", label: "成功項目" },
                { value: "100%", label: "客戶滿意度" },
                { value: "24h", label: "響應時間" },
                { value: "3+", label: "年行業經驗" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1.5}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}