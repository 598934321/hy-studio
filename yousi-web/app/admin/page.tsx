"use client";

const STATS = [
  { label: "今日订单", value: "12", change: "+3", color: "var(--color-cta)" },
  { label: "本月收入", value: "¥128,500", change: "+12%", color: "var(--color-success)" },
  { label: "待处理咨询", value: "5", change: "-2", color: "var(--color-warning)" },
  { label: "活跃服务", value: "8", change: "+1", color: "var(--color-cta)" },
];

const RECENT_ORDERS = [
  { id: "ORD-20260430-001", customer: "张园长", item: "整园环创设计", total: "¥35,000", status: "进行中", date: "2026-04-30" },
  { id: "ORD-20260429-002", customer: "李园长", item: "品牌VI设计", total: "¥18,000", status: "已完成", date: "2026-04-29" },
  { id: "ORD-20260428-003", customer: "王主任", item: "空间导视设计", total: "¥12,500", status: "待确认", date: "2026-04-28" },
  { id: "ORD-20260427-004", customer: "赵园长", item: "活动策划设计", total: "¥8,000", status: "进行中", date: "2026-04-27" },
  { id: "ORD-20260426-005", customer: "刘园长", item: "整园环创设计", total: "¥42,000", status: "已完成", date: "2026-04-26" },
];

const RECENT_INQUIRIES = [
  { name: "陈园长", subject: "环创设计咨询", time: "10分钟前", status: "未回复" },
  { name: "孙主任", subject: "品牌升级咨询", time: "30分钟前", status: "未回复" },
  { name: "周园长", subject: "VI设计报价", time: "1小时前", status: "已回复" },
  { name: "吴园长", subject: "导视系统咨询", time: "2小时前", status: "已回复" },
  { name: "郑主任", subject: "活动策划咨询", time: "3小时前", status: "已回复" },
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

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    "已完成": "var(--color-success)",
    "进行中": "var(--color-cta)",
    "待确认": "var(--color-warning)",
    "已回复": "var(--color-success)",
    "未回复": "var(--color-error)",
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

export function AdminDashboard() {
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
        {STATS.map((stat) => (
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
                marginBottom: 4,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "var(--text-caption)",
                color: "var(--color-text-secondary)",
              }}
            >
              {stat.change}
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
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id}>
                  <td style={tdStyle}>{order.id}</td>
                  <td style={tdStyle}>{order.customer}</td>
                  <td style={tdStyle}>{order.total}</td>
                  <td style={tdStyle}>
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
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
                <th style={thStyle}>主题</th>
                <th style={thStyle}>时间</th>
                <th style={thStyle}>状态</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_INQUIRIES.map((inq, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{inq.name}</td>
                  <td style={tdStyle}>{inq.subject}</td>
                  <td style={tdStyle}>{inq.time}</td>
                  <td style={tdStyle}>
                    <StatusBadge status={inq.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
