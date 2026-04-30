"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { loadSettings, defaultSettings } from "@/lib/settings";
import { inquiriesApi } from "@/lib/api";

const phoneIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const emailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const wechatIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

function getContactInfo(settings: typeof defaultSettings) {
  return [
    { icon: phoneIcon, label: "电话咨询", value: settings.phone, description: "工作日 9:00 - 18:00" },
    { icon: emailIcon, label: "邮箱", value: settings.email, description: "24小时内回复" },
    { icon: wechatIcon, label: "微信客服", value: settings.wechat, description: "扫码或搜索添加" },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "公司地址",
    value: settings.address,
    description: "欢迎预约到访",
  },
  ];
}

const serviceOptions = [
  "品牌全案设计",
  "Logo设计",
  "VI视觉系统",
  "空间设计",
  "IP形象设计",
  "园歌/音乐制作",
  "宣传片/视频制作",
  "网站/小程序开发",
  "其他",
];

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState(() => getContactInfo(defaultSettings));

  useEffect(() => {
    loadSettings().then((s) => setContactInfo(getContactInfo(s)));
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    kindergarten: "",
    phone: "",
    wechat: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await inquiriesApi.create({
        name: formData.name,
        kindergarten: formData.kindergarten,
        phone: formData.phone,
        wechat: formData.wechat || undefined,
        service: formData.service,
        message: formData.message || undefined,
      });
      setSubmitted(true);
      setFormData({ name: "", kindergarten: "", phone: "", wechat: "", service: "", message: "" });
    } catch {
      alert("提交失败，请重试");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "var(--space-4)",
    fontSize: 17,
    fontFamily: "var(--font-text)",
    color: "var(--color-text-primary)",
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    outline: "none",
    transition: "border-color var(--duration-fast)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 14,
    fontWeight: 500,
    color: "var(--color-text-primary)",
    marginBottom: "var(--space-2)",
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 var(--space-6)",
            maxWidth: 800,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 8vw, 56px)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-tight)",
              lineHeight: "var(--leading-tight)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-6)",
            }}
          >
            联系我们
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 28px)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-snug)",
            }}
          >
            预约免费咨询，专业顾问为您定制方案
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        style={{
          padding: "var(--section-padding-y) var(--space-6) 0",
          background: "var(--color-bg)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
          }}
        >
          <RevealOnScroll stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "var(--space-5)",
                marginBottom: "var(--space-16)",
              }}
            >
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  style={{
                    padding: "var(--space-6)",
                    background: "var(--color-bg-secondary)",
                    borderRadius: "var(--radius-lg)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      margin: "0 auto var(--space-4)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {info.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {info.description}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Form */}
      <section
        style={{
          padding: "0 var(--space-6) var(--section-padding-y)",
          background: "var(--color-bg)",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          <RevealOnScroll>
            <div
              style={{
                padding: "var(--space-10)",
                background: "var(--color-bg-secondary)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  marginBottom: "var(--space-8)",
                  textAlign: "center",
                }}
              >
                预约免费咨询
              </h2>

              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "var(--space-5)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  <div>
                    <label style={labelStyle}>
                      姓名 <span style={{ color: "var(--color-error)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      幼儿园名称 <span style={{ color: "var(--color-error)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="kindergarten"
                      value={formData.kindergarten}
                      onChange={handleChange}
                      placeholder="请输入幼儿园名称"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "var(--space-5)",
                    marginBottom: "var(--space-5)",
                  }}
                >
                  <div>
                    <label style={labelStyle}>
                      手机号码 <span style={{ color: "var(--color-error)" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="请输入手机号码"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      微信号 <span style={{ color: "var(--color-text-tertiary)", fontSize: 12 }}>(选填)</span>
                    </label>
                    <input
                      type="text"
                      name="wechat"
                      value={formData.wechat}
                      onChange={handleChange}
                      placeholder="请输入微信号"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "var(--space-5)" }}>
                  <label style={labelStyle}>
                    感兴趣的服务 <span style={{ color: "var(--color-error)" }}>*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L6 6L11 1\' stroke=\'%2386868B\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="" disabled>
                      请选择您感兴趣的服务
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "var(--space-8)" }}>
                  <label style={labelStyle}>
                    留言 <span style={{ color: "var(--color-text-tertiary)", fontSize: 12 }}>(选填)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请描述您的需求或问题"
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  {submitted ? (
                    <div style={{ padding: 16, color: "var(--color-success)", fontSize: 17, fontWeight: 500 }}>
                      提交成功！我们会尽快联系您。
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 48,
                        padding: "0 48px",
                        background: submitting ? "var(--color-text-secondary)" : "var(--color-cta)",
                        color: "#FFFFFF",
                        fontSize: 17,
                        fontWeight: 500,
                        fontFamily: "var(--font-text)",
                        border: "none",
                        borderRadius: "var(--radius-pill)",
                        cursor: submitting ? "not-allowed" : "pointer",
                        transition: "background var(--duration-fast)",
                      }}
                      className="hover:bg-[var(--color-cta-hover)]"
                    >
                      {submitting ? "提交中..." : "提交咨询"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
