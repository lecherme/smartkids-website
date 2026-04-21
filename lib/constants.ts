export const SITE = {
  name: "SmartKids Tech",
  title: "為中小企業提供 AI-Native Web、AI 與自動化方案的香港技術團隊",
  description: "總部位於香港的數位技術工作室，為大灣區中小企業提供 AI-Native Web 開發、小程序、AI 助手集成與自動化數據工作流服務。",
} as const;

export const NAVIGATION = {
  home: "首頁",
  services: "服務",
  capabilities: "能力與案例",
  advantages: "市場優勢",
  contact: "聯繫我們",
} as const;

export const HERO = {
  headline: "為中小企業提供 AI-Native Web、AI 與自動化方案的香港技術團隊",
  subheadline: "服務香港與大灣區中小企業，提供 Web、小程序、AI 助手與自動化工作流方案。",
  cta: "立即諮詢",
} as const;

export const SERVICES = [
  {
    title: "敏捷 Web 與官網開發",
    description: "基於 Next.js 打造響應式企業官網與業務入口，兼顧品牌展示、易用性與後續擴展。",
    icon: "Globe",
  },
  {
    title: "小程序與業務入口構建",
    description: "構建微信、支付寶等業務入口，幫助企業更快把服務、表單與流程放到移動端。",
    icon: "Smartphone",
  },
  {
    title: "AI 助手與流程集成",
    description: "集成 AI 客服、自動回覆與知識問答能力，讓企業可以在現有業務流程中逐步使用 AI。",
    icon: "Settings",
  },
  {
    title: "自動化數據工作流",
    description: "利用 Supabase 等工具串接表單、後台與資料同步備份流程，減少重複操作與資料遺漏。",
    icon: "Users",
  },
] as const;

export const CAPABILITIES = {
  techStack: ["Next.js", "Python", "Azure", "TypeScript", "Node.js", "AI / RAG"],
  cases: [
    {
      title: "AI 原生企業官網",
      description: "以 Next.js 建立響應式品牌官網，協助企業更快完成從需求確認到原型上線。",
      tags: ["Next.js", "官網", "敏捷交付"],
    },
    {
      title: "AI 客服與知識助手",
      description: "基於 Vercel AI SDK 與 RAG 架構，為企業構建 AI 客服與內部知識問答助手。",
      tags: ["AI", "Vercel AI SDK", "RAG"],
    },
    {
      title: "自動化數據同步流程",
      description: "以 Supabase 串接業務資料同步與備份流程，減少手工操作與資料遺漏風險。",
      tags: ["Supabase", "自動化", "數據工作流"],
    },
  ],
} as const;

export const ADVANTAGES = [
  {
    title: "香港本地服務",
    description: "總部位於香港，熟悉本地中小企業需求，也具備大灣區協作經驗。",
  },
  {
    title: "現代化交付方式",
    description: "以 AI-Native 開發方式結合現代框架與標準化工作流，提升交付效率與後續維護性。",
  },
  {
    title: "透明分階段合作",
    description: "採取開發服務費與維護服務費模式，清楚定義範圍、節奏與後續支持。",
  },
  {
    title: "高性價比落地",
    description: "保持合理的雲端成本與交付節奏，讓中小企業也能務實推進數位化與 AI 應用。",
  },
] as const;

export const FOOTER = {
  contact: {
    phone: "+852 6522 8212",
    whatsapp: "+86 136 3658 5707",
    email: "victorxzf@gmail.com",
    hkOffice: "香港九龍長沙灣荔枝角822號2樓西翼",
    mainlandContact: "上海張江高科技園區",
  },
  copyright: "© 2026 SmartKids Tech. 保留所有權利。",
} as const;
