import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "套餐方案",
  description: "有思网幼儿园品牌设计套餐，品牌全案、视觉升级、招生礼包等多种方案，价格透明，专业交付。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
