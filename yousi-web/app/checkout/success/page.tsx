"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNo = searchParams.get("orderNo");

  return (
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
      {/* Success Icon */}
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
          <path
            d="M10 20L17 27L30 13"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
        订单提交成功！
      </h1>

      {orderNo && (
        <p
          style={{
            fontSize: "var(--text-body)",
            color: "var(--color-text-primary)",
            fontWeight: "var(--weight-medium)",
            marginBottom: "var(--space-2)",
          }}
        >
          订单号：{orderNo}
        </p>
      )}

      <p
        style={{
          fontSize: "var(--text-body)",
          color: "var(--color-text-secondary)",
          lineHeight: "var(--leading-relaxed)",
          marginBottom: "var(--space-10)",
        }}
      >
        我们的顾问将在24小时内与您联系
      </p>

      <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center" }}>
        <Link
          href="/account/orders"
          style={{
            padding: "var(--space-3) var(--space-6)",
            background: "var(--color-cta)",
            color: "#fff",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--text-footnote)",
            fontWeight: "var(--weight-semibold)",
            textDecoration: "none",
            transition: "background var(--duration-fast) var(--easing-default)",
            fontFamily: "var(--font-text)",
          }}
        >
          查看订单
        </Link>
        <Link
          href="/"
          style={{
            padding: "var(--space-3) var(--space-6)",
            background: "transparent",
            color: "var(--color-cta)",
            border: "1px solid var(--color-cta)",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--text-footnote)",
            fontWeight: "var(--weight-semibold)",
            textDecoration: "none",
            transition: "all var(--duration-fast) var(--easing-default)",
            fontFamily: "var(--font-text)",
          }}
        >
          返回首页
        </Link>
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
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
        <Suspense>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
