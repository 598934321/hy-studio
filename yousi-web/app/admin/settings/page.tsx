"use client";

import { useState } from "react";

const sectionStyle: React.CSSProperties = {
  background: "var(--color-bg)",
  borderRadius: "var(--radius-md)",
  boxShadow: "var(--shadow-card)",
  padding: 24,
  marginBottom: 24,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--text-footnote)",
  fontWeight: "var(--weight-medium)",
  color: "var(--color-text-primary)",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "var(--radius-sm)",
  border: "1px solid var(--color-border)",
  fontSize: "var(--text-footnote)",
  background: "var(--color-bg)",
  color: "var(--color-text-primary)",
  outline: "none",
  fontFamily: "var(--font-text)",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 80,
  resize: "vertical",
};

export function AdminSettings() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  };

  return (
    <div style={{ padding: 32, maxWidth: 800 }}>
      <h1
        style={{
          fontSize: "var(--text-title)",
          fontWeight: "var(--weight-semibold)",
          marginBottom: 32,
          letterSpacing: "var(--tracking-tight)",
        }}
      >
        系统设置
      </h1>

      {/* Website Info */}
      <div style={sectionStyle}>
        <h2
          style={{
            fontSize: "var(--text-callout)",
            fontWeight: "var(--weight-semibold)",
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: "1px solid var(--color-border-light)",
          }}
        >
          网站信息
        </h2>

        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <label style={labelStyle}>网站名称</label>
            <input
              type="text"
              defaultValue="有思网"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>网站描述</label>
            <textarea
              defaultValue="专注幼儿园设计的一站式品牌服务平台"
              style={textareaStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Logo URL</label>
            <input
              type="text"
              defaultValue="/images/logo.png"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div style={sectionStyle}>
        <h2
          style={{
            fontSize: "var(--text-callout)",
            fontWeight: "var(--weight-semibold)",
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: "1px solid var(--color-border-light)",
          }}
        >
          联系方式
        </h2>

        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <label style={labelStyle}>联系电话</label>
            <input
              type="tel"
              defaultValue="400-888-8888"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>电子邮箱</label>
            <input
              type="email"
              defaultValue="contact@yousi.com"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>微信号</label>
            <input
              type="text"
              defaultValue="yousi_design"
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>公司地址</label>
            <input
              type="text"
              defaultValue="北京市朝阳区xxx大厦"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Payment Config */}
      <div style={sectionStyle}>
        <h2
          style={{
            fontSize: "var(--text-callout)",
            fontWeight: "var(--weight-semibold)",
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: "1px solid var(--color-border-light)",
          }}
        >
          支付配置
        </h2>

        <div
          style={{
            padding: 32,
            textAlign: "center",
            color: "var(--color-text-secondary)",
            fontSize: "var(--text-footnote)",
            background: "var(--color-bg-secondary)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          支付接口配置将在此处管理（待接入）
        </div>
      </div>

      {/* Save Button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            padding: "10px 32px",
            borderRadius: "var(--radius-sm)",
            border: "none",
            background: saving
              ? "var(--color-text-secondary)"
              : "var(--color-cta)",
            color: "#FFFFFF",
            fontSize: "var(--text-body)",
            fontWeight: "var(--weight-medium)",
            cursor: saving ? "not-allowed" : "pointer",
            transition: "background var(--duration-fast)",
          }}
        >
          {saving ? "保存中..." : "保存设置"}
        </button>
      </div>
    </div>
  );
}

export default AdminSettings;
