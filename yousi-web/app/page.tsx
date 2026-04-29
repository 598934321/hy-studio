"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "服务",
    description: "品牌策略、视觉设计、内容创作，一站式品牌服务",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "IP",
    description: "专属IP形象设计、授权运营、衍生品开发",
    href: "/ip",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "音乐",
    description: "商业配乐、园歌制作、音效设计",
    href: "/music",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "视频",
    description: "企业宣传片、产品广告、短视频制作",
    href: "/video",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "案例",
    description: "精选幼儿园品牌设计案例展示",
    href: "/cases",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "技术支持",
    description: "网站开发、小程序开发、系统定制",
    href: "/tech",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "专刊",
    description: "品牌洞察、行业趋势、设计灵感",
    href: "/magazine",
  },
];

const processSteps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "沟通需求",
    description: "在线下单或商务咨询，了解您的品牌需求",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "方案设计",
    description: "AI辅助+专业设计师，快速输出创意方案",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "修改确认",
    description: "不满意免费修改，直到您满意为止",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "交付使用",
    description: "交付完整源文件，永久商用授权",
  },
];

const testimonials = [
  {
    content: "效果超出预期！从Logo到空间设计，每一步都很专业。孩子们特别喜欢新的品牌形象。",
    author: "张园长",
    kindergarten: "成都阳光幼儿园",
  },
  {
    content: "专业又高效，3天就出了初稿，改了两次就定稿了。比之前找的设计公司快多了。",
    author: "李园长",
    kindergarten: "成都未来星幼儿园",
  },
  {
    content: "AI辅助设计真的很厉害，价格比传统设计公司便宜一半，效果一点不差。",
    author: "王园长",
    kindergarten: "成都蓝天幼儿园",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg)",
          overflow: "hidden",
        }}
      >
        {/* Content */}
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
            让每一所幼儿园
            <br />
            都拥有专业品牌
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 28px)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              marginBottom: "var(--space-10)",
              lineHeight: "var(--leading-snug)",
            }}
          >
            AI辅助设计，专业交付，价格透明
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-6)",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/services"
              style={{
                color: "var(--color-text-link)",
                fontSize: 21,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
              className="link-arrow"
            >
              浏览服务
            </Link>
            <Link
              href="/packages"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 24px",
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
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <RevealOnScroll>
        <section
          style={{
            background: "var(--color-bg-secondary)",
            padding: "var(--space-10) var(--space-6)",
          }}
        >
          <div
            style={{
              maxWidth: "var(--content-max-width)",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-8)",
              textAlign: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                100+
              </div>
              <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                服务幼儿园
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                98%
              </div>
              <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                好评率
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-2)",
                }}
              >
                3天
              </div>
              <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                平均出稿时间
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Service Categories */}
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
                一站式品牌服务
              </h2>
              <p
                style={{
                  fontSize: 21,
                  color: "var(--color-text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                从品牌策略到视觉设计，从内容创作到技术支持
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--space-6)",
              }}
            >
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process Section */}
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
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--space-8)",
              }}
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  style={{
                    textAlign: "center",
                    padding: "var(--space-8)",
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "var(--color-bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--space-6)",
                    }}
                  >
                    <div style={{ width: 32, height: 32, color: "var(--color-text-primary)" }}>
                      {step.icon}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                      fontWeight: 500,
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    步骤 {index + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 600,
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Testimonials */}
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
                客户评价
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
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  style={{
                    padding: "var(--space-8)",
                    background: "var(--color-bg-secondary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 40,
                      color: "var(--color-text-tertiary)",
                      lineHeight: 1,
                      marginBottom: "var(--space-4)",
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
                    {testimonial.content}
                  </p>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 17 }}>{testimonial.author}</div>
                    <div style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
                      {testimonial.kindergarten}
                    </div>
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
            准备好升级您的幼儿园品牌了吗？
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
    </>
  );
}
