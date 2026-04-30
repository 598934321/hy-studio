"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ipServices } from "@/data/ip";
import type { Service } from "@/data/ip";

function ServiceImage({
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

function HeroSection({ service }: { service: Service }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "var(--color-hero-bg)",
        overflow: "hidden",
        paddingTop: 44,
      }}
    >
      {/* 面包屑 */}
      <div
        style={{
          width: "100%",
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
          padding: "var(--space-6) var(--space-6) 0",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontSize: 12,
          }}
        >
          <Link
            href="/ip"
            style={{
              color: "rgba(245, 245, 247, 0.7)",
              textDecoration: "none",
            }}
          >
            IP服务
          </Link>
          <span style={{ color: "rgba(245, 245, 247, 0.4)" }}>/</span>
          <span style={{ color: "var(--color-text-on-dark)" }}>
            {service.name}
          </span>
        </nav>
      </div>

      {/* 主内容 */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "var(--space-10) var(--space-6) var(--space-16)",
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
            color: "var(--color-text-on-dark)",
            marginBottom: "var(--space-4)",
          }}
        >
          {service.name}
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 4vw, 24px)",
            fontWeight: 400,
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-4)",
            lineHeight: "var(--leading-snug)",
          }}
        >
          {service.tagline}
        </p>
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "var(--color-text-on-dark)",
            marginBottom: "var(--space-8)",
          }}
        >
          {service.price}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-4)",
            flexWrap: "wrap",
          }}
        >
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
            立即购买
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              padding: "0 32px",
              background: "transparent",
              color: "var(--color-text-link)",
              fontSize: 17,
              fontWeight: 500,
              borderRadius: "var(--radius-pill)",
              textDecoration: "none",
              border: "1px solid var(--color-text-link)",
              transition: "background var(--duration-fast)",
            }}
            className="hover:bg-[var(--color-cta)] hover:text-white"
          >
            预约咨询
          </Link>
        </div>
      </div>

      {/* Hero 图片占位 */}
      <div
        style={{
          width: "100%",
          maxWidth: "var(--content-wide-width)",
          margin: "0 auto",
          padding: "0 var(--space-6) var(--space-16)",
        }}
      >
        <ServiceImage
          src={service.heroImage}
          alt={service.name}
          aspectRatio="21/9"
          style={{ borderRadius: "var(--radius-xl)" }}
        />
      </div>
    </section>
  );
}

