"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { cases } from "@/data/cases";

const filters = [
  { key: "all", label: "全部" },
  { key: "brand", label: "品牌" },
  { key: "visual", label: "视觉" },
  { key: "media", label: "音乐" },
  { key: "ip", label: "IP" },
];

export default function CasesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCases =
    activeFilter === "all"
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg-dark)",
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
            maxWidth: 800,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 8vw, 56px)",
              fontWeight: 700,
              letterSpacing: "var(--tracking-tight)",
              lineHeight: "var(--leading-tight)",
              color: "var(--color-text-on-dark)",
              marginBottom: "var(--space-4)",
            }}
          >
            案例展示
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 24px)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-snug)",
            }}
          >
            来自真实幼儿园的品牌升级故事
          </p>
        </div>

        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            background: "linear-gradient(to top, rgba(29,29,31,0.9) 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </section>

      {/* Filter Bar */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "var(--space-8) var(--space-6)",
          position: "sticky",
          top: 44,
          zIndex: 50,
          borderBottom: "1px solid var(--color-divider)",
        }}
        className="glass"
      >
        <div
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-3)",
            flexWrap: "wrap",
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              style={{
                padding: "10px 24px",
                fontSize: 15,
                fontWeight: activeFilter === filter.key ? 600 : 400,
                color:
                  activeFilter === filter.key
                    ? "#FFFFFF"
                    : "var(--color-text-primary)",
                background:
                  activeFilter === filter.key
                    ? "var(--color-text-primary)"
                    : "var(--color-bg-secondary)",
                border: "none",
                borderRadius: "var(--radius-pill)",
                cursor: "pointer",
                transition: "all var(--duration-fast) var(--easing-default)",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Cases Grid */}
      <section
        style={{
          padding: "var(--section-padding-y) var(--space-6)",
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
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--space-6)",
              }}
            >
              {filteredCases.map((caseItem) => {
                const categoryLabel =
                  filters.find((f) => f.key === caseItem.category)?.label ||
                  caseItem.category;
                return (
                  <Link
                    key={caseItem.id}
                    href={`/cases/${caseItem.id}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border-light)",
                      transition:
                        "box-shadow var(--duration-normal) var(--easing-default), transform var(--duration-normal) var(--easing-default)",
                    }}
                    className="hover:shadow-[var(--shadow-hover)]"
                  >
                    {/* Cover Image Placeholder */}
                    <div
                      className="img-scale"
                      style={{
                        width: "100%",
                        aspectRatio: "16/10",
                        background: "var(--color-bg-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "var(--color-text-tertiary)",
                          fontSize: 14,
                          textAlign: "center",
                        }}
                      >
                        <div style={{ marginBottom: 8, fontWeight: 600 }}>
                          {caseItem.coverImage}
                        </div>
                        <div style={{ fontSize: 12 }}>案例封面图</div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: "var(--space-6)" }}>
                      {/* Category Tag */}
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--color-text-link)",
                          background: "var(--color-bg-secondary)",
                          borderRadius: "var(--radius-pill)",
                          marginBottom: "var(--space-3)",
                        }}
                      >
                        {categoryLabel}
                      </span>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 22,
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                          marginBottom: "var(--space-2)",
                          lineHeight: "var(--leading-snug)",
                        }}
                      >
                        {caseItem.title}
                      </h3>

                      {/* Kindergarten Name */}
                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--color-text-secondary)",
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        {caseItem.kindergarten}
                      </p>

                      {/* Testimonial Quote */}
                      <p
                        style={{
                          fontSize: 15,
                          color: "var(--color-text-secondary)",
                          lineHeight: "var(--leading-relaxed)",
                          fontStyle: "italic",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        &ldquo;{caseItem.testimonial}&rdquo;
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* Empty state */}
          {filteredCases.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "var(--space-20) 0",
                color: "var(--color-text-secondary)",
                fontSize: 17,
              }}
            >
              暂无该分类的案例
            </div>
          )}
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
            想要类似的品牌升级？
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
            预约免费咨询，让我们为您的幼儿园量身定制品牌方案
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

      <Footer />
    </>
  );
}
