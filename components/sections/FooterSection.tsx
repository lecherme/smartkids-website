"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { FOOTER } from "@/lib/constants";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
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
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">電話</div>
                      <div>{FOOTER.contact.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp联系"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${FOOTER.contact.email}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium">郵箱</div>
                      <div>{FOOTER.contact.email}</div>
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

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">香港辦公室</div>
                      <p className="text-slate-400">
                        {FOOTER.contact.hkOffice}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mt-1">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white mb-1">內地聯絡處</div>
                      <p className="text-slate-400">
                        {FOOTER.contact.mainlandContact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Divider */}
          <div className="my-12 border-t border-slate-800" />

          {/* Copyright */}
          <FadeIn direction="up" delay={0.6}>
            <div className="text-center">
              <div className="text-slate-500 mb-4">
                {FOOTER.copyright}
              </div>
              <div className="text-sm text-slate-600">
                <a href="#" className="hover:text-slate-400 transition-colors mx-3">
                  隐私政策
                </a>
                <a href="#" className="hover:text-slate-400 transition-colors mx-3">
                  服务条款
                </a>
                <a href="#" className="hover:text-slate-400 transition-colors mx-3">
                  网站地图
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}