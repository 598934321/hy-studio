"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quickLinks = [
  { label: "我的订单", href: "/account/orders", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { label: "个人资料", href: "/account/profile", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "咨询记录", href: "/checkout/consult", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
];

const recentOrders = [
  { id: "YS20260428001", date: "2026-04-28", name: "品牌视觉设计", status: "进行中", statusColor: "var(--color-warning)" },
  { id: "YS20260415002", date: "2026-04-15", name: "空间设计套餐", status: "已完成", statusColor: "var(--color-success)" },
  { id: "YS20260401003", date: "2026-04-01", name: "招生宣传物料", status: "待付款", statusColor: "var(--color-cta)" },
];

export default function AccountPage() {
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
          {/* Welcome Section */}
          <section
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-8)",
              boxShadow: "var(--shadow-card)",
              marginBottom: "var(--space-6)",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-head)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-2)",
              }}
            >
              欢迎回来，张老师
            </h1>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-secondary)" }}>
              管理您的订单和账户信息
            </p>
          </section>

          {/* Quick Links */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-4)",
              marginBottom: "var(--space-6)",
            }}
          >
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-6)",
                  boxShadow: "var(--shadow-card)",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  transition: "box-shadow var(--duration-fast) var(--easing-default)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-cta)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={link.icon} />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "var(--text-body)",
                    fontWeight: "var(--weight-medium)",
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-text)",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </section>

          {/* Recent Orders */}
          <section
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-8)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "var(--space-6)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-head)",
                  fontWeight: "var(--weight-semibold)",
                  color: "var(--color-text-primary)",
                }}
              >
                最近订单
              </h2>
              <Link
                href="/account/orders"
                style={{
                  fontSize: "var(--text-footnote)",
                  color: "var(--color-text-link)",
                  textDecoration: "none",
                  fontWeight: "var(--weight-medium)",
                }}
              >
                查看全部
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "var(--space-4)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--color-border-light)",
                    transition: "background var(--duration-fast) var(--easing-default)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--weight-medium)",
                        color: "var(--color-text-primary)",
                        marginBottom: "var(--space-1)",
                      }}
                    >
                      {order.name}
                    </p>
                    <p style={{ fontSize: "var(--text-caption)", color: "var(--color-text-secondary)" }}>
                      {order.id} &middot; {order.date}
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
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
