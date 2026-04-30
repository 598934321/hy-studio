"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inquiriesApi } from "@/lib/api";

const services = [
  "品牌视觉设计",
  "空间设计",
  "宣传物料",
  "数字化平台",
  "课程体系设计",
  "招生营销方案",
];

const budgetRanges = [
  "请选择预算范围",
  "5,000 以下",
  "5,000 - 20,000",
  "20,000 - 50,000",
  "50,000 - 100,000",
  "100,000 以上",
];

export default function ConsultPage() {
  const [name, setName] = useState("");
  const [kindergarten, setKindergarten] = useState("");
  const [phone, setPhone] = useState("");
  const [wechat, setWechat] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState(budgetRanges[0]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async () => {
    setError("");
    if (!name.trim()) { setError("请输入姓名"); return; }
    if (!kindergarten.trim()) { setError("请输入幼儿园名称"); return; }
    if (!phone.trim()) { setError("请输入联系电话"); return; }
    if (selectedServices.length === 0) { setError("请选择至少一项服务"); return; }

    setSubmitting(true);
    try {
      const parts = [];
      if (budget !== budgetRanges[0]) parts.push(`预算：${budget}`);
      if (message.trim()) parts.push(message.trim());
      const fullMessage = parts.join("；");

      await inquiriesApi.create({
        name: name.trim(),
        kindergarten: kindergarten.trim(),
        phone: phone.trim(),
        wechat: wechat.trim() || undefined,
        service: selectedServices.join("、"),
        message: fullMessage || undefined,
      });
      setSuccess(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "提交失败，请重试");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <>
        <Header />
        <main
          style={{
            background: "var(--color-bg-secondary)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "var(--space-20)",
            paddingBottom: "var(--space-20)",
          }}
        >
          <section
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-16) var(--space-8)",
              boxShadow: "var(--shadow-card)",
              textAlign: "center",
              maxWidth: "520px",
              width: "100%",
              margin: "0 var(--content-padding-x)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "var(--color-success)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto var(--space-8)",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M10 20L17 27L30 13" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-subtitle)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-4)",
              }}
            >
              咨询提交成功！
            </h1>
            <p style={{ fontSize: "var(--text-body)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>
              我们的顾问将尽快与您联系
            </p>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main
        style={{
          background: "var(--color-bg-secondary)",
          minHeight: "100vh",
          paddingTop: "var(--space-20)",
          paddingBottom: "var(--space-20)",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 var(--content-padding-x)",
          }}
        >
          <section
            style={{
              background: "var(--color-bg)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-8)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-title)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-2)",
              }}
            >
              业务咨询
            </h1>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-text-secondary)",
                marginBottom: "var(--space-8)",
              }}
            >
              填写以下信息，我们的顾问将为您提供专业建议
            </p>

            <form style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                <div>
                  <label style={labelStyle}>姓名</label>
                  <input type="text" placeholder="请输入您的姓名" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>幼儿园名称</label>
                  <input type="text" placeholder="请输入幼儿园全称" style={inputStyle} value={kindergarten} onChange={(e) => setKindergarten(e.target.value)} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                <div>
                  <label style={labelStyle}>联系电话</label>
                  <input type="tel" placeholder="请输入手机号码" style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>微信号</label>
                  <input type="text" placeholder="请输入微信号（选填）" style={inputStyle} value={wechat} onChange={(e) => setWechat(e.target.value)} />
                </div>
              </div>

              {/* Interested Services */}
              <div>
                <label style={labelStyle}>感兴趣的服务（可多选）</label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "var(--space-3)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <label
                        key={service}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--space-2)",
                          padding: "var(--space-3) var(--space-4)",
                          border: `1.5px solid ${isSelected ? "var(--color-cta)" : "var(--color-border)"}`,
                          borderRadius: "var(--radius-sm)",
                          cursor: "pointer",
                          fontSize: "var(--text-footnote)",
                          fontWeight: isSelected ? "var(--weight-medium)" : "var(--weight-regular)",
                          color: isSelected ? "var(--color-cta)" : "var(--color-text-primary)",
                          background: isSelected ? "rgba(0, 102, 204, 0.04)" : "transparent",
                          transition: "all var(--duration-fast) var(--easing-default)",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleService(service)}
                          style={{ display: "none" }}
                        />
                        <span
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: `1.5px solid ${isSelected ? "var(--color-cta)" : "var(--color-border)"}`,
                            background: isSelected ? "var(--color-cta)" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all var(--duration-fast) var(--easing-default)",
                          }}
                        >
                          {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        {service}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label style={labelStyle}>预算范围</label>
                <select style={{ ...inputStyle, cursor: "pointer" }} value={budget} onChange={(e) => setBudget(e.target.value)}>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>补充说明</label>
                <textarea
                  placeholder="请描述您的具体需求或期望"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" as const }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {error && (
                <p style={{ color: "var(--color-error, #ff3b30)", fontSize: "var(--text-footnote)" }}>{error}</p>
              )}

              <button
                type="button"
                disabled={submitting}
                style={{
                  marginTop: "var(--space-4)",
                  padding: "var(--space-4) var(--space-8)",
                  background: submitting ? "var(--color-text-tertiary)" : "var(--color-cta)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--weight-semibold)",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "background var(--duration-fast) var(--easing-default)",
                  fontFamily: "var(--font-text)",
                }}
                onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = "var(--color-cta-hover)"; }}
                onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = "var(--color-cta)"; }}
                onClick={handleSubmit}
              >
                {submitting ? "提交中..." : "提交咨询"}
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "var(--text-footnote)",
  fontWeight: "var(--weight-medium)",
  color: "var(--color-text-secondary)",
  marginBottom: "var(--space-2)",
  fontFamily: "var(--font-text)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "var(--space-3) var(--space-4)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-sm)",
  fontSize: "var(--text-body)",
  fontFamily: "var(--font-text)",
  color: "var(--color-text-primary)",
  background: "var(--color-bg)",
  outline: "none",
  transition: "border-color var(--duration-fast) var(--easing-default)",
};
