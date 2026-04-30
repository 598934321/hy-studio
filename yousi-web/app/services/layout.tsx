import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务项目",
  description: "有思网提供品牌视觉设计、空间设计、宣传物料、数字化平台、课程体系设计、招生营销方案等专业幼儿园品牌设计服务。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
