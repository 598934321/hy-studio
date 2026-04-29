"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const faqItems = [
  {
    question: "有思网提供哪些服务？",
    answer:
      "有思网提供一站式幼儿园品牌设计服务，包括品牌策略、Logo设计、VI视觉系统、空间设计、IP形象设计、园歌制作、宣传片拍摄、网站及小程序开发等。我们覆盖从品牌策划到落地执行的全流程，帮助幼儿园建立完整的品牌形象。",
  },
  {
    question: "价格是如何制定的？",
    answer:
      "我们采用透明定价模式，所有服务套餐均在官网明码标价。价格根据服务内容和复杂程度分为不同档位，从基础套餐到旗舰全案套餐，满足不同预算需求。AI辅助设计大幅降低了成本，我们的价格通常比传统设计公司低30%-50%。",
  },
  {
    question: "项目交付需要多长时间？",
    answer:
      "交付时间取决于项目类型和复杂度。基础Logo设计通常3-5个工作日出初稿，VI系统设计约7-10个工作日，品牌全案项目约15-20个工作日。我们会在签约时明确交付时间表，并全程跟进项目进度。",
  },
  {
    question: "可以修改几次？",
    answer:
      "所有套餐均包含免费修改服务。基础套餐提供2次免费修改，标准套餐提供3次，旗舰套餐不限修改次数，直到您满意为止。超出免费修改次数后，我们会根据实际情况收取合理的修改费用。",
  },
  {
    question: "支持哪些付款方式？",
    answer:
      "我们支持微信支付、支付宝、银行转账等多种付款方式。一般采用分期付款模式：签约时支付50%定稿，确认设计方案后支付30%，最终交付验收后支付剩余20%。大额项目可以协商更灵活的付款方案。",
  },
  {
    question: "设计版权归谁所有？",
    answer:
      "所有设计作品在全额付款后，版权归客户（幼儿园方）所有。我们会提供完整的源文件和使用授权书。客户可以在授权范围内自由使用设计成果，包括但不限于印刷、展示、网络推广等商业用途。",
  },
  {
    question: "售后服务有哪些？",
    answer:
      "我们提供完善的售后保障：交付后30天内免费调整修改；1年内提供设计文件格式转换等技术支持；后续如有新的品牌设计需求，老客户可享受专属折扣。我们的客服团队随时为您解答疑问。",
  },
  {
    question: "服务流程是怎样的？",
    answer:
      "我们的服务流程分为四步：第一步，沟通需求——通过在线咨询或电话了解您的品牌需求和预算；第二步，方案设计——AI辅助+专业设计师快速输出创意方案供您选择；第三步，修改确认——根据您的反馈进行修改调整，直到满意；第四步，交付使用——交付完整源文件和使用授权，提供后续技术支持。",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            常见问题
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 28px)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-snug)",
            }}
          >
            关于有思网服务的常见问题解答
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section
        style={{
          padding: "var(--section-padding-y) var(--space-6)",
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
                borderTop: "1px solid var(--color-border)",
              }}
            >
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "var(--space-6) 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "var(--space-4)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 21,
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        flex: 1,
                      }}
                    >
                      {item.question}
                    </h3>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform var(--duration-normal) var(--easing-default)",
                        transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <line x1="8" y1="2" x2="8" y2="14" />
                        <line x1="2" y1="8" x2="14" y2="8" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    style={{
                      maxHeight: openIndex === index ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height var(--duration-slow) var(--easing-default)",
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
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <RevealOnScroll>
        <section
          style={{
            padding: "var(--space-20) var(--space-6)",
            background: "var(--color-bg-secondary)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 600,
              marginBottom: "var(--space-4)",
            }}
          >
            还有问题？
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
            我们的顾问随时为您解答更多疑问
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
            联系我们
          </Link>
        </section>
      </RevealOnScroll>

      <Footer />
    </>
  );
}
