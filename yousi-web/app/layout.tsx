import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiuse.fun"),
  title: {
    default: "有思网 - 专业幼儿园品牌设计服务平台",
    template: "%s | 有思网",
  },
  description: "AI辅助设计，专业交付，价格透明。让每一所幼儿园都拥有专业品牌。",
  keywords: "幼儿园品牌设计,Logo设计,VI设计,IP形象设计,音乐制作,视频制作",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "有思网",
    title: "有思网 - 专业幼儿园品牌设计服务平台",
    description: "AI辅助设计，专业交付，价格透明。让每一所幼儿园都拥有专业品牌。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
