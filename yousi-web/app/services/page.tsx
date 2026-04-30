"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { servicesServices } from "@/data/services";

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
          品牌服务
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
        background: "var(--color-hero-bg)",
        overflow: "hidden",
        paddingTop: 44,
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 3,
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
          品牌服务
        </h1>
        <p
          style={{
            fontSize: "clamp(21px, 4vw, 32px)",
            fontWeight: 400,
            color: "rgba(245, 245, 247, 0.7)",
            marginBottom: "var(--space-4)",
            lineHeight: "var(--leading-snug)",
          }}
        >
          让每一所幼儿园都拥有专业品牌
        </p>
        <p
          style={{
            fontSize: "clamp(17px, 3vw, 24px)",
            fontWeight: 400,
            color: "rgba(245, 245, 247, 0.5)",
            marginBottom: "var(--space-8)",
          }}
        >
          品牌策略、视觉设计、内容创作，一站式解决方案
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

      {/* Hero 图片 - 全宽 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, var(--color-hero-bg) 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
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
        <img
          src="/images/hero/services-hero.webp"
          alt="品牌服务"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

function FeatureSection({
  service,
  index,
}: {
  service: (typeof servicesServices)[0];
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
              {service.slug === "brand-strategy"
                ? "品牌策略"
                : service.slug === "visual-design"
                ? "视觉设计"
                : "内容创作"}
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
                href={`/services/${service.slug}`}
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
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
              }}
            >
              <img
                src={service.heroImage}
                alt={service.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    { number: "100+", label: "服务幼儿园", description: "成都及周边地区" },
    { number: "50+", label: "品牌升级", description: "成功案例" },
    { number: "98%", label: "好评率", description: "客户满意度" },
    { number: "3天", label: "平均出稿", description: "快速响应交付" },
  ];

  return (
    <section
      style={{
        padding: "var(--section-padding-y) var(--space-6)",
        background: "var(--color-hero-bg)",
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
                    color: "rgba(245, 245, 247, 0.5)",
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

function FullBleedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <section
      style={{
        width: "100%",
        height: "60vh",
        position: "relative",
        overflow: "hidden",
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
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: "01", title: "沟通需求", description: "在线下单或商务咨询，了解您的品牌需求" },
    { step: "02", title: "方案设计", description: "AI辅助+专业设计师，快速输出创意方案" },
    { step: "03", title: "修改确认", description: "不满意免费修改，直到您满意为止" },
    { step: "04", title: "交付使用", description: "交付完整源文件，永久商用授权" },
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
              简单四步，轻松完成品牌升级
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
      content: "品牌升级后，家长咨询量明显增加，招生效果超出预期！",
      author: "张园长",
      kindergarten: "成都阳光幼儿园",
    },
    {
      content: "专业团队设计的VI系统非常棒，幼儿园形象焕然一新。",
      author: "李园长",
      kindergarten: "成都未来星幼儿园",
    },
    {
      content: "从品牌策略到落地执行，全程都很省心，强烈推荐！",
      author: "王园长",
      kindergarten: "成都彩虹幼儿园",
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
            品牌服务
          </div>
          <div
            style={{
              fontSize: 14,
              color: "var(--color-text-secondary)",
            }}
          >
            ¥1,980 起
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

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ProductSubNav />

      {/* Screen 1: Hero - 全屏 */}
      <HeroSection />

      {/* Screen 2-4: 三个服务，交替布局 */}
      <div id="overview">
        {servicesServices.map((service, index) => (
          <FeatureSection key={service.slug} service={service} index={index} />
        ))}
      </div>

      {/* 全宽图片分隔 */}
      <FullBleedImage src="/images/hero/services-mid.webp" alt="品牌服务场景" />

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
            准备好升级幼儿园品牌了吗？
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
            预约免费咨询，专业顾问为您定制品牌方案
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
