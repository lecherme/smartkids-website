import { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
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
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.32)]">
                <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,51,204,0.22),rgba(136,68,255,0.12),rgba(34,211,238,0.10))]" />
                <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,79,216,0.40),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.24),transparent_50%)] opacity-90 blur-[6px]" />
                <div className="absolute inset-[1px] rounded-[15px] border border-white/10" />
                <div className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <span className="relative bg-gradient-to-r from-white via-fuchsia-100 to-cyan-200 bg-clip-text text-transparent font-bold text-base tracking-tight drop-shadow-[0_0_10px_rgba(255,79,216,0.28)]">
                  SK
                </span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight font-display">
                SmartKids<span className="bg-gradient-to-r from-[#A970FF] via-[#8C7BFF] to-[#75D8FF] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(140,123,255,0.28)]">.</span>
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
                    className="text-white hover:text-white/80 transition-colors text-sm font-medium relative group"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:flex items-center justify-center h-11 px-5 text-sm font-medium rounded-full cursor-pointer
                  border border-white/10 bg-white/[0.03] text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)]
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:border-fuchsia-400/40 hover:bg-white/[0.06] hover:shadow-[0_12px_30px_rgba(168,85,247,0.18)]"
                href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                立即諮詢
              </Button>

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
