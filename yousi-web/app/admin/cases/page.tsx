"use client";

import { useState } from "react";

const CASES = [
  { id: 1, title: "阳光幼儿园整园环创", category: "空间设计", kindergarten: "阳光幼儿园", featured: true },
  { id: 2, title: "蓝天幼儿园品牌升级", category: "品牌设计", kindergarten: "蓝天幼儿园", featured: true },
  { id: 3, title: "星光幼儿园导视系统", category: "空间设计", kindergarten: "星光幼儿园", featured: false },
  { id: 4, title: "彩虹幼儿园六一活动", category: "活动设计", kindergarten: "彩虹幼儿园", featured: false },
  { id: 5, title: "绿叶幼儿园IP设计", category: "品牌设计", kindergarten: "绿叶幼儿园", featured: true },
  { id: 6, title: "金色童年宣传物料", category: "平面设计", kindergarten: "金色童年幼儿园", featured: false },
];

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
  const [cases, setCases] = useState(CASES);

  const toggleFeatured = (id: number) => {
    setCases((prev) =>
      prev.map((c) => (c.id === id ? { ...c, featured: !c.featured } : c))
    );
  };

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
        <button
          style={{
            padding: "8px 20px",
            borderRadius: "var(--radius-sm)",
            border: "none",
            background: "var(--color-cta)",
            color: "#FFFFFF",
            fontSize: "var(--text-footnote)",
            fontWeight: "var(--weight-medium)",
            cursor: "pointer",
          }}
        >
          添加案例
        </button>
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
              <th style={thStyle}>操作</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id}>
                <td style={{ ...tdStyle, fontWeight: "var(--weight-medium)" }}>
                  {c.title}
                </td>
                <td style={tdStyle}>{c.category}</td>
                <td style={tdStyle}>{c.kindergarten}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => toggleFeatured(c.id)}
                    style={{
                      padding: "2px 10px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--weight-medium)",
                      border: "none",
                      cursor: "pointer",
                      color: c.featured
                        ? "var(--color-success)"
                        : "var(--color-text-secondary)",
                      background: c.featured
                        ? "color-mix(in srgb, var(--color-success) 12%, transparent)"
                        : "var(--color-bg-secondary)",
                    }}
                  >
                    {c.featured ? "已推荐" : "未推荐"}
                  </button>
                </td>
                <td style={tdStyle}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{
                        padding: "4px 12px",
                        fontSize: "var(--text-caption)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                        cursor: "pointer",
                      }}
                    >
                      编辑
                    </button>
                    <button
                      style={{
                        padding: "4px 12px",
                        fontSize: "var(--text-caption)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color: "var(--color-error)",
                        cursor: "pointer",
                      }}
                    >
                      删除
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCases;
