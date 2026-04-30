"use client";

import { useState, useEffect } from "react";
import { settingsApi } from "@/lib/api";

const defaultValues: Record<string, string> = {
  siteName: "有思网",
  siteDescription: "专注幼儿园设计的一站式品牌服务平台",
  logoUrl: "/images/logo.png",
  phone: "400-888-8888",
  email: "contact@yousi.com",
  wechat: "yousi_design",
  address: "北京市朝阳区xxx大厦",
};

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
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState(defaultValues);

  useEffect(() => {
    settingsApi.get().then((data) => {
      setSettings({ ...defaultValues, ...data });
    }).catch(() => {});
  }, []);

  const update = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await settingsApi.update(settings);
      setSaved(true);
    } catch {
      alert("保存失败，请重试");
    } finally {
      setSaving(false);
      setTimeout(() => setSaved(false), 2000);
    }
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
              value={settings.siteName}
              onChange={(e) => update("siteName", e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>网站描述</label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => update("siteDescription", e.target.value)}
              style={textareaStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Logo URL</label>
            <input
              type="text"
              value={settings.logoUrl}
              onChange={(e) => update("logoUrl", e.target.value)}
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
              value={settings.phone}
              onChange={(e) => update("phone", e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>电子邮箱</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => update("email", e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>微信号</label>
            <input
              type="text"
              value={settings.wechat}
              onChange={(e) => update("wechat", e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>公司地址</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => update("address", e.target.value)}
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
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16 }}>
        {saved && (
          <span style={{ fontSize: 14, color: "var(--color-success)" }}>
            已保存
          </span>
        )}
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
