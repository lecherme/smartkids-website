import { ReactNode } from "react";
import { FOOTER } from "@/lib/constants";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header - can be enhanced later */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                SmartKids Tech
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
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
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
              <a
                href={`https://wa.me/${FOOTER.contact.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                立即諮詢
              </a>
            </nav>

            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-slate-300 mb-1.5" />
              <div className="w-6 h-0.5 bg-slate-300 mb-1.5" />
              <div className="w-6 h-0.5 bg-slate-300" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      {/* Footer is included as a section in page.tsx */}
    </div>
  );
}