"use client";

import { useState, useEffect } from "react";
import { servicesApi } from "@/lib/api";

interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  isActive: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  services: "品牌服务",
  music: "音乐",
  video: "视频",
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

export function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    servicesApi
      .list()
      .then((data) => setServices(data as unknown as Service[]))
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
          服务管理
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
              <th style={thStyle}>服务名称</th>
              <th style={thStyle}>分类</th>
              <th style={thStyle}>价格</th>
              <th style={thStyle}>状态</th>
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
              services.map((service) => (
                <tr key={service.id}>
                  <td style={{ ...tdStyle, fontWeight: "var(--weight-medium)" }}>
                    {service.name}
                  </td>
                  <td style={tdStyle}>{CATEGORY_LABELS[service.category] || service.category}</td>
                  <td style={tdStyle}>{service.price}</td>
                  <td style={tdStyle}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 10px",
                        borderRadius: "var(--radius-pill)",
                        fontSize: "var(--text-caption)",
                        fontWeight: "var(--weight-medium)",
                        color: service.isActive ? "var(--color-success)" : "var(--color-text-secondary)",
                        background: service.isActive
                          ? "color-mix(in srgb, var(--color-success) 12%, transparent)"
                          : "var(--color-bg-secondary)",
                      }}
                    >
                      {service.isActive ? "上架" : "下架"}
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

export default AdminServices;
