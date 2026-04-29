"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { techServices } from "@/data/tech";

function ProductSubNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="glass"
      style={{
        position: "fixed",
        top: 44,
        left: 0,
        right: 0,
        zIndex: 90,
        borderBottom: "1px solid var(--color-divider)",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        transition: "opacity var(--duration-normal) var(--easing-default)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
          padding: "0 var(--space-6)",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 21,
            fontWeight: 600,
          }}
        >
          技术支持
        </span>
        <nav style={{ display: "flex", gap: "var(--space-8)" }}>
          <a
            href="#overview"
            style={{
              fontSize: 12,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            概述
          </a>
          <a
            href="#overview"
            style={{
              fontSize: 12,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            服务
          </a>
          <a
            href="#specs"
            style={{
              fontSize: 12,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            流程
          </a>
          <Link
            href="/contact"
            style={{
              fontSize: 12,
              color: "var(--color-text-link)",
              textDecoration: "none",
            }}
          >
            购买
          </Link>
        </nav>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
          技术支持
        </h1>
        <p
          style={{
            fontSize: "clamp(21px, 4vw, 32px)",
            fontWeight: 400,
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-4)",
            lineHeight: "var(--leading-snug)",
          }}
        >
          数字化赋能幼儿园管理
        </p>
        <p
          style={{
            fontSize: "clamp(17px, 3vw, 24px)",
            fontWeight: 400,
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--space-8)",
          }}
        >
          网站开发、小程序开发、系统定制
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            marginBottom: "var(--space-16)",
          }}
        >
          <Link
            href="#overview"
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
            浏览所有服务
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

      {/* Hero 图片占位 - 全宽 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, rgba(29,29,31,0.9) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        <div
          style={{
            color: "var(--color-text-tertiary)",
            fontSize: 14,
            textAlign: "center",
            opacity: 0.5,
          }}
        >
          <div style={{ marginBottom: 8 }}>IMG-TECH-HERO</div>
          <div style={{ fontSize: 12 }}>技术品类 Hero 全屏背景</div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({
  service,
  index,
}: {
  service: (typeof techServices)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <section
      style={{
        padding: "var(--section-padding-y) 0",
        background: index === 0 ? "var(--color-bg)" : "var(--color-bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
          padding: "0 var(--space-6)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-16)",
          alignItems: "center",
        }}
      >
        {/* 文字 */}
        <div style={{ order: isEven ? 1 : 2 }}>
          <RevealOnScroll>
            <div
              style={{
                fontSize: 14,
                color: "var(--color-text-secondary)",
                fontWeight: 500,
                textTransform: "uppercase" as const,
                letterSpacing: "var(--tracking-wide)",
                marginBottom: "var(--space-3)",
              }}
            >
              {service.slug === "web-dev"
                ? "网站开发"
                : service.slug === "mini-program"
                ? "小程序开发"
                : "系统定制"}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              {service.name}
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-relaxed)",
                marginBottom: "var(--space-6)",
              }}
            >
              {service.tagline}
            </p>
            <p
              style={{
                fontSize: 17,
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-relaxed)",
                marginBottom: "var(--space-8)",
              }}
            >
              {service.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-6)",
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                {service.price}
              </span>
              <Link
                href={`/tech/${service.slug}`}
                style={{
                  color: "var(--color-text-link)",
                  fontSize: 21,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                className="link-arrow"
              >
                了解更多
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* 图片 */}
        <div style={{ order: isEven ? 2 : 1 }}>
          <RevealOnScroll>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/3",
                background: "var(--color-bg-tertiary)",
                borderRadius: "var(--radius-xl)",
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
                <div style={{ marginBottom: 8 }}>{service.heroImage}</div>
                <div style={{ fontSize: 12 }}>{service.name} 主视觉</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    { number: "30+", label: "技术方案", description: "覆盖网站、小程序、系统定制" },
    { number: "99.9%", label: "稳定性", description: "全年高可用保障" },
    { number: "98%", label: "好评率", description: "客户满意度" },
    { number: "7×24", label: "技术支持", description: "全天候技术保障" },
  ];

  return (
    <section
      style={{
        padding: "var(--section-padding-y) var(--space-6)",
        background: "var(--color-bg-dark)",
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
                color: "var(--color-text-on-dark)",
                marginBottom: "var(--space-4)",
              }}
            >
              为什么选择我们
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-8)",
              textAlign: "center",
            }}
          >
            {highlights.map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(40px, 6vw, 56px)",
                    fontWeight: 700,
                    color: "var(--color-text-on-dark)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {item.number}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--color-text-on-dark)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function FullBleedImage({ id, label }: { id: string; label: string }) {
  return (
    <section
      style={{
        width: "100%",
        height: "60vh",
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
        <div style={{ marginBottom: 8 }}>{id}</div>
        <div style={{ fontSize: 12 }}>{label}</div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: "01", title: "需求沟通", description: "深入了解您的业务需求和期望目标" },
    { step: "02", title: "方案设计", description: "技术顾问为您量身定制解决方案" },
    { step: "03", title: "开发迭代", description: "敏捷开发，阶段性交付与反馈" },
    { step: "04", title: "上线运维", description: "部署上线，提供持续技术支持" },
  ];

  return (
    <section
      id="specs"
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
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-tight)",
                marginBottom: "var(--space-4)",
              }}
            >
              服务流程
            </h2>
            <p
              style={{
                fontSize: 21,
                color: "var(--color-text-secondary)",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              简单四步，轻松完成数字化升级
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-1)",
            }}
          >
            {steps.map((item) => (
              <div
                key={item.step}
                style={{
                  padding: "var(--space-8)",
                  background: "var(--color-bg-secondary)",
                  borderRadius: "var(--radius-lg)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 56,
                    fontWeight: 700,
                    color: "var(--color-text-tertiary)",
                    lineHeight: 1,
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 600,
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    color: "var(--color-text-secondary)",
                    lineHeight: "var(--leading-relaxed)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      content: "网站上线后咨询量提升了40%，家长都说看着很专业。",
      author: "张园长",
      kindergarten: "成都启明星幼儿园",
    },
    {
      content: "小程序家长使用率超过95%，家园沟通效率大幅提升。",
      author: "李园长",
      kindergarten: "成都蓝天幼儿园",
    },
    {
      content: "管理系统上线后老师工作量明显减轻，运营效率提升了60%。",
      author: "王园长",
      kindergarten: "成都未来星教育集团",
    },
  ];

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
              客户评价
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-6)",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  padding: "var(--space-8)",
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <div
                  style={{
                    fontSize: 56,
                    color: "var(--color-text-tertiary)",
                    lineHeight: 1,
                    marginBottom: "var(--space-4)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: 17,
                    color: "var(--color-text-primary)",
                    lineHeight: "var(--leading-relaxed)",
                    marginBottom: "var(--space-6)",
                    fontStyle: "italic",
                  }}
                >
                  {t.content}
                </p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 17 }}>{t.author}</div>
                  <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                    {t.kindergarten}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity var(--duration-normal) var(--easing-default)",
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
            技术支持
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--color-text-secondary)",
            }}
          >
            ¥5,800 起
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
            立即咨询
          </Link>
          <Link
            href="#overview"
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
            浏览服务
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TechPage() {
  return (
    <>
      <Header />
      <ProductSubNav />

      {/* Screen 1: Hero - 全屏 */}
      <HeroSection />

      {/* Screen 2-4: 三个服务，交替布局 */}
      <div id="overview">
        {techServices.map((service, index) => (
          <FeatureSection key={service.slug} service={service} index={index} />
        ))}
      </div>

      {/* 全宽图片分隔 */}
      <FullBleedImage id="IMG-TECH-MID" label="技术方案场景全宽图" />

      {/* Screen 5: 数据亮点 - 深色背景 */}
      <HighlightsSection />

      {/* Screen 6: 服务流程 */}
      <ProcessSection />

      {/* Screen 7: 客户评价 */}
      <TestimonialsSection />

      {/* 底部 CTA */}
      <RevealOnScroll>
        <section
          style={{
            padding: "var(--space-20) var(--space-6)",
            paddingBottom: "calc(var(--space-20) + 80px)",
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
            准备好数字化升级了吗？
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
            预约免费咨询，技术顾问为您定制方案
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
      <StickyBottomBar />
    </>
  );
}
