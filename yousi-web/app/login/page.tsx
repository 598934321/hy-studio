"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const { login, register, isAuthenticated, user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginCode, setLoginCode] = useState("");
  const [regName, setRegName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regSchool, setRegSchool] = useState("");
  const [regCode, setRegCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated && user) {
      router.replace(user.role === "admin" ? "/admin" : "/account");
    }
  }, [isAuthenticated, user, router]);

  const handleSendCode = () => {
    setCodeSent(true);
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCodeSent(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const result = login(loginPhone, loginCode);
    if (!result.success) {
      setError(result.error || "登录失败");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const result = register(regName, regPhone, regSchool, regCode);
    if (!result.success) {
      setError(result.error || "注册失败");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "var(--text-body)",
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
    fontSize: "var(--text-footnote)",
    fontFamily: "var(--font-text)",
    fontWeight: "var(--weight-medium)",
    color: "var(--color-text-primary)",
    marginBottom: "var(--space-2)",
  };

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          background: "var(--color-bg-secondary)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            background: "var(--color-bg)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            padding: "48px 40px",
          }}
        >
          {/* Tab Switch */}
          <div
            style={{
              display: "flex",
              marginBottom: "var(--space-10)",
              borderBottom: "1px solid var(--color-divider)",
            }}
          >
            {(["login", "register"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: "var(--space-3) 0",
                  border: "none",
                  background: "none",
                  fontSize: "var(--text-callout)",
                  fontFamily: "var(--font-text)",
                  fontWeight:
                    activeTab === tab
                      ? "var(--weight-semibold)"
                      : "var(--weight-regular)",
                  color:
                    activeTab === tab
                      ? "var(--color-text-primary)"
                      : "var(--color-text-secondary)",
                  cursor: "pointer",
                  borderBottom: activeTab === tab
                    ? "2px solid var(--color-text-primary)"
                    : "2px solid transparent",
                  transition:
                    "color var(--duration-fast), border-color var(--duration-fast)",
                }}
              >
                {tab === "login" ? "登录" : "注册"}
              </button>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                padding: "var(--space-3) var(--space-4)",
                background: "rgba(255, 59, 48, 0.1)",
                color: "var(--color-error)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-footnote)",
                marginBottom: "var(--space-2)",
              }}
            >
              {error}
            </div>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <form
              onSubmit={handleLogin}
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
            >
              <div>
                <label style={labelStyle}>手机号</label>
                <input
                  type="tel"
                  placeholder="请输入手机号"
                  value={loginPhone}
                  onChange={(e) => setLoginPhone(e.target.value)}
                  style={inputStyle}
                  maxLength={11}
                />
              </div>

              <div>
                <label style={labelStyle}>验证码</label>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  <input
                    type="text"
                    placeholder="请输入验证码"
                    value={loginCode}
                    onChange={(e) => setLoginCode(e.target.value)}
                    style={{ ...inputStyle, flex: 1 }}
                    maxLength={6}
                  />
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={codeSent}
                    style={{
                      whiteSpace: "nowrap",
                      padding: "0 16px",
                      fontSize: "var(--text-footnote)",
                      fontFamily: "var(--font-text)",
                      fontWeight: "var(--weight-medium)",
                      color: codeSent
                        ? "var(--color-text-tertiary)"
                        : "var(--color-cta)",
                      background: "none",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      cursor: codeSent ? "default" : "pointer",
                      transition: "color var(--duration-fast)",
                    }}
                  >
                    {codeSent ? `${countdown}s` : "获取验证码"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "var(--text-body)",
                  fontFamily: "var(--font-text)",
                  fontWeight: "var(--weight-semibold)",
                  color: "#fff",
                  background: "var(--color-cta)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  cursor: "pointer",
                  transition: "background var(--duration-fast)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-cta-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-cta)";
                }}
              >
                登录
              </button>
            </form>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <form
              onSubmit={handleRegister}
              style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}
            >
              <div>
                <label style={labelStyle}>姓名</label>
                <input
                  type="text"
                  placeholder="请输入姓名"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>手机号</label>
                <input
                  type="tel"
                  placeholder="请输入手机号"
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  style={inputStyle}
                  maxLength={11}
                />
              </div>

              <div>
                <label style={labelStyle}>幼儿园名称</label>
                <input
                  type="text"
                  placeholder="请输入幼儿园名称"
                  value={regSchool}
                  onChange={(e) => setRegSchool(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>验证码</label>
                <div style={{ display: "flex", gap: "var(--space-3)" }}>
                  <input
                    type="text"
                    placeholder="请输入验证码"
                    value={regCode}
                    onChange={(e) => setRegCode(e.target.value)}
                    style={{ ...inputStyle, flex: 1 }}
                    maxLength={6}
                  />
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={codeSent}
                    style={{
                      whiteSpace: "nowrap",
                      padding: "0 16px",
                      fontSize: "var(--text-footnote)",
                      fontFamily: "var(--font-text)",
                      fontWeight: "var(--weight-medium)",
                      color: codeSent
                        ? "var(--color-text-tertiary)"
                        : "var(--color-cta)",
                      background: "none",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      cursor: codeSent ? "default" : "pointer",
                    }}
                  >
                    {codeSent ? `${countdown}s` : "获取验证码"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "var(--text-body)",
                  fontFamily: "var(--font-text)",
                  fontWeight: "var(--weight-semibold)",
                  color: "#fff",
                  background: "var(--color-cta)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  cursor: "pointer",
                  transition: "background var(--duration-fast)",
                  marginTop: "var(--space-2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-cta-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-cta)";
                }}
              >
                注册
              </button>
            </form>
          )}

          {/* Terms */}
          <p
            style={{
              textAlign: "center",
              fontSize: "var(--text-caption)",
              fontFamily: "var(--font-text)",
              color: "var(--color-text-secondary)",
              marginTop: "var(--space-8)",
            }}
          >
            {activeTab === "login" ? "登录" : "注册"}即表示同意
            <a
              href="/terms"
              style={{
                color: "var(--color-text-link)",
                textDecoration: "none",
              }}
            >
              服务条款
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
