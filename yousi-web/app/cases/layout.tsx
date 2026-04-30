import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "案例展示",
  description: "查看有思网为全国各地幼儿园打造的品牌设计案例，包括品牌视觉、空间设计、IP形象等。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
