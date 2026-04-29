"use client";

const ORDERS = [
  { id: "ORD-20260430-001", customer: "张园长", phone: "138****1234", items: "整园环创设计", total: "¥35,000", status: "进行中", date: "2026-04-30" },
  { id: "ORD-20260429-002", customer: "李园长", phone: "139****5678", items: "品牌VI设计", total: "¥18,000", status: "已完成", date: "2026-04-29" },
  { id: "ORD-20260428-003", customer: "王主任", phone: "137****9012", items: "空间导视设计", total: "¥12,500", status: "待确认", date: "2026-04-28" },
  { id: "ORD-20260427-004", customer: "赵园长", phone: "136****3456", items: "活动策划设计", total: "¥8,000", status: "进行中", date: "2026-04-27" },
  { id: "ORD-20260426-005", customer: "刘园长", phone: "135****7890", items: "整园环创设计", total: "¥42,000", status: "已完成", date: "2026-04-26" },
];

const STATUS_OPTIONS = ["全部状态", "待确认", "进行中", "已完成", "已取消"];

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    "已完成": "var(--color-success)",
    "进行中": "var(--color-cta)",
    "待确认": "var(--color-warning)",
    "已取消": "var(--color-text-secondary)",
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: "var(--radius-pill)",
        fontSize: "var(--text-caption)",
        fontWeight: "var(--weight-medium)",
        color: colorMap[status] || "var(--color-text-secondary)",
        background: colorMap[status]
          ? `color-mix(in srgb, ${colorMap[status]} 12%, transparent)`
          : "var(--color-bg-secondary)",
      }}
    >
      {status}
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

const btnStyle: React.CSSProperties = {
  padding: "4px 12px",
  fontSize: "var(--text-caption)",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--color-border)",
  background: "var(--color-bg)",
  color: "var(--color-text-primary)",
  cursor: "pointer",
};

export function AdminOrders() {
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
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 24,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <select
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            fontSize: "var(--text-footnote)",
            background: "var(--color-bg)",
            color: "var(--color-text-primary)",
            outline: "none",
          }}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <input
          type="date"
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            fontSize: "var(--text-footnote)",
            background: "var(--color-bg)",
            color: "var(--color-text-primary)",
            outline: "none",
          }}
        />

        <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-footnote)" }}>至</span>

        <input
          type="date"
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            fontSize: "var(--text-footnote)",
            background: "var(--color-bg)",
            color: "var(--color-text-primary)",
            outline: "none",
          }}
        />

        <input
          type="text"
          placeholder="搜索订单号或客户..."
          style={{
            padding: "8px 12px",
            borderRadius: "var(--radius-sm)",
            border: "1px solid var(--color-border)",
            fontSize: "var(--text-footnote)",
            background: "var(--color-bg)",
            color: "var(--color-text-primary)",
            outline: "none",
            flex: 1,
            minWidth: 200,
          }}
        />
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
            {ORDERS.map((order) => (
              <tr key={order.id}>
                <td style={tdStyle}>{order.id}</td>
                <td style={tdStyle}>
                  <div>{order.customer}</div>
                  <div style={{ fontSize: "var(--text-caption)", color: "var(--color-text-secondary)" }}>
                    {order.phone}
                  </div>
                </td>
                <td style={tdStyle}>{order.items}</td>
                <td style={tdStyle}>{order.total}</td>
                <td style={tdStyle}>
                  <StatusBadge status={order.status} />
                </td>
                <td style={tdStyle}>{order.date}</td>
                <td style={tdStyle}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={btnStyle}>查看</button>
                    <button style={btnStyle}>编辑</button>
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

export default AdminOrders;