function FeaturesSection({ service }: { service: Service }) {
  return (
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
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              核心优势
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              {service.description}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-8)",
            }}
          >
            {service.features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  textAlign: "center",
                  padding: "var(--space-8)",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--color-bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto var(--space-6)",
                    fontSize: 28,
                  }}
                >
                  {feature.icon === "clock" && "⏱"}
                  {feature.icon === "refresh" && "🔄"}
                  {feature.icon === "shield" && "🛡"}
                  {feature.icon === "mic" && "🎤"}
                  {feature.icon === "pen" && "✏️"}
                  {feature.icon === "music" && "🎵"}
                  {feature.icon === "zap" && "⚡"}
                  {feature.icon === "layers" && "📐"}
                  {feature.icon === "headphones" && "🎧"}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 600,
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    color: "var(--color-text-secondary)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function IncludesSection({ service }: { service: Service }) {
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
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              服务内容
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              每一项都经过精心设计，确保品质
            </p>
          </div>
        </RevealOnScroll>

        {/* 主图占位 */}
        <RevealOnScroll>
          <div style={{ marginBottom: "var(--space-16)" }}>
            <ServiceImage
              src={`/images/services/${service.slug}-includes.webp`}
              alt={`${service.name} 服务内容`}
              aspectRatio="21/9"
            />
          </div>
        </RevealOnScroll>

        {/* 服务明细网格 */}
        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {service.includes.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-8)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--color-bg-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto var(--space-4)",
                    fontSize: 20,
                  }}
                >
                  {item.icon === "music" && "🎵"}
                  {item.icon === "bell" && "🔔"}
                  {item.icon === "moon" && "🌙"}
                  {item.icon === "activity" && "🎯"}
                  {item.icon === "radio" && "📻"}
                  {item.icon === "building" && "🏢"}
                  {item.icon === "instrument" && "🎹"}
                  {item.icon === "file" && "📄"}
                  {item.icon === "check" && "✅"}
                  {item.icon === "alert" && "📢"}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 600,
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {item.name}
                </h4>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.spec}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function SpecsSection({ service }: { service: Service }) {
  return (
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
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              服务规格
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              透明、清晰的服务标准
            </p>
          </div>
        </RevealOnScroll>

        {/* 规格图片占位 */}
        <RevealOnScroll>
          <div style={{ marginBottom: "var(--space-16)" }}>
            <ServiceImage
              src={`/images/services/${service.slug}-specs.webp`}
              alt={`${service.name} 服务规格`}
              aspectRatio="21/9"
            />
          </div>
        </RevealOnScroll>

        {/* 参数表 */}
        <RevealOnScroll>
          <div
            style={{
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {service.specs.map((spec, index) => (
              <div
                key={spec.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "var(--space-5) 0",
                  borderBottom:
                    index < service.specs.length - 1
                      ? "1px solid var(--color-divider)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontSize: 17,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {spec.label}
                </span>
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    textAlign: "right",
                  }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function CasesSection({ service }: { service: Service }) {
  if (service.relatedCases.length === 0) return null;

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
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              客户案例
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              来自真实客户的反馈
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {service.relatedCases.map((caseItem) => (
              <Link
                key={caseItem.id}
                href={`/cases/${caseItem.id}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition:
                    "transform var(--duration-normal) var(--easing-default), box-shadow var(--duration-normal) var(--easing-default)",
                }}
                className="hover:scale-[1.02] hover:shadow-[var(--shadow-hover)]"
              >
                {/* 案例图占位 */}
                <div
                  style={{
                    width: "100%",
                    height: 200,
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
                    <div style={{ marginBottom: 8 }}>{caseItem.coverImage}</div>
                    <div style={{ fontSize: 12 }}>案例封面图</div>
                  </div>
                </div>

                {/* 案例信息 */}
                <div
                  style={{
                    padding: "var(--space-6)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 600,
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {caseItem.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    {caseItem.kindergarten}
                  </p>
                  <p
                    style={{
                      fontSize: 17,
                      color: "var(--color-text-secondary)",
                      fontStyle: "italic",
                      marginBottom: "var(--space-4)",
                      lineHeight: "var(--leading-relaxed)",
                    }}
                  >
                    &ldquo;{caseItem.testimonial}&rdquo;
                  </p>
                  <span
                    style={{
                      color: "var(--color-text-link)",
                      fontSize: 17,
                    }}
                    className="link-arrow"
                  >
                    查看案例
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function RelatedServicesSection({ service }: { service: Service }) {
  return (
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
        <RevealOnScroll>
          <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              相关服务
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              搭配使用，效果更佳
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {service.relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.category}/${related.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: "var(--color-bg-secondary)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-8)",
                  textAlign: "center",
                  transition:
                    "transform var(--duration-normal) var(--easing-default), box-shadow var(--duration-normal) var(--easing-default)",
                }}
                className="hover:scale-[1.02] hover:shadow-[var(--shadow-hover)]"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--color-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto var(--space-4)",
                    fontSize: 20,
                  }}
                >
                  {related.icon === "music" && "🎵"}
                  {related.icon === "volume" && "🔊"}
                  {related.icon === "video" && "🎬"}
                  {related.icon === "star" && "⭐"}
                  {related.icon === "palette" && "🎨"}
                  {related.icon === "edit" && "✏️"}
                  {related.icon === "target" && "🎯"}
                  {related.icon === "award" && "🏆"}
                  {related.icon === "gift" && "🎁"}
                  {related.icon === "smartphone" && "📱"}
                  {related.icon === "code" && "💻"}
                  {related.icon === "layout" && "📐"}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 21,
                    fontWeight: 600,
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {related.name}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    color: "var(--color-text-secondary)",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {related.price}
                </p>
                <span
                  style={{
                    color: "var(--color-text-link)",
                    fontSize: 17,
                  }}
                  className="link-arrow"
                >
                  了解更多
                </span>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function StickyBottomBar({ service }: { service: Service }) {
  return (
    <div
      className="glass"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderTop: "1px solid var(--color-divider)",
        padding: "var(--space-3) var(--space-6)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 17,
              fontWeight: 600,
            }}
          >
            {service.name}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--color-text-secondary)",
            }}
          >
            {service.price}
          </div>
        </div>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              padding: "0 24px",
              background: "var(--color-cta)",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: "var(--radius-pill)",
              textDecoration: "none",
              transition: "background var(--duration-fast)",
            }}
            className="hover:bg-[var(--color-cta-hover)]"
          >
            立即购买
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              padding: "0 24px",
              background: "transparent",
              color: "var(--color-text-link)",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: "var(--radius-pill)",
              textDecoration: "none",
              border: "1px solid var(--color-text-link)",
              transition: "background var(--duration-fast)",
            }}
            className="hover:bg-[var(--color-cta)] hover:text-white"
          >
            预约咨询
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function IPDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = ipServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* Screen 1: Hero */}
      <HeroSection service={service} />

      {/* Screen 2: Features */}
      <RevealOnScroll>
        <FeaturesSection service={service} />
      </RevealOnScroll>

      {/* Screen 3: Includes */}
      <RevealOnScroll>
        <IncludesSection service={service} />
      </RevealOnScroll>

      {/* Screen 4: Specs */}
      <RevealOnScroll>
        <SpecsSection service={service} />
      </RevealOnScroll>

      {/* Screen 5: Cases */}
      <RevealOnScroll>
        <CasesSection service={service} />
      </RevealOnScroll>

      {/* Screen 6: Related Services */}
      <RevealOnScroll>
        <RelatedServicesSection service={service} />
      </RevealOnScroll>

      {/* 底部 CTA */}
      <RevealOnScroll>
        <section
          style={{
            padding: "var(--space-20) var(--space-6)",
            paddingBottom: "calc(var(--space-20) + 80px)",
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
            准备好开始了吗？
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
            预约免费咨询，专业顾问为您定制方案
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

      {/* Sticky Bottom Bar */}
      <StickyBottomBar service={service} />
    </>
  );
}
