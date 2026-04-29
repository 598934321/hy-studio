"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BagItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialItems: BagItem[] = [
  { id: 1, name: "品牌全案设计", price: 29800, quantity: 1 },
  { id: 2, name: "LOGO 设计升级", price: 8800, quantity: 1 },
  { id: 3, name: "环境导视设计", price: 15800, quantity: 1 },
];

export default function BagPage() {
  const [items, setItems] = useState<BagItem[]>(initialItems);

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isEmpty = items.length === 0;

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
              marginBottom: "var(--space-10)",
            }}
          >
            购物袋
          </h1>

          {isEmpty ? (
            /* Empty State */
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 24px",
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-text-tertiary)"
                strokeWidth="1"
                style={{ marginBottom: "var(--space-6)" }}
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p
                style={{
                  fontSize: "var(--text-callout)",
                  fontFamily: "var(--font-text)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--space-6)",
                }}
              >
                购物袋是空的
              </p>
              <a
                href="/services"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  fontSize: "var(--text-body)",
                  fontFamily: "var(--font-text)",
                  fontWeight: "var(--weight-semibold)",
                  color: "#fff",
                  background: "var(--color-cta)",
                  borderRadius: "var(--radius-pill)",
                  textDecoration: "none",
                  transition: "background var(--duration-fast)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-cta-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-cta)";
                }}
              >
                浏览服务
              </a>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 360px",
                gap: "var(--space-10)",
                alignItems: "start",
              }}
            >
              {/* Items List */}
              <div>
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "var(--space-6) 0",
                      borderBottom:
                        index < items.length - 1
                          ? "1px solid var(--color-divider)"
                          : "none",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "var(--text-head)",
                          fontFamily: "var(--font-display)",
                          fontWeight: "var(--weight-semibold)",
                          color: "var(--color-text-primary)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "var(--text-footnote)",
                          fontFamily: "var(--font-text)",
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        ¥{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-4)",
                        marginRight: "var(--space-6)",
                      }}
                    >
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="减少数量"
                        style={{
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid var(--color-border)",
                          borderRadius: "var(--radius-sm)",
                          background: "none",
                          fontSize: "18px",
                          color: "var(--color-text-primary)",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                      <span
                        style={{
                          fontSize: "var(--text-body)",
                          fontFamily: "var(--font-text)",
                          fontWeight: "var(--weight-medium)",
                          minWidth: 24,
                          textAlign: "center",
                        }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="增加数量"
                        style={{
                          width: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid var(--color-border)",
                          borderRadius: "var(--radius-sm)",
                          background: "none",
                          fontSize: "18px",
                          color: "var(--color-text-primary)",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p
                      style={{
                        fontSize: "var(--text-body)",
                        fontFamily: "var(--font-text)",
                        fontWeight: "var(--weight-semibold)",
                        color: "var(--color-text-primary)",
                        minWidth: 100,
                        textAlign: "right",
                        marginRight: "var(--space-4)",
                      }}
                    >
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="移除商品"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "var(--space-2)",
                        color: "var(--color-text-secondary)",
                        transition: "color var(--duration-fast)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-error)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div
                style={{
                  background: "var(--color-bg-secondary)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-8)",
                  position: "sticky",
                  top: 100,
                }}
              >
                <h2
                  style={{
                    fontSize: "var(--text-head)",
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--weight-semibold)",
                    color: "var(--color-text-primary)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  订单摘要
                </h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "var(--space-4)",
                    fontSize: "var(--text-body)",
                    fontFamily: "var(--font-text)",
                  }}
                >
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    小计
                  </span>
                  <span style={{ color: "var(--color-text-primary)" }}>
                    ¥{subtotal.toLocaleString()}
                  </span>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--color-divider)",
                    paddingTop: "var(--space-4)",
                    marginTop: "var(--space-4)",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "var(--space-8)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--text-callout)",
                      fontFamily: "var(--font-text)",
                      fontWeight: "var(--weight-semibold)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    合计
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-callout)",
                      fontFamily: "var(--font-display)",
                      fontWeight: "var(--weight-bold)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    ¥{subtotal.toLocaleString()}
                  </span>
                </div>

                <a
                  href="/checkout"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px",
                    textAlign: "center",
                    fontSize: "var(--text-body)",
                    fontFamily: "var(--font-text)",
                    fontWeight: "var(--weight-semibold)",
                    color: "#fff",
                    background: "var(--color-cta)",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    transition: "background var(--duration-fast)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--color-cta-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--color-cta)";
                  }}
                >
                  去结算
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
