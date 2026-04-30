import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题",
  description: "有思网常见问题解答，了解服务流程、价格、交付周期等信息。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
