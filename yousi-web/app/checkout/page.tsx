"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBagStore } from "@/store/bagStore";

const placeholderItems = [
  { id: "1", type: "service" as const, name: "品牌视觉设计", price: 12800, quantity: 1 },
  { id: "2", type: "package" as const, name: "空间设计套餐", price: 35800, quantity: 1 },
];

export default function CheckoutPage() {
  const items = useBagStore((s) => s.items);
  const total = useBagStore((s) => s.total);
  const displayItems = items.length > 0 ? items : placeholderItems;
  const displayTotal = items.length > 0 ? total() : placeholderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const [payment, setPayment] = useState("wechat");

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
            maxWidth: "var(--content-wide-width)",
            margin: "0 auto",
            padding: "0 var(--content-padding-x)",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "var(--space-8)",
            alignItems: "start",
          }}
        >
          {/* Left: Order Form */}
          <section
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-8)",
              boxShadow: "var(--shadow-card)",
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
              确认订单
            </h1>

            <form style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <div>
                <label style={labelStyle}>姓名</label>
                <input type="text" placeholder="请输入您的姓名" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>幼儿园名称</label>
                <input type="text" placeholder="请输入幼儿园全称" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>联系电话</label>
                <input type="tel" placeholder="请输入手机号码" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>微信号</label>
                <input type="text" placeholder="请输入微信号（选填）" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>留言备注</label>
                <textarea
                  placeholder="如有特殊需求请在此说明"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" as const }}
                />
              </div>

              {/* Payment Method */}
              <div style={{ marginTop: "var(--space-4)" }}>
                <label style={labelStyle}>支付方式</label>
                <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>
                  <label
                    style={{
                      ...radioCardStyle,
                      borderColor: payment === "wechat" ? "var(--color-cta)" : "var(--color-border)",
                      background: payment === "wechat" ? "rgba(0, 102, 204, 0.04)" : "transparent",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="wechat"
                      checked={payment === "wechat"}
                      onChange={() => setPayment("wechat")}
                      style={{ display: "none" }}
                    />
                    <span style={{ fontSize: "24px" }}>&#128172;</span>
                    <span style={{ fontSize: "var(--text-footnote)", fontWeight: "var(--weight-medium)" }}>微信支付</span>
                  </label>
                  <label
                    style={{
                      ...radioCardStyle,
                      borderColor: payment === "alipay" ? "var(--color-cta)" : "var(--color-border)",
                      background: payment === "alipay" ? "rgba(0, 102, 204, 0.04)" : "transparent",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="alipay"
                      checked={payment === "alipay"}
                      onChange={() => setPayment("alipay")}
                      style={{ display: "none" }}
                    />
                    <span style={{ fontSize: "24px" }}>&#128179;</span>
                    <span style={{ fontSize: "var(--text-footnote)", fontWeight: "var(--weight-medium)" }}>支付宝</span>
                  </label>
                </div>
              </div>

              <button
                type="button"
                style={{
                  marginTop: "var(--space-6)",
                  padding: "var(--space-4) var(--space-8)",
                  background: "var(--color-cta)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--weight-semibold)",
                  cursor: "pointer",
                  transition: "background var(--duration-fast) var(--easing-default)",
                  fontFamily: "var(--font-text)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-cta-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-cta)")}
              >
                提交订单
              </button>
            </form>
          </section>

          {/* Right: Order Summary */}
          <section
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-8)",
              boxShadow: "var(--shadow-card)",
              position: "sticky",
              top: "var(--space-8)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-head)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-6)",
              }}
            >
              订单摘要
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "var(--space-3) 0",
                    borderBottom: "1px solid var(--color-divider)",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "var(--text-body)", fontWeight: "var(--weight-medium)", color: "var(--color-text-primary)" }}>
                      {item.name}
                    </p>
                    <p style={{ fontSize: "var(--text-footnote)", color: "var(--color-text-secondary)", marginTop: "var(--space-1)" }}>
                      x{item.quantity}
                    </p>
                  </div>
                  <span style={{ fontSize: "var(--text-body)", fontWeight: "var(--weight-semibold)", color: "var(--color-text-primary)" }}>
                    {"¥"}{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "var(--space-6)",
                paddingTop: "var(--space-4)",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
                <span style={{ fontSize: "var(--text-footnote)", color: "var(--color-text-secondary)" }}>小计</span>
                <span style={{ fontSize: "var(--text-footnote)", color: "var(--color-text-primary)" }}>
                  {"¥"}{displayTotal.toLocaleString()}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "var(--text-callout)", fontWeight: "var(--weight-semibold)", color: "var(--color-text-primary)" }}>
                  合计
                </span>
                <span style={{ fontSize: "var(--text-callout)", fontWeight: "var(--weight-bold)", color: "var(--color-text-primary)" }}>
                  {"¥"}{displayTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--text-footnote)",
  fontWeight: "var(--weight-medium)",
  color: "var(--color-text-secondary)",
  marginBottom: "var(--space-2)",
  fontFamily: "var(--font-text)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "var(--space-3) var(--space-4)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-sm)",
  fontSize: "var(--text-body)",
  fontFamily: "var(--font-text)",
  color: "var(--color-text-primary)",
  background: "var(--color-bg)",
  outline: "none",
  transition: "border-color var(--duration-fast) var(--easing-default)",
};

const radioCardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--space-3)",
  padding: "var(--space-4) var(--space-6)",
  border: "1.5px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  cursor: "pointer",
  transition: "all var(--duration-fast) var(--easing-default)",
};
