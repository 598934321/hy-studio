"use client";

import { useState, useEffect, useCallback } from "react";
import { inquiriesApi } from "@/lib/api";

interface Inquiry {
  id: string;
  name: string;
  kindergarten: string;
  phone: string;
  wechat?: string;
  service: string;
  message?: string;
  status: string;
  createdAt: string;
}

const STATUS_MAP: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "待联系", color: "#FF9500", bg: "rgba(255,149,0,0.1)" },
  contacted: { label: "已联系", color: "#0066CC", bg: "rgba(0,102,204,0.1)" },
  converted: { label: "已转化", color: "#34C759", bg: "rgba(52,199,89,0.1)" },
};

export default function AdminInquiries() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const data = await inquiriesApi.list(statusFilter === "all" ? undefined : statusFilter);
      setInquiries(data as unknown as Inquiry[]);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    loadInquiries();
  }, [loadInquiries]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await inquiriesApi.updateStatus(id, newStatus);
      setInquiries((prev) =>
        prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
      );
    } catch {
      alert("更新失败");
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          咨询管理
        </h1>
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {[
          { key: "all", label: "全部" },
          { key: "pending", label: "待联系" },
          { key: "contacted", label: "已联系" },
          { key: "converted", label: "已转化" },
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

      {/* Table */}
      <div
        style={{
          background: "var(--color-bg)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "var(--color-bg-secondary)", textAlign: "left" }}>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>客户</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>幼儿园</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>电话</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>意向服务</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>留言</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>状态</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>日期</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} style={{ padding: 32, textAlign: "center", color: "var(--color-text-secondary)" }}>
                  加载中...
                </td>
              </tr>
            ) : inquiries.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ padding: 32, textAlign: "center", color: "var(--color-text-secondary)" }}>
                  暂无咨询记录
                </td>
              </tr>
            ) : (
              inquiries.map((inquiry) => {
                const status = STATUS_MAP[inquiry.status] || STATUS_MAP.pending;
                return (
                  <tr key={inquiry.id} style={{ borderTop: "1px solid var(--color-divider)" }}>
                    <td style={{ padding: "12px 16px" }}>{inquiry.name}</td>
                    <td style={{ padding: "12px 16px" }}>{inquiry.kindergarten}</td>
                    <td style={{ padding: "12px 16px" }}>{inquiry.phone}</td>
                    <td style={{ padding: "12px 16px" }}>{inquiry.service}</td>
                    <td style={{ padding: "12px 16px", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {inquiry.message || "-"}
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <span
                        style={{
                          padding: "2px 10px",
                          borderRadius: "var(--radius-pill)",
                          fontSize: 12,
                          fontWeight: 500,
                          color: status.color,
                          background: status.bg,
                        }}
                      >
                        {status.label}
                      </span>
                    </td>
                    <td style={{ padding: "12px 16px", color: "var(--color-text-secondary)" }}>
                      {new Date(inquiry.createdAt).toLocaleDateString("zh-CN")}
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
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
                        <option value="pending">待联系</option>
                        <option value="contacted">已联系</option>
                        <option value="converted">已转化</option>
                      </select>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
