"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { authApi } from "@/lib/api";

const NAV_ITEMS = [
  { href: "/admin", label: "数据概览", icon: "📊" },
  { href: "/admin/services", label: "服务管理", icon: "🛠" },
  { href: "/admin/cases", label: "案例管理", icon: "📁" },
  { href: "/admin/orders", label: "订单管理", icon: "📋" },
  { href: "/admin/inquiries", label: "咨询管理", icon: "💬" },
  { href: "/admin/settings", label: "系统设置", icon: "⚙" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const data = await authApi.me();
      setUsername(data.username);
    } catch {
      setUsername(null);
      router.replace("/login");
    } finally {
      setChecking(false);
    }
  }, [router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = async () => {
    await authApi.logout();
    router.replace("/login");
  };

  if (checking || !username) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg-secondary)",
          fontFamily: "var(--font-text)",
          color: "var(--color-text-secondary)",
        }}
      >
        验证身份中...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          flexShrink: 0,
          background: "var(--color-bg-dark)",
          color: "var(--color-text-primary)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-text)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "24px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-head)",
              fontWeight: "var(--weight-semibold)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            有思网
          </span>
          <span
            style={{
              display: "block",
              fontSize: "var(--text-caption)",
              color: "var(--color-text-secondary)",
              marginTop: 4,
            }}
          >
            管理后台
          </span>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: "12px 0" }}>
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 20px",
                  fontSize: "var(--text-body)",
                  color: isActive
                    ? "#FFFFFF"
                    : "var(--color-text-secondary)",
                  textDecoration: "none",
                  background: isActive
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                  transition: "background var(--duration-fast)",
                }}
              >
                <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          style={{
            padding: "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--color-text-secondary)",
              }}
            >
              {username}
            </span>
            <button
              onClick={handleLogout}
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--color-text-secondary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "2px 6px",
                borderRadius: 4,
                transition: "color var(--duration-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--color-text-secondary)";
              }}
            >
              退出
            </button>
          </div>
          <div
            style={{
              fontSize: "var(--text-caption)",
              color: "var(--color-text-tertiary)",
            }}
          >
            v1.0.0
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          background: "var(--color-bg-secondary)",
          overflow: "auto",
        }}
      >
        {children}
      </main>
    </div>
  );
}
