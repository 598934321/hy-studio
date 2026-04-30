"use client";

import { useState, useEffect } from "react";
import { casesApi } from "@/lib/api";

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  kindergarten: string;
  isFeatured: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  brand: "品牌",
  visual: "视觉",
  media: "媒体",
  ip: "IP",
  tech: "技术",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 16px",
  fontSize: "var(--text-footnote)",
  fontWeight: "var(--weight-medium)",
  color: "var(--color-text-secondary)",
  borderBottom: "1px solid var(--color-border-light)",
};

const tdStyle: React.CSSProperties = {
  padding: "12px 16px",
  fontSize: "var(--text-footnote)",
  color: "var(--color-text-primary)",
  borderBottom: "1px solid var(--color-border-light)",
};

export function AdminCases() {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    casesApi
      .list()
      .then((data) => setCases(data as unknown as CaseStudy[]))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 32 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <h1
          style={{
            fontSize: "var(--text-title)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          案例管理
        </h1>
      </div>

      <div
        style={{
          background: "var(--color-bg)",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-card)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>案例标题</th>
              <th style={thStyle}>分类</th>
              <th style={thStyle}>幼儿园</th>
              <th style={thStyle}>推荐</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} style={{ ...tdStyle, textAlign: "center", padding: 32 }}>
                  加载中...
                </td>
              </tr>
            ) : (
              cases.map((c) => (
                <tr key={c.id}>
                  <td style={{ ...tdStyle, fontWeight: "var(--weight-medium)" }}>
                    {c.title}
                  </td>
                  <td style={tdStyle}>{CATEGORY_LABELS[c.category] || c.category}</td>
                  <td style={tdStyle}>{c.kindergarten}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 10px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "var(--text-caption)",
                        fontWeight: "var(--weight-medium)",
                        color: c.isFeatured ? "var(--color-success)" : "var(--color-text-secondary)",
                        background: c.isFeatured
                          ? "color-mix(in srgb, var(--color-success) 12%, transparent)"
                          : "var(--color-bg-secondary)",
                      }}
                    >
                      {c.isFeatured ? "已推荐" : "未推荐"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCases;
