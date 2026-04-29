"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { packages } from "@/data/packages";

/* ────────────────── Hero ────────────────── */

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-hero-bg)",
        overflow: "hidden",
        paddingTop: 44,
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 var(--space-6)",
          maxWidth: 900,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 10vw, 80px)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-tight)",
            lineHeight: "var(--leading-tight)",
            color: "var(--color-text-on-dark)",
            marginBottom: "var(--space-4)",
          }}
        >
          价格方案
        </h1>
        <p
          style={{
            fontSize: "clamp(21px, 4vw, 32px)",
            fontWeight: 400,
            color: "var(--color-text-secondary)",
            lineHeight: "var(--leading-snug)",
          }}
        >
          选择适合您的品牌升级方案
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to top, rgba(29,29,31,0.9) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

/* ────────────────── Pricing Cards ────────────────── */

function PricingCards() {
  return (
    <section
      style={{
        padding: "var(--section-padding-y) var(--space-6)",
        background: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-wide-width)",
          margin: "0 auto",
        }}
      >
        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-6)",
              alignItems: "start",
            }}
          >
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function PackageCard({
  pkg,
}: {
  pkg: (typeof packages)[number];
}) {
  return (
    <div
      style={{
        position: "relative",
        background: pkg.isRecommended
          ? "var(--color-bg)"
          : "var(--color-bg)",
        border: pkg.isRecommended
          ? "2px solid var(--color-cta)"
          : "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: pkg.isRecommended
          ? "var(--shadow-lg)"
          : "var(--shadow-card)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 推荐 Badge */}
      {pkg.isRecommended && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "var(--color-cta)",
            color: "#FFFFFF",
            fontSize: 12,
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: "var(--radius-pill)",
            letterSpacing: "var(--tracking-wide)",
          }}
        >
          推荐
        </div>
      )}

      {/* Card Header */}
      <div
        style={{
          padding: "var(--space-8) var(--space-8) var(--space-6)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: "var(--space-2)",
          }}
        >
          {pkg.name}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-6)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {pkg.tagline}
        </p>

        {/* Price */}
        <div style={{ marginBottom: "var(--space-2)" }}>
          <span
            style={{
              fontSize: 14,
              color: "var(--color-text-secondary)",
              fontWeight: 400,
            }}
          >
            ¥
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {pkg.price.toLocaleString()}
          </span>
        </div>
        <div
          style={{
            fontSize: 15,
            color: "var(--color-text-tertiary)",
            textDecoration: "line-through",
            marginBottom: "var(--space-6)",
          }}
        >
          原价 ¥{pkg.originalPrice.toLocaleString()}
        </div>

        {/* Delivery & Warranty Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-6)",
            fontSize: 14,
            color: "var(--color-text-secondary)",
          }}
        >
          <span>交付周期 {pkg.deliveryDays} 天</span>
          <span>质保 {pkg.warrantyDays} 天</span>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "var(--color-divider)",
          margin: "0 var(--space-8)",
        }}
      />

      {/* Features List */}
      <div
        style={{
          padding: "var(--space-6) var(--space-8)",
          flex: 1,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          {pkg.features.map((feature) => (
            <li
              key={feature.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                fontSize: 15,
                color: feature.included
                  ? "var(--color-text-primary)"
                  : "var(--color-text-tertiary)",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: 12,
                  background: feature.included
                    ? "var(--color-success)"
                    : "var(--color-bg-secondary)",
                  color: feature.included
                    ? "#FFFFFF"
                    : "var(--color-text-tertiary)",
                }}
              >
                {feature.included ? "✓" : "✗"}
              </span>
              <span
                style={{
                  textDecoration: feature.included ? "none" : "line-through",
                }}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div
        style={{
          padding: "0 var(--space-8) var(--space-8)",
        }}
      >
        <Link
          href={`/contact?package=${pkg.slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 48,
            background: pkg.isRecommended
              ? "var(--color-cta)"
              : "transparent",
            color: pkg.isRecommended
              ? "#FFFFFF"
              : "var(--color-cta)",
            fontSize: 17,
            fontWeight: 500,
            borderRadius: "var(--radius-pill)",
            textDecoration: "none",
            border: pkg.isRecommended
              ? "none"
              : "1px solid var(--color-cta)",
            transition:
              "background var(--duration-fast), color var(--duration-fast)",
          }}
          className={
            pkg.isRecommended
              ? "hover:bg-[var(--color-cta-hover)]"
              : "hover:bg-[var(--color-cta)] hover:text-white"
          }
        >
          立即购买
        </Link>
      </div>
    </div>
  );
}

/* ────────────────── FAQ ────────────────── */

function FaqSection() {
  const faqs = [
    {
      q: "方案价格包含哪些服务？",
      a: "每个方案的价格包含该方案列出的所有服务项目。轻量版适合刚起步的幼儿园建立品牌基础；标准版提供全方位品牌升级；尊享版则包含旗舰级品牌全案，含宣传片拍摄和年度顾问服务。所有方案均包含源文件交付和商用授权。",
    },
    {
      q: "可以单独购买某个服务项目吗？",
      a: "可以。除了套餐方案，我们也提供单项服务购买。如果您只需要LOGO设计或VI系统等单项服务，可以联系我们获取单独报价。套餐方案相比单项购买有较大优惠。",
    },
    {
      q: "如果对设计方案不满意怎么办？",
      a: "我们承诺不满意免费修改。在质保期内，您可以提出修改意见，我们会根据您的反馈进行调整，直到您满意为止。轻量版提供30天质保，标准版90天，尊享版365天。",
    },
    {
      q: "付款方式和流程是怎样的？",
      a: "确认方案后，您可以通过在线支付或对公转账付款。一般流程为：签订合同后支付50%首款，设计方案确认后支付剩余50%尾款。我们也会根据项目情况提供灵活的付款安排。",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "var(--section-padding-y) var(--space-6)",
        background: "var(--color-bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
        }}
      >
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              常见问题
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              关于价格方案与服务的常见疑问
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div
            style={{
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  borderBottom:
                    index < faqs.length - 1
                      ? "1px solid var(--color-divider)"
                      : "none",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "var(--space-6) 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 21,
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: 24,
                      color: "var(--color-text-secondary)",
                      transition:
                        "transform var(--duration-normal) var(--easing-default)",
                      transform:
                        openIndex === index
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                      flexShrink: 0,
                      marginLeft: "var(--space-4)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openIndex === index ? 300 : 0,
                    overflow: "hidden",
                    transition:
                      "max-height var(--duration-normal) var(--easing-default)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 17,
                      color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-relaxed)",
                      paddingBottom: "var(--space-6)",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/* ────────────────── CTA ────────────────── */

function CtaSection() {
  return (
    <RevealOnScroll>
      <section
        style={{
          padding: "var(--space-20) var(--space-6)",
          background: "var(--color-bg)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 600,
            marginBottom: "var(--space-4)",
          }}
        >
          需要帮助选择？
        </h2>
        <p
          style={{
            fontSize: 21,
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-8)",
            maxWidth: 600,
            margin: "0 auto var(--space-8)",
          }}
        >
          我们的专业顾问将为您推荐最适合的品牌方案
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 48,
            padding: "0 32px",
            background: "var(--color-cta)",
            color: "#FFFFFF",
            fontSize: 17,
            fontWeight: 500,
            borderRadius: "var(--radius-pill)",
            textDecoration: "none",
            transition: "background var(--duration-fast)",
          }}
          className="hover:bg-[var(--color-cta-hover)]"
        >
          预约免费咨询
        </Link>
      </section>
    </RevealOnScroll>
  );
}

/* ────────────────── Page ────────────────── */

export default function PackagesPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <PricingCards />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
