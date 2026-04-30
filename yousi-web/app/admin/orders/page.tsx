"use client";

import { useState, useEffect, useCallback } from "react";
import { ordersApi } from "@/lib/api";

interface Order {
  id: string;
  orderNo: string;
  customer: string;
  phone: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
  status: string;
  createdAt: string;
}

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  pending: { label: "待确认", color: "var(--color-warning)" },
  in_progress: { label: "进行中", color: "var(--color-cta)" },
  completed: { label: "已完成", color: "var(--color-success)" },
  cancelled: { label: "已取消", color: "var(--color-text-secondary)" },
};

function StatusBadge({ status }: { status: string }) {
  const info = STATUS_MAP[status] || STATUS_MAP.pending;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "var(--radius-pill)",
        fontSize: "var(--text-caption)",
        fontWeight: "var(--weight-medium)",
        color: info.color,
        background: `color-mix(in srgb, ${info.color} 12%, transparent)`,
      }}
    >
      {info.label}
    </span>
  );
}

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

export function AdminOrders() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = useCallback(async () => {
    setLoading(true);
    try {
      const data = await ordersApi.list(statusFilter === "all" ? undefined : statusFilter);
      setOrders(data as unknown as Order[]);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await ordersApi.updateStatus(id, newStatus);
      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
      );
    } catch {
      alert("更新失败");
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h1
        style={{
          fontSize: "var(--text-title)",
          fontWeight: "var(--weight-semibold)",
          marginBottom: 24,
          letterSpacing: "var(--tracking-tight)",
        }}
      >
        订单管理
      </h1>

      {/* Filter Bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {[
          { key: "all", label: "全部" },
          { key: "pending", label: "待确认" },
          { key: "in_progress", label: "进行中" },
          { key: "completed", label: "已完成" },
          { key: "cancelled", label: "已取消" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setStatusFilter(f.key)}
            style={{
              padding: "6px 16px",
              borderRadius: "var(--radius-pill)",
              border: "none",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              background: statusFilter === f.key ? "var(--color-cta)" : "var(--color-bg)",
              color: statusFilter === f.key ? "#FFFFFF" : "var(--color-text-primary)",
              transition: "all var(--duration-fast)",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Orders Table */}
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
              <th style={thStyle}>订单号</th>
              <th style={thStyle}>客户</th>
              <th style={thStyle}>服务项目</th>
              <th style={thStyle}>金额</th>
              <th style={thStyle}>状态</th>
              <th style={thStyle}>日期</th>
              <th style={thStyle}>操作</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} style={{ ...tdStyle, textAlign: "center", padding: 32 }}>
                  加载中...
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ ...tdStyle, textAlign: "center", padding: 32 }}>
                  暂无订单
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td style={tdStyle}>{order.orderNo}</td>
                  <td style={tdStyle}>
                    <div>{order.customer}</div>
                    <div style={{ fontSize: "var(--text-caption)", color: "var(--color-text-secondary)" }}>
                      {order.phone}
                    </div>
                  </td>
                  <td style={tdStyle}>
                    {(order.items as { name: string }[]).map((i) => i.name).join("、")}
                  </td>
                  <td style={tdStyle}>¥{order.total.toLocaleString()}</td>
                  <td style={tdStyle}>
                    <StatusBadge status={order.status} />
                  </td>
                  <td style={tdStyle}>
                    {new Date(order.createdAt).toLocaleDateString("zh-CN")}
                  </td>
                  <td style={tdStyle}>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      style={{
                        padding: "4px 8px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border)",
                        fontSize: 12,
                        background: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                        outline: "none",
                      }}
                    >
                      <option value="pending">待确认</option>
                      <option value="in_progress">进行中</option>
                      <option value="completed">已完成</option>
                      <option value="cancelled">已取消</option>
                    </select>
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

export default AdminOrders;
