import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系有思网，获取幼儿园品牌设计专业咨询和报价。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
