"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

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
                  <input type="text" placeholder="请输入您的姓名" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>幼儿园名称</label>
                  <input type="text" placeholder="请输入幼儿园全称" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
                <div>
                  <label style={labelStyle}>联系电话</label>
                  <input type="tel" placeholder="请输入手机号码" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>微信号</label>
                  <input type="text" placeholder="请输入微信号（选填）" style={inputStyle} />
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
                <select style={{ ...inputStyle, cursor: "pointer" }}>
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
                />
              </div>

              <button
                type="button"
                style={{
                  marginTop: "var(--space-4)",
                  padding: "var(--space-4) var(--space-8)",
                  background: "var(--color-cta)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--weight-semibold)",
                  cursor: "pointer",
                  transition: "background var(--duration-fast) var(--easing-default)",
                  fontFamily: "var(--font-text)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-cta-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-cta)")}
              >
                提交咨询
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
