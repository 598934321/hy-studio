"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { accountApi } from "@/lib/api";

const tabs = ["全部", "待处理", "已回复"];

const statusMap: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "待处理", color: "var(--color-warning)", bg: "rgba(255, 149, 0, 0.1)" },
  replied: { label: "已回复", color: "var(--color-success)", bg: "rgba(52, 199, 89, 0.1)" },
  closed: { label: "已关闭", color: "var(--color-text-secondary)", bg: "rgba(0,0,0,0.05)" },
};

function getStatusInfo(status: string) {
  return statusMap[status] || { label: status, color: "var(--color-text-secondary)", bg: "rgba(0,0,0,0.05)" };
}

export default function InquiriesPage() {
  const [activeTab, setActiveTab] = useState("全部");
  const [phone, setPhone] = useState("");
  const [inquiries, setInquiries] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!phone.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const data = await accountApi.getInquiries(phone.trim());
      setInquiries(data);
    } catch {
      setInquiries([]);
    } finally {
      setLoading(false);
    }
  };

  const filtered =
    activeTab === "全部"
      ? inquiries
      : inquiries.filter((item) => {
          const info = getStatusInfo(item.status as string);
          return info.label === activeTab;
        });

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
              placeholder="输入手机号查询咨询"
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
                {filtered.length === 0 ? (
                  <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-secondary)", textAlign: "center", padding: "var(--space-10)" }}>
                    暂无咨询记录
                  </p>
                ) : (
                  filtered.map((inquiry) => {
                    const statusInfo = getStatusInfo(inquiry.status as string);
                    const createdAt = inquiry.createdAt as string;
                    return (
                      <div
                        key={inquiry.id as string}
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
                              {new Date(createdAt).toLocaleDateString("zh-CN")}
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
                              {inquiry.service as string}
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
                              color: statusInfo.color,
                              background: statusInfo.bg,
                            }}
                          >
                            {statusInfo.label}
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
                          {inquiry.message as string || inquiry.service as string}
                        </p>
                      </div>
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
