"use client";

import { useState } from "react";
import Link from "next/link";

const INQUIRIES = [
  {
    id: "INQ-001",
    name: "张园长",
    kindergarten: "成都阳光幼儿园",
    phone: "138****1234",
    service: "品牌全案",
    budget: "10,000 - 30,000",
    message: "想做一个完整的幼儿园品牌升级，包括Logo、VI和空间设计。",
    status: "pending",
    date: "2026-04-30",
  },
  {
    id: "INQ-002",
    name: "李园长",
    kindergarten: "成都未来星幼儿园",
    phone: "139****5678",
    service: "音乐制作",
    budget: "5,000 - 10,000",
    message: "需要制作一首园歌和几首背景音乐。",
    status: "contacted",
    date: "2026-04-29",
  },
  {
    id: "INQ-003",
    name: "王园长",
    kindergarten: "成都蓝天幼儿园",
    phone: "137****9012",
    service: "视频制作",
    budget: "5,000 - 10,000",
    message: "想拍一个招生宣传片，大概3-5分钟。",
    status: "pending",
    date: "2026-04-28",
  },
  {
    id: "INQ-004",
    name: "赵园长",
    kindergarten: "成都彩虹幼儿园",
    phone: "136****3456",
    service: "IP设计",
    budget: "10,000 - 30,000",
    message: "想设计一个幼儿园吉祥物，用于文创产品。",
    status: "converted",
    date: "2026-04-27",
  },
  {
    id: "INQ-005",
    name: "刘园长",
    kindergarten: "成都智慧树幼儿园",
    phone: "135****7890",
    service: "网站开发",
    budget: "5,000 - 10,000",
    message: "需要做一个幼儿园官网，要有在线报名功能。",
    status: "contacted",
    date: "2026-04-26",
  },
];

const STATUS_MAP: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "待联系", color: "#FF9500", bg: "rgba(255,149,0,0.1)" },
  contacted: { label: "已联系", color: "#0066CC", bg: "rgba(0,102,204,0.1)" },
  converted: { label: "已转化", color: "#34C759", bg: "rgba(52,199,89,0.1)" },
};

export default function AdminInquiries() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered =
    statusFilter === "all"
      ? INQUIRIES
      : INQUIRIES.filter((i) => i.status === statusFilter);

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
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 24,
        }}
      >
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
              background:
                statusFilter === f.key
                  ? "var(--color-cta)"
                  : "var(--color-bg)",
              color:
                statusFilter === f.key ? "#FFFFFF" : "var(--color-text-primary)",
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
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 14,
          }}
        >
          <thead>
            <tr
              style={{
                background: "var(--color-bg-secondary)",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>编号</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>客户</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>幼儿园</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>意向服务</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>预算</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>状态</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>日期</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inquiry) => {
              const status = STATUS_MAP[inquiry.status];
              return (
                <tr
                  key={inquiry.id}
                  style={{ borderTop: "1px solid var(--color-divider)" }}
                >
                  <td style={{ padding: "12px 16px" }}>{inquiry.id}</td>
                  <td style={{ padding: "12px 16px" }}>{inquiry.name}</td>
                  <td style={{ padding: "12px 16px" }}>{inquiry.kindergarten}</td>
                  <td style={{ padding: "12px 16px" }}>{inquiry.service}</td>
                  <td style={{ padding: "12px 16px" }}>¥{inquiry.budget}</td>
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
                    {inquiry.date}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--color-text-link)",
                        cursor: "pointer",
                        fontSize: 14,
                      }}
                    >
                      查看详情
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detail hint */}
      <div
        style={{
          marginTop: 24,
          padding: 16,
          background: "var(--color-bg)",
          borderRadius: "var(--radius-md)",
          fontSize: 14,
          color: "var(--color-text-secondary)",
        }}
      >
        提示：咨询记录来自联系页面和结算页的咨询表单。接入 Supabase 后将自动同步数据。
      </div>
    </div>
  );
}
