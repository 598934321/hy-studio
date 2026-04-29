"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const tabs = ["全部", "品牌洞察", "行业趋势", "设计灵感"];

const articles = [
  {
    id: 1,
    category: "品牌洞察",
    title: "如何打造令人难忘的幼儿园品牌形象",
    excerpt: "品牌不仅是 logo，更是家长对幼儿园的第一印象和长期认知。本文深入探讨品牌建设的核心要素。",
    date: "2026-04-15",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    category: "行业趋势",
    title: "2026 幼教行业设计趋势报告",
    excerpt: "从极简主义到自然元素，了解今年最受欢迎的幼教空间设计趋势，为您的幼儿园注入新活力。",
    date: "2026-04-08",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    category: "设计灵感",
    title: "色彩心理学在幼儿园设计中的应用",
    excerpt: "不同的色彩如何影响儿童的情绪和学习？探索色彩心理学在教育空间设计中的实践应用。",
    date: "2026-03-28",
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    category: "品牌洞察",
    title: "家长选择幼儿园时最关注的 5 个品牌要素",
    excerpt: "基于上千份调研数据，我们总结了家长在选择幼儿园时最看重的品牌维度，助您精准定位。",
    date: "2026-03-20",
    image: "/placeholder.jpg",
  },
  {
    id: 5,
    category: "行业趋势",
    title: "数字化时代下的幼儿园品牌传播策略",
    excerpt: "短视频、社交媒体、私域流量……数字化浪潮下，幼儿园品牌传播正在经历深刻变革。",
    date: "2026-03-12",
    image: "/placeholder.jpg",
  },
  {
    id: 6,
    category: "设计灵感",
    title: "10 个优秀的幼儿园 VI 设计案例赏析",
    excerpt: "精选国内外 10 个优秀幼儿园视觉识别系统案例，解析其设计理念与品牌表达。",
    date: "2026-03-05",
    image: "/placeholder.jpg",
  },
];

export default function MagazinePage() {
  const [activeTab, setActiveTab] = useState("全部");

  const filtered =
    activeTab === "全部"
      ? articles
      : articles.filter((a) => a.category === activeTab);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section
          style={{
            padding: "120px 24px 80px",
            textAlign: "center",
            background: "var(--color-bg)",
          }}
        >
          <RevealOnScroll>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-hero)",
                fontWeight: "var(--weight-bold)",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-4)",
              }}
            >
              专刊
            </h1>
            <p
              style={{
                fontFamily: "var(--font-text)",
                fontSize: "var(--text-callout)",
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-normal)",
              }}
            >
              品牌洞察、行业趋势、设计灵感
            </p>
          </RevealOnScroll>
        </section>

        {/* Filter Tabs */}
        <section
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-2)",
              marginBottom: "var(--space-12)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  fontSize: "var(--text-footnote)",
                  fontFamily: "var(--font-text)",
                  fontWeight:
                    activeTab === tab
                      ? "var(--weight-semibold)"
                      : "var(--weight-regular)",
                  background:
                    activeTab === tab
                      ? "var(--color-text-primary)"
                      : "var(--color-bg-secondary)",
                  color:
                    activeTab === tab
                      ? "var(--color-bg)"
                      : "var(--color-text-primary)",
                  cursor: "pointer",
                  transition:
                    "background var(--duration-fast), color var(--duration-fast)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Article Grid */}
        <section
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
            padding: "0 24px 120px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "var(--space-8)",
            }}
          >
            {filtered.map((article) => (
              <RevealOnScroll key={article.id}>
                <a
                  href="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    background: "var(--color-bg)",
                    boxShadow: "var(--shadow-card)",
                    transition:
                      "box-shadow var(--duration-normal) var(--easing-default), transform var(--duration-normal) var(--easing-default)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "var(--shadow-hover)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "var(--shadow-card)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  {/* Image Placeholder */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      background: "var(--color-bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-text-tertiary)"
                      strokeWidth="1"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>

                  <div style={{ padding: "var(--space-5) var(--space-5) var(--space-6)" }}>
                    {/* Category Tag */}
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "var(--text-caption)",
                        fontFamily: "var(--font-text)",
                        fontWeight: "var(--weight-medium)",
                        color: "var(--color-cta)",
                        background: "rgba(0, 102, 204, 0.08)",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-pill)",
                        marginBottom: "var(--space-3)",
                      }}
                    >
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-head)",
                        fontWeight: "var(--weight-semibold)",
                        lineHeight: "var(--leading-snug)",
                        color: "var(--color-text-primary)",
                        marginBottom: "var(--space-2)",
                      }}
                    >
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: "var(--text-footnote)",
                        fontFamily: "var(--font-text)",
                        color: "var(--color-text-secondary)",
                        lineHeight: "var(--leading-relaxed)",
                        marginBottom: "var(--space-3)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Date */}
                    <time
                      style={{
                        fontSize: "var(--text-caption)",
                        fontFamily: "var(--font-text)",
                        color: "var(--color-text-tertiary)",
                      }}
                    >
                      {article.date}
                    </time>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
