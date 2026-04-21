import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "SmartKids Tech - 驅動中小企業數字化轉型的香港力量",
  description: "香港科技公司，專注於為中小企業提供響應式網站開發、小程序生態方案、企業中台定制和全方位數字化支持服務。",
  keywords: ["香港科技", "數字化轉型", "中小企業", "網站開發", "小程序", "企業中台"],
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
