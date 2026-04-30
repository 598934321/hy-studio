import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "有思网是专注于幼儿园品牌设计的服务平台，AI辅助设计，专业团队交付，致力于让每一所幼儿园都拥有专业品牌。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
