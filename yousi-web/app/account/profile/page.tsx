"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
            maxWidth: "680px",
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
                marginBottom: "var(--space-8)",
              }}
            >
              个人资料
            </h1>

            <form style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
              <div>
                <label style={labelStyle}>姓名</label>
                <input type="text" defaultValue="张老师" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>联系电话</label>
                <input type="tel" defaultValue="138****8888" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>幼儿园名称</label>
                <input type="text" defaultValue="阳光花园幼儿园" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>微信号</label>
                <input type="text" defaultValue="zhang_teacher" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>邮箱</label>
                <input type="email" defaultValue="zhang@example.com" style={inputStyle} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
                <button
                  type="button"
                  onClick={handleSave}
                  style={{
                    padding: "var(--space-3) var(--space-8)",
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
                  保存修改
                </button>

                {saved && (
                  <span
                    style={{
                      fontSize: "var(--text-footnote)",
                      color: "var(--color-success)",
                      fontWeight: "var(--weight-medium)",
                    }}
                  >
                    保存成功
                  </span>
                )}
              </div>
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
