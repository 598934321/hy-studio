"use client";

import { useState, useEffect } from "react";
import { ordersApi, inquiriesApi } from "@/lib/api";

interface Order {
  id: string;
  orderNo: string;
  customer: string;
  total: number;
  status: string;
}

interface Inquiry {
  id: string;
  name: string;
  service: string;
  status: string;
  createdAt: string;
}

const STATUS_LABELS: Record<string, string> = {
  pending: "待确认",
  in_progress: "进行中",
  completed: "已完成",
  cancelled: "已取消",
};

const INQUIRY_STATUS_LABELS: Record<string, string> = {
  pending: "未回复",
  contacted: "已联系",
  converted: "已转化",
};

export function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      ordersApi.list().catch(() => []),
      inquiriesApi.list().catch(() => []),
    ]).then(([o, i]) => {
      setOrders(o as unknown as Order[]);
      setInquiries(i as unknown as Inquiry[]);
      setLoading(false);
    });
  }, []);

  const stats = [
    { label: "总订单", value: String(orders.length), color: "var(--color-cta)" },
    { label: "待处理", value: String(orders.filter((o) => o.status === "pending").length), color: "var(--color-warning)" },
    { label: "待处理咨询", value: String(inquiries.filter((i) => i.status === "pending").length), color: "var(--color-warning)" },
    { label: "已完成", value: String(orders.filter((o) => o.status === "completed").length), color: "var(--color-success)" },
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

  const colorMap: Record<string, string> = {
    completed: "var(--color-success)",
    in_progress: "var(--color-cta)",
    pending: "var(--color-warning)",
    cancelled: "var(--color-text-secondary)",
    contacted: "var(--color-cta)",
    converted: "var(--color-success)",
  };

  return (
    <div style={{ padding: 32 }}>
      <h1
        style={{
          fontSize: "var(--text-title)",
          fontWeight: "var(--weight-semibold)",
          marginBottom: 32,
          letterSpacing: "var(--tracking-tight)",
        }}
      >
        数据概览
      </h1>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginBottom: 32,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-md)",
              padding: "24px",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--color-text-secondary)",
                marginBottom: 8,
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontSize: "var(--text-head)",
                fontWeight: "var(--weight-bold)",
                color: stat.color,
              }}
            >
              {loading ? "-" : stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Two-column layout for tables */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Recent Orders */}
        <div
          style={{
            background: "var(--color-bg)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px 24px 16px",
              fontSize: "var(--text-callout)",
              fontWeight: "var(--weight-semibold)",
            }}
          >
            最近订单
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>订单号</th>
                <th style={thStyle}>客户</th>
                <th style={thStyle}>金额</th>
                <th style={thStyle}>状态</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ ...tdStyle, textAlign: "center" }}>加载中...</td></tr>
              ) : orders.length === 0 ? (
                <tr><td colSpan={4} style={{ ...tdStyle, textAlign: "center" }}>暂无订单</td></tr>
              ) : (
                orders.slice(0, 5).map((order) => (
                  <tr key={order.id}>
                    <td style={tdStyle}>{order.orderNo}</td>
                    <td style={tdStyle}>{order.customer}</td>
                    <td style={tdStyle}>¥{order.total.toLocaleString()}</td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 10px",
                          borderRadius: "var(--radius-pill)",
                          fontSize: "var(--text-caption)",
                          fontWeight: "var(--weight-medium)",
                          color: colorMap[order.status] || "var(--color-text-secondary)",
                          background: colorMap[order.status]
                            ? `color-mix(in srgb, ${colorMap[order.status]} 12%, transparent)`
                            : "var(--color-bg-secondary)",
                        }}
                      >
                        {STATUS_LABELS[order.status] || order.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Recent Inquiries */}
        <div
          style={{
            background: "var(--color-bg)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px 24px 16px",
              fontSize: "var(--text-callout)",
              fontWeight: "var(--weight-semibold)",
            }}
          >
            最近咨询
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>姓名</th>
                <th style={thStyle}>服务</th>
                <th style={thStyle}>时间</th>
                <th style={thStyle}>状态</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ ...tdStyle, textAlign: "center" }}>加载中...</td></tr>
              ) : inquiries.length === 0 ? (
                <tr><td colSpan={4} style={{ ...tdStyle, textAlign: "center" }}>暂无咨询</td></tr>
              ) : (
                inquiries.slice(0, 5).map((inq) => (
                  <tr key={inq.id}>
                    <td style={tdStyle}>{inq.name}</td>
                    <td style={tdStyle}>{inq.service}</td>
                    <td style={tdStyle}>{new Date(inq.createdAt).toLocaleDateString("zh-CN")}</td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 10px",
                          borderRadius: "var(--radius-pill)",
                          fontSize: "var(--text-caption)",
                          fontWeight: "var(--weight-medium)",
                          color: colorMap[inq.status] || "var(--color-text-secondary)",
                          background: colorMap[inq.status]
                            ? `color-mix(in srgb, ${colorMap[inq.status]} 12%, transparent)`
                            : "var(--color-bg-secondary)",
                        }}
                      >
                        {INQUIRY_STATUS_LABELS[inq.status] || inq.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
