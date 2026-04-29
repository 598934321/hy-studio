"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tabs = ["全部", "待付款", "进行中", "已完成"];

const orders = [
  {
    id: "YS20260428001",
    date: "2026-04-28",
    items: ["品牌视觉设计"],
    total: 12800,
    status: "进行中",
    statusColor: "var(--color-warning)",
    tab: "进行中",
  },
  {
    id: "YS20260415002",
    date: "2026-04-15",
    items: ["空间设计套餐", "品牌LOGO设计"],
    total: 42600,
    status: "已完成",
    statusColor: "var(--color-success)",
    tab: "已完成",
  },
  {
    id: "YS20260401003",
    date: "2026-04-01",
    items: ["招生宣传物料"],
    total: 5800,
    status: "待付款",
    statusColor: "var(--color-cta)",
    tab: "待付款",
  },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("全部");

  const filtered = activeTab === "全部" ? orders : orders.filter((o) => o.tab === activeTab);

  return (
    <>
      <Header />
      <main
        style={{
          background: "var(--color-bg-secondary)",
          minHeight: "100vh",
          paddingTop: "var(--space-20)",
          paddingBottom: "var(--space-20)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
            padding: "0 var(--content-padding-x)",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-title)",
              fontWeight: "var(--weight-semibold)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-8)",
            }}
          >
            我的订单
          </h1>

          {/* Tab Bar */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-1)",
              background: "var(--color-bg)",
              borderRadius: "var(--radius-pill)",
              padding: "var(--space-1)",
              marginBottom: "var(--space-8)",
              boxShadow: "var(--shadow-sm)",
              width: "fit-content",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "var(--space-2) var(--space-5)",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  fontSize: "var(--text-footnote)",
                  fontWeight: activeTab === tab ? "var(--weight-semibold)" : "var(--weight-regular)",
                  color: activeTab === tab ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  background: activeTab === tab ? "var(--color-bg-secondary)" : "transparent",
                  cursor: "pointer",
                  fontFamily: "var(--font-text)",
                  transition: "all var(--duration-fast) var(--easing-default)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Order Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {filtered.map((order) => (
              <section
                key={order.id}
                style={{
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-6)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--weight-semibold)",
                        color: "var(--color-text-primary)",
                        marginBottom: "var(--space-1)",
                      }}
                    >
                      订单号：{order.id}
                    </p>
                    <p style={{ fontSize: "var(--text-caption)", color: "var(--color-text-secondary)" }}>
                      {order.date}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--weight-medium)",
                      color: order.statusColor,
                      padding: "var(--space-1) var(--space-3)",
                      borderRadius: "var(--radius-pill)",
                      background: `${order.statusColor}14`,
                    }}
                  >
                    {order.status}
                  </span>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--color-divider)",
                    paddingTop: "var(--space-4)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    {order.items.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: "var(--text-footnote)",
                          color: "var(--color-text-primary)",
                          fontWeight: "var(--weight-regular)",
                        }}
                      >
                        {item}
                        {idx < order.items.length - 1 && (
                          <span style={{ color: "var(--color-text-tertiary)", margin: "0 var(--space-2)" }}>+</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: "var(--text-callout)",
                      fontWeight: "var(--weight-bold)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {"¥"}{order.total.toLocaleString()}
                  </span>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
