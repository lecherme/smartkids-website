import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "SmartKids Tech - 為中小企業提供 AI-Native Web、AI 與自動化方案的香港技術團隊",
  description: "總部位於香港的數位技術工作室，專注為大灣區中小企業提供 AI-Native Web 開發、小程序、AI 助手集成與自動化數據工作流服務。",
  keywords: ["香港科技", "AI Native", "數位轉型", "中小企業", "Next.js", "AI 助手", "Supabase", "大灣區"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hans"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#030303] text-zinc-400 font-sans">
        <LanguageProvider>
          <main className="flex-1">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
