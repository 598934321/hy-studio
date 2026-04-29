"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const missionCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI辅助设计",
    description: "结合人工智能技术与专业设计师经验，大幅提升设计效率与创意质量，让品牌设计更智能、更精准。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "专业交付",
    description: "资深设计团队全程把控，从创意构思到最终交付，确保每一个项目都达到专业品牌标准。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "价格透明",
    description: "所有服务明码标价，无隐形消费。让每一所幼儿园都能清楚了解投入，做出明智的品牌投资决策。",
  },
];

const teamMembers = [
  { name: "张明", role: "创始人 / CEO", initials: "张" },
  { name: "李晓", role: "创意总监", initials: "李" },
  { name: "王琳", role: "设计主管", initials: "王" },
  { name: "赵阳", role: "技术负责人", initials: "赵" },
];

export default function AboutPage() {
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
            关于我们
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 4vw, 28px)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-snug)",
            }}
          >
            用AI+专业设计，让每一所幼儿园都拥有品牌
          </p>
        </div>
      </section>

      {/* Mission Section */}
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
                我们的使命
              </h2>
              <p
                style={{
                  fontSize: 21,
                  color: "var(--color-text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                为幼儿园提供专业、高效、平价的品牌设计服务
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
              {missionCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    padding: "var(--space-10)",
                    background: "var(--color-bg)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow-card)",
                    transition: "box-shadow var(--duration-normal) var(--easing-default), transform var(--duration-normal) var(--easing-default)",
                  }}
                  className="hover:shadow-[var(--shadow-hover)] hover:-translate-y-1"
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "var(--space-6)",
                    }}
                  >
                    <div style={{ width: 28, height: 28, color: "var(--color-text-primary)" }}>
                      {card.icon}
                    </div>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 600,
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 17,
                      color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-relaxed)",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story Section */}
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
            <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 5vw, 40px)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-tight)",
                  marginBottom: "var(--space-4)",
                }}
              >
                有思网的故事
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-8)",
              }}
            >
              <p
                style={{
                  fontSize: 19,
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                有思网诞生于一个简单的观察：大多数幼儿园在品牌建设上面临两难困境——找大型设计公司费用高昂，找小工作室又难以保证质量。我们相信，每一所幼儿园都值得拥有专业的品牌形象，无论规模大小。
              </p>
              <p
                style={{
                  fontSize: 19,
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--leading-relaxed)",
                }}
              >
                通过将AI技术与专业设计流程相结合，有思网开创了一种全新的服务模式：用技术降低设计成本，用专业保障设计品质。我们的团队由资深品牌设计师、AI工程师和教育行业顾问组成，致力于为每一所幼儿园打造独特而专业的品牌形象，让品牌建设不再是大园的专属，而是每一所幼儿园都能享有的服务。
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Team Section */}
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
                我们的团队
              </h2>
              <p
                style={{
                  fontSize: 21,
                  color: "var(--color-text-secondary)",
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                资深团队，专业护航
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "var(--space-6)",
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  style={{
                    textAlign: "center",
                    padding: "var(--space-8)",
                    background: "var(--color-bg)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {/* Image Placeholder */}
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "var(--color-bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--space-5)",
                      fontFamily: "var(--font-display)",
                      fontSize: 40,
                      fontWeight: 600,
                      color: "var(--color-text-tertiary)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 21,
                      fontWeight: 600,
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {member.role}
                  </p>
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
            想了解更多？
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
            欢迎与我们联系，一起探讨幼儿园品牌建设的可能性
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
