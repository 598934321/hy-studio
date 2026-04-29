"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tabs = ["全部", "待处理", "已回复"];

type Status = "待处理" | "已回复";

interface Inquiry {
  id: number;
  date: string;
  serviceType: string;
  message: string;
  status: Status;
}

const inquiries: Inquiry[] = [
  {
    id: 1,
    date: "2026-04-28",
    serviceType: "品牌全案设计",
    message:
      "您好，我们幼儿园计划在下学期进行品牌升级，想了解一下品牌全案设计的服务流程和大致周期……",
    status: "待处理",
  },
  {
    id: 2,
    date: "2026-04-20",
    serviceType: "LOGO 设计",
    message:
      "请问 LOGO 设计是否包含 VI 基础系统？我们希望能一次性完成 logo 和基础视觉识别系统的设计……",
    status: "已回复",
  },
  {
    id: 3,
    date: "2026-04-15",
    serviceType: "环境导视设计",
    message:
      "我们的新园区即将竣工，需要一套完整的环境导视系统设计，包括室内和室外两个部分……",
    status: "已回复",
  },
];

export default function InquiriesPage() {
  const [activeTab, setActiveTab] = useState("全部");

  const filtered =
    activeTab === "全部"
      ? inquiries
      : inquiries.filter((item) => item.status === activeTab);

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          padding: "120px 24px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-title)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-8)",
            }}
          >
            咨询记录
          </h1>

          {/* Tab Bar */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-2)",
              marginBottom: "var(--space-8)",
              borderBottom: "1px solid var(--color-divider)",
              paddingBottom: "var(--space-4)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  fontSize: "var(--text-footnote)",
                  fontFamily: "var(--font-text)",
                  fontWeight:
                    activeTab === tab
                      ? "var(--weight-semibold)"
                      : "var(--weight-regular)",
                  background:
                    activeTab === tab
                      ? "var(--color-text-primary)"
                      : "var(--color-bg-secondary)",
                  color:
                    activeTab === tab
                      ? "var(--color-bg)"
                      : "var(--color-text-primary)",
                  cursor: "pointer",
                  transition:
                    "background var(--duration-fast), color var(--duration-fast)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Inquiry Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {filtered.map((inquiry) => (
              <div
                key={inquiry.id}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-6)",
                  boxShadow: "var(--shadow-card)",
                  transition: "box-shadow var(--duration-normal)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                    <time
                      style={{
                        fontSize: "var(--text-footnote)",
                        fontFamily: "var(--font-text)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {inquiry.date}
                    </time>
                    <span
                      style={{
                        fontSize: "var(--text-caption)",
                        fontFamily: "var(--font-text)",
                        fontWeight: "var(--weight-medium)",
                        color: "var(--color-cta)",
                        background: "rgba(0, 102, 204, 0.08)",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      {inquiry.serviceType}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <span
                    style={{
                      fontSize: "var(--text-caption)",
                      fontFamily: "var(--font-text)",
                      fontWeight: "var(--weight-medium)",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-pill)",
                      color:
                        inquiry.status === "待处理"
                          ? "var(--color-warning)"
                          : "var(--color-success)",
                      background:
                        inquiry.status === "待处理"
                          ? "rgba(255, 149, 0, 0.1)"
                          : "rgba(52, 199, 89, 0.1)",
                    }}
                  >
                    {inquiry.status}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "var(--text-body)",
                    fontFamily: "var(--font-text)",
                    color: "var(--color-text-secondary)",
                    lineHeight: "var(--leading-relaxed)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {inquiry.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
