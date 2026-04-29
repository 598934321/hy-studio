"use client";

import { useState } from "react";

const SERVICES = [
  { id: 1, name: "整园环创设计", category: "空间设计", price: "¥35,000起", status: "上架" },
  { id: 2, name: "品牌VI设计", category: "品牌设计", price: "¥18,000起", status: "上架" },
  { id: 3, name: "空间导视设计", category: "空间设计", price: "¥12,000起", status: "上架" },
  { id: 4, name: "活动策划设计", category: "活动设计", price: "¥8,000起", status: "上架" },
  { id: 5, name: "宣传物料设计", category: "平面设计", price: "¥3,000起", status: "下架" },
  { id: 6, name: "IP形象设计", category: "品牌设计", price: "¥25,000起", status: "上架" },
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

export function AdminServices() {
  const [services, setServices] = useState(SERVICES);

  const toggleStatus = (id: number) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "上架" ? "下架" : "上架" } : s
      )
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
          服务管理
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
          添加服务
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
              <th style={thStyle}>服务名称</th>
              <th style={thStyle}>分类</th>
              <th style={thStyle}>价格</th>
              <th style={thStyle}>状态</th>
              <th style={thStyle}>操作</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td style={{ ...tdStyle, fontWeight: "var(--weight-medium)" }}>
                  {service.name}
                </td>
                <td style={tdStyle}>{service.category}</td>
                <td style={tdStyle}>{service.price}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--weight-medium)",
                      color:
                        service.status === "上架"
                          ? "var(--color-success)"
                          : "var(--color-text-secondary)",
                      background:
                        service.status === "上架"
                          ? "color-mix(in srgb, var(--color-success) 12%, transparent)"
                          : "var(--color-bg-secondary)",
                    }}
                  >
                    {service.status}
                  </span>
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
                      onClick={() => toggleStatus(service.id)}
                      style={{
                        padding: "4px 12px",
                        fontSize: "var(--text-caption)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        background: "var(--color-bg)",
                        color:
                          service.status === "上架"
                            ? "var(--color-error)"
                            : "var(--color-success)",
                        cursor: "pointer",
                      }}
                    >
                      {service.status === "上架" ? "下架" : "上架"}
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

export default AdminServices;
