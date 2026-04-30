"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { cases } from "@/data/cases";

const categoryLabels: Record<string, string> = {
  brand: "品牌",
  visual: "视觉",
  media: "音乐",
  ip: "IP",
};

function CaseImage({
  src,
  alt,
  aspectRatio,
  style,
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspectRatio || "16/9",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default function CaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const caseItem = cases.find((c) => c.id === id);

  if (!caseItem) {
    notFound();
  }

  const categoryLabel =
    categoryLabels[caseItem.category] || caseItem.category;
  const relatedCases = cases
    .filter((c) => c.id !== caseItem.id)
    .slice(0, 2);

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div
        style={{
          paddingTop: 56,
          paddingBottom: "var(--space-4)",
          paddingLeft: "var(--space-6)",
          paddingRight: "var(--space-6)",
          background: "var(--color-bg)",
        }}
      >
        <nav
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontSize: 14,
            color: "var(--color-text-secondary)",
          }}
        >
          <Link
            href="/cases"
            style={{
              color: "var(--color-text-link)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            案例展示
          </Link>
          <span style={{ color: "var(--color-text-tertiary)" }}>/</span>
          <span style={{ color: "var(--color-text-primary)" }}>
            {caseItem.title}
          </span>
        </nav>
      </div>

      {/* Hero Section */}
      <section
        style={{
          background: "var(--color-hero-bg)",
          padding: "var(--space-16) var(--space-6) var(--space-20)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
          }}
        >
          {/* Large Cover Image */}
          <CaseImage
            src={caseItem.coverImage}
            alt={caseItem.title}
            aspectRatio="21/9"
            style={{
              borderRadius: "var(--radius-xl)",
              marginBottom: "var(--space-10)",
            }}
          />

          {/* Title and Info */}
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--color-text-on-dark)",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--radius-pill)",
                marginBottom: "var(--space-4)",
              }}
            >
              {categoryLabel}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 700,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
                color: "var(--color-text-on-dark)",
                marginBottom: "var(--space-3)",
              }}
            >
              {caseItem.title}
            </h1>
            <p
              style={{
                fontSize: 21,
                color: "rgba(245, 245, 247, 0.7)",
                fontWeight: 400,
              }}
            >
              {caseItem.kindergarten}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <RevealOnScroll>
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
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 32px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-6)",
              }}
            >
              项目概述
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-relaxed)",
                marginBottom: "var(--space-8)",
              }}
            >
              {caseItem.description}
            </p>

            {/* Services Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-2)",
                marginBottom: "var(--space-4)",
              }}
            >
              {caseItem.services.map((service) => (
                <span
                  key={service}
                  style={{
                    padding: "6px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--color-text-primary)",
                    background: "var(--color-bg-secondary)",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>

            {/* Delivery Days */}
            <p
              style={{
                fontSize: 14,
                color: "var(--color-text-secondary)",
              }}
            >
              交付周期：{caseItem.deliveryDays} 天
            </p>
          </div>
        </section>
      </RevealOnScroll>

      {/* Gallery Section */}
      <RevealOnScroll>
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
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 32px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                textAlign: "center",
                marginBottom: "var(--space-12)",
              }}
            >
              作品展示
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--space-4)",
              }}
            >
              {caseItem.gallery.map((img, index) => (
                <CaseImage
                  key={img}
                  src={img}
                  alt={`${caseItem.title} 展示图 ${index + 1}`}
                  aspectRatio="4/3"
                />
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Testimonial Section */}
      <RevealOnScroll>
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
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 80,
                color: "var(--color-text-tertiary)",
                lineHeight: 1,
                marginBottom: "var(--space-6)",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: "clamp(18px, 3vw, 24px)",
                color: "var(--color-text-primary)",
                lineHeight: "var(--leading-relaxed)",
                fontStyle: "italic",
                marginBottom: "var(--space-8)",
              }}
            >
              {caseItem.testimonial}
            </p>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 17,
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-1)",
                }}
              >
                {caseItem.testimonialAuthor}
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Related Cases Section */}
      <RevealOnScroll>
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
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 32px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                textAlign: "center",
                marginBottom: "var(--space-12)",
              }}
            >
              更多案例
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--space-6)",
              }}
            >
              {relatedCases.map((related) => {
                const relCategoryLabel =
                  categoryLabels[related.category] || related.category;
                return (
                  <Link
                    key={related.id}
                    href={`/cases/${related.id}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border-light)",
                      transition:
                        "box-shadow var(--duration-normal) var(--easing-default)",
                    }}
                    className="hover:shadow-[var(--shadow-hover)]"
                  >
                    {/* Cover Placeholder */}
                    <div
                      className="img-scale"
                      style={{
                        width: "100%",
                        aspectRatio: "16/10",
                        background: "var(--color-bg-tertiary)",
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
                          {related.coverImage}
                        </div>
                        <div style={{ fontSize: 12 }}>案例封面图</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "var(--space-5)" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--color-text-link)",
                          background: "var(--color-bg-secondary)",
                          borderRadius: "var(--radius-pill)",
                          marginBottom: "var(--space-2)",
                        }}
                      >
                        {relCategoryLabel}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 20,
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                          marginBottom: "var(--space-1)",
                          lineHeight: "var(--leading-snug)",
                        }}
                      >
                        {related.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        {related.kindergarten}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* CTA Section */}
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
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 600,
              marginBottom: "var(--space-4)",
            }}
          >
            喜欢这个案例？
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
            预约免费咨询，让我们为您的幼儿园打造专属品牌方案
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
