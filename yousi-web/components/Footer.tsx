"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg-dark)",
        color: "var(--color-text-on-dark)",
        padding: "var(--space-20) var(--space-6)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-10)",
            marginBottom: "var(--space-16)",
          }}
        >
          {/* Logo and description */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
                marginBottom: "var(--space-4)",
              }}
            >
              有思网
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              专业幼儿园品牌设计服务平台
              <br />
              让每一所幼儿园都拥有专业品牌
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: "var(--space-4)",
                color: "var(--color-text-secondary)",
              }}
            >
              服务
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li><Link href="/services/brand-strategy" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">品牌策略</Link></li>
              <li><Link href="/services/visual-design" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">视觉设计</Link></li>
              <li><Link href="/services/content-creation" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">内容创作</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: "var(--space-4)",
                color: "var(--color-text-secondary)",
              }}
            >
              品类
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li><Link href="/ip" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">IP</Link></li>
              <li><Link href="/music" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">音乐</Link></li>
              <li><Link href="/video" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">视频</Link></li>
              <li><Link href="/tech" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">技术支持</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: "var(--space-4)",
                color: "var(--color-text-secondary)",
              }}
            >
              公司
            </h3>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li><Link href="/about" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">关于我们</Link></li>
              <li><Link href="/cases" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">案例</Link></li>
              <li><Link href="/faq" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">常见问题</Link></li>
              <li><Link href="/contact" style={{ color: "var(--color-text-on-dark)", textDecoration: "none", fontSize: 14, opacity: 0.8 }} className="hover:opacity-100">联系我们</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255, 255, 255, 0.1)",
            marginBottom: "var(--space-6)",
          }}
        />

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
            © {new Date().getFullYear()} 有思网. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "var(--space-6)" }}>
            <Link href="/terms" style={{ color: "var(--color-text-secondary)", textDecoration: "none", fontSize: 12 }} className="hover:text-white">
              隐私政策
            </Link>
            <Link href="/terms" style={{ color: "var(--color-text-secondary)", textDecoration: "none", fontSize: 12 }} className="hover:text-white">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
