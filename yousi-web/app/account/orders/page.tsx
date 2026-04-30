"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { accountApi } from "@/lib/api";

const tabs = ["全部", "待付款", "进行中", "已完成"];

const statusMap: Record<string, { label: string; color: string }> = {
  pending: { label: "待付款", color: "var(--color-cta)" },
  confirmed: { label: "进行中", color: "var(--color-warning)" },
  in_progress: { label: "进行中", color: "var(--color-warning)" },
  completed: { label: "已完成", color: "var(--color-success)" },
  cancelled: { label: "已取消", color: "var(--color-text-secondary)" },
};

function getStatusInfo(status: string) {
  return statusMap[status] || { label: status, color: "var(--color-text-secondary)" };
}

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("全部");
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!phone.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const data = await accountApi.getOrders(phone.trim());
      setOrders(data);
    } catch {
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const filtered = activeTab === "全部"
    ? orders
    : orders.filter((o) => {
        const info = getStatusInfo(o.status as string);
        return info.label === activeTab;
      });

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

          {/* Phone Search */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              marginBottom: "var(--space-8)",
              maxWidth: "400px",
            }}
          >
            <input
              type="tel"
              placeholder="输入手机号查询订单"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
              style={{
                flex: 1,
                padding: "var(--space-3) var(--space-4)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-body)",
                fontFamily: "var(--font-text)",
                color: "var(--color-text-primary)",
                background: "var(--color-bg)",
                outline: "none",
              }}
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              style={{
                padding: "var(--space-3) var(--space-6)",
                background: "var(--color-cta)",
                color: "#fff",
                border: "none",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-footnote)",
                fontWeight: "var(--weight-semibold)",
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "var(--font-text)",
                whiteSpace: "nowrap",
              }}
            >
              {loading ? "查询中..." : "查询"}
            </button>
          </div>

          {searched && (
            <>
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
                {filtered.length === 0 ? (
                  <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-secondary)", textAlign: "center", padding: "var(--space-10)" }}>
                    暂无订单记录
                  </p>
                ) : (
                  filtered.map((order) => {
                    const statusInfo = getStatusInfo(order.status as string);
                    const items = order.items as { name: string }[];
                    const createdAt = order.createdAt as string;
                    return (
                      <section
                        key={order.id as string}
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
                              订单号：{order.orderNo as string}
                            </p>
                            <p style={{ fontSize: "var(--text-caption)", color: "var(--color-text-secondary)" }}>
                              {new Date(createdAt).toLocaleDateString("zh-CN")}
                            </p>
                          </div>
                          <span
                            style={{
                              fontSize: "var(--text-caption)",
                              fontWeight: "var(--weight-medium)",
                              color: statusInfo.color,
                              padding: "var(--space-1) var(--space-3)",
                              borderRadius: "var(--radius-pill)",
                              background: `${statusInfo.color}14`,
                            }}
                          >
                            {statusInfo.label}
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
                            {items.map((item, idx) => (
                              <span
                                key={idx}
                                style={{
                                  fontSize: "var(--text-footnote)",
                                  color: "var(--color-text-primary)",
                                  fontWeight: "var(--weight-regular)",
                                }}
                              >
                                {item.name}
                                {idx < items.length - 1 && (
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
                            {"¥"}{(order.total as number).toLocaleString()}
                          </span>
                        </div>
                      </section>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
