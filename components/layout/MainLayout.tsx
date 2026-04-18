import { ReactNode } from "react";
import { FOOTER } from "@/lib/constants";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Premium SaaS Navbar */}
      <header className="sticky top-0 z-50 bg-[#030303]/95 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                SmartKids<span className="text-primary">.</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {["首頁", "服務", "案例", "優勢", "聯繫"].map((item) => {
                const href = item === "首頁" ? "#home" :
                             item === "服務" ? "#services" :
                             item === "案例" ? "#capabilities" :
                             item === "優勢" ? "#advantages" :
                             "#contact";
                return (
                  <a
                    key={item}
                    href={href}
                    className="text-zinc-300 hover:text-white transition-colors text-sm font-medium relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                );
              })}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-6">
              <a
                href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                立即諮詢
              </a>

              <button className="lg:hidden p-3 rounded-full hover:bg-white/5 transition-colors">
                <div className="w-6 h-0.5 bg-zinc-300 mb-1.5" />
                <div className="w-6 h-0.5 bg-zinc-300 mb-1.5" />
                <div className="w-6 h-0.5 bg-zinc-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      {/* Footer is included as a section in page.tsx */}
    </div>
  );
}