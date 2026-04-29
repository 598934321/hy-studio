"use client";

import { useBagStore } from "@/store/bagStore";
import Link from "next/link";

export default function BagSidebar() {
  const { items, isOpen, closeBag, removeItem, total } = useBagStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          zIndex: 10000,
          opacity: isOpen ? 1 : 0,
          transition: "opacity var(--duration-normal)",
        }}
        onClick={closeBag}
      />

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 400,
          maxWidth: "90vw",
          background: "var(--color-bg)",
          zIndex: 10001,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform var(--duration-normal) var(--easing-default)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px",
            borderBottom: "1px solid var(--color-divider)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            购物袋
          </h2>
          <button
            onClick={closeBag}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "var(--color-text-secondary)",
            }}
            aria-label="关闭"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px",
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
                color: "var(--color-text-secondary)",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ margin: "0 auto 16px" }}
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p style={{ fontSize: 17 }}>购物袋是空的</p>
              <p style={{ fontSize: 14, marginTop: 8 }}>浏览服务并添加到购物袋</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "16px",
                    background: "var(--color-bg-secondary)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 17 }}>{item.name}</div>
                      {item.details && (
                        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 4 }}>
                          {item.details}
                        </div>
                      )}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 17 }}>
                      ¥{item.price.toLocaleString()}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--color-text-link)",
                          fontSize: 14,
                        }}
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: "24px",
              borderTop: "1px solid var(--color-divider)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 17, color: "var(--color-text-secondary)" }}>
                合计
              </span>
              <span style={{ fontSize: 24, fontWeight: 600 }}>
                ¥{total().toLocaleString()}
              </span>
            </div>

            <Link
              href="/checkout"
              onClick={closeBag}
              style={{
                display: "block",
                width: "100%",
                height: 48,
                background: "var(--color-cta)",
                color: "#fff",
                border: "none",
                borderRadius: "var(--radius-pill)",
                fontSize: 17,
                fontWeight: 500,
                cursor: "pointer",
                textAlign: "center",
                lineHeight: "48px",
                textDecoration: "none",
                marginBottom: 12,
              }}
            >
              在线支付
            </Link>

            <Link
              href="/checkout/consult"
              onClick={closeBag}
              style={{
                display: "block",
                width: "100%",
                height: 48,
                background: "transparent",
                color: "var(--color-text-link)",
                border: "1.5px solid var(--color-text-link)",
                borderRadius: "var(--radius-pill)",
                fontSize: 17,
                fontWeight: 500,
                cursor: "pointer",
                textAlign: "center",
                lineHeight: "48px",
                textDecoration: "none",
              }}
            >
              需要商务咨询
            </Link>

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button
                onClick={closeBag}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text-link)",
                  fontSize: 14,
                }}
              >
                继续浏览
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
