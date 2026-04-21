"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { FOOTER } from "@/lib/constants";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    // 关键修复 1: 必须加上 relative，否则 inset-0 会相对于全屏定位
    // 关键修复 2: 加上 overflow-hidden 确保光晕不溢出到其他 Section
    <footer id="contact" className="relative bg-[#030303] border-t border-white/5 overflow-hidden">
      
      {/* 关键修复 3: 加上 -z-10 和 pointer-events-none，确保绝对不会拦截点击 */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none -z-10 select-none">
        {/* Ambient radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-purple-900/10 rounded-full blur-[200px]" />
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <FadeIn direction="up">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  聯繫我們
                </h3>

                <div className="space-y-4">
                  <a
                    href={`tel:${FOOTER.contact.phone}`}
                    className="flex items-center gap-3 rounded-3xl border border-white/[0.05] bg-white/[0.01] px-5 py-4 text-zinc-500 hover:text-white transition-all duration-300 group hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">電話</div>
                      <div className="text-sm">{FOOTER.contact.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                    className="flex items-center gap-3 rounded-3xl border border-white/[0.05] bg-white/[0.01] px-5 py-4 text-zinc-500 hover:text-white transition-all duration-300 group hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-green-500/30 flex items-center justify-center group-hover:border-green-500/50 transition-all">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium text-white">WhatsApp</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${FOOTER.contact.email}`}
                    className="flex items-center gap-3 rounded-3xl border border-white/[0.05] bg-white/[0.01] px-5 py-4 text-zinc-500 hover:text-white transition-all duration-300 group hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">郵箱</div>
                      <div className="text-sm">{FOOTER.contact.email}</div>
                    </div>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Offices */}
            <FadeIn direction="up" delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  辦公地點
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-3xl border border-white/[0.05] bg-white/[0.01] px-5 py-4 text-zinc-500 hover:text-white transition-all duration-300 group hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center mt-1 group-hover:border-purple-500/50 transition-all">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">香港辦公室</div>
                      <p className="text-sm">
                        {FOOTER.contact.hkOffice}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-3xl border border-white/[0.05] bg-white/[0.01] px-5 py-4 text-zinc-500 hover:text-white transition-all duration-300 group hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="w-12 h-12 rounded-full bg-white/[0.01] border border-white/[0.05] backdrop-blur-xl border-t-white/10 flex items-center justify-center mt-1 group-hover:border-purple-500/50 transition-all">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">內地聯絡處</div>
                      <p className="text-sm">
                        {FOOTER.contact.mainlandContact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="my-12 border-t border-white/5" />

          <FadeIn direction="up" delay={0.6}>
            <div className="text-center">
              <div className="text-zinc-500 text-sm mb-4">
                {FOOTER.copyright}
              </div>
              <div className="text-xs text-zinc-600">
                <a href="#" className="hover:text-purple-400 transition-colors mx-3">隐私政策</a>
                <a href="#" className="hover:text-purple-400 transition-colors mx-3">服务条款</a>
                <a href="#" className="hover:text-purple-400 transition-colors mx-3">网站地图</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
