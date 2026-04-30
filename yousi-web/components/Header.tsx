"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type PanelType = "nav" | "search" | "bag" | null;

interface NavChild {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  explore: { title: string; items: NavChild[] };
  shop: { title: string; items: NavChild[] };
  related: { title: string; items: NavChild[] };
}

const navItems: NavItem[] = [
  {
    name: "服务",
    href: "/services",
    explore: {
      title: "探索服务",
      items: [
        { name: "品牌策略", href: "/services/brand-strategy" },
        { name: "视觉设计", href: "/services/visual-design" },
        { name: "内容创作", href: "/services/content-creation" },
      ],
    },
    shop: {
      title: "选购服务",
      items: [
        { name: "Logo设计", href: "/services/visual-design" },
        { name: "VI系统", href: "/services/visual-design" },
        { name: "空间设计", href: "/services/visual-design" },
        { name: "包装设计", href: "/services/visual-design" },
      ],
    },
    related: {
      title: "服务相关",
      items: [
        { name: "服务流程", href: "/faq#process" },
        { name: "价格方案", href: "/packages" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
  {
    name: "IP",
    href: "/ip",
    explore: {
      title: "探索IP",
      items: [
        { name: "IP形象设计", href: "/ip/ip-design" },
        { name: "IP授权运营", href: "/ip/ip-licensing" },
        { name: "衍生品开发", href: "/ip/ip-merchandise" },
      ],
    },
    shop: {
      title: "选购IP",
      items: [
        { name: "卡通形象", href: "/ip/ip-design" },
        { name: "吉祥物", href: "/ip/ip-design" },
        { name: "表情包", href: "/ip/ip-design" },
        { name: "IP周边", href: "/ip/ip-merchandise" },
      ],
    },
    related: {
      title: "IP相关",
      items: [
        { name: "IP案例", href: "/cases?category=ip" },
        { name: "授权说明", href: "/faq#ip-license" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
  {
    name: "音乐",
    href: "/music",
    explore: {
      title: "探索音乐",
      items: [
        { name: "商业配乐", href: "/music/commercial-music" },
        { name: "音乐制作", href: "/music/music-production" },
        { name: "音效设计", href: "/music/sound-design" },
      ],
    },
    shop: {
      title: "选购音乐",
      items: [
        { name: "主题曲", href: "/music/music-production" },
        { name: "园歌", href: "/music/music-production" },
        { name: "企业歌", href: "/music/music-production" },
        { name: "铃声", href: "/music/music-production" },
        { name: "广播片头", href: "/music/sound-design" },
        { name: "活动音效", href: "/music/sound-design" },
      ],
    },
    related: {
      title: "音乐相关",
      items: [
        { name: "试听案例", href: "/cases?category=music" },
        { name: "版权说明", href: "/faq#copyright" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
  {
    name: "视频",
    href: "/video",
    explore: {
      title: "探索视频",
      items: [
        { name: "企业宣传片", href: "/video/corporate-video" },
        { name: "产品广告", href: "/video/product-ad" },
        { name: "短视频制作", href: "/video/short-video" },
      ],
    },
    shop: {
      title: "选购视频",
      items: [
        { name: "品牌形象片", href: "/video/corporate-video" },
        { name: "招生宣传片", href: "/video/corporate-video" },
        { name: "活动纪录", href: "/video/corporate-video" },
        { name: "抖音视频", href: "/video/short-video" },
        { name: "视频号", href: "/video/short-video" },
      ],
    },
    related: {
      title: "视频相关",
      items: [
        { name: "观看案例", href: "/cases?category=video" },
        { name: "拍摄流程", href: "/faq#video-process" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
  {
    name: "案例",
    href: "/cases",
    explore: {
      title: "探索案例",
      items: [
        { name: "品牌全案", href: "/cases?category=brand" },
        { name: "视觉设计", href: "/cases?category=visual" },
        { name: "音乐视频", href: "/cases?category=media" },
      ],
    },
    shop: {
      title: "案例分类",
      items: [
        { name: "幼儿园案例", href: "/cases?type=kindergarten" },
        { name: "托育机构", href: "/cases?type=nursery" },
        { name: "教育品牌", href: "/cases?type=education" },
      ],
    },
    related: {
      title: "案例相关",
      items: [
        { name: "提交需求", href: "/contact" },
        { name: "服务流程", href: "/faq#process" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
  {
    name: "技术支持",
    href: "/tech",
    explore: {
      title: "探索技术",
      items: [
        { name: "网站开发", href: "/tech/web-dev" },
        { name: "小程序开发", href: "/tech/mini-program" },
        { name: "系统定制", href: "/tech/system-custom" },
      ],
    },
    shop: {
      title: "选购技术",
      items: [
        { name: "官网建设", href: "/tech/web-dev" },
        { name: "招生页面", href: "/tech/web-dev" },
        { name: "微信小程序", href: "/tech/mini-program" },
        { name: "管理系统", href: "/tech/system-custom" },
      ],
    },
    related: {
      title: "技术相关",
      items: [
        { name: "技术案例", href: "/cases?category=tech" },
        { name: "技术文档", href: "/faq#tech-docs" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
  {
    name: "专刊",
    href: "/magazine",
    explore: {
      title: "探索专刊",
      items: [
        { name: "品牌洞察", href: "/magazine?category=insights" },
        { name: "行业趋势", href: "/magazine?category=trends" },
        { name: "设计灵感", href: "/magazine?category=inspiration" },
      ],
    },
    shop: {
      title: "专刊内容",
      items: [
        { name: "品牌策略", href: "/magazine?category=strategy" },
        { name: "视觉设计", href: "/magazine?category=visual" },
        { name: "园所管理", href: "/magazine?category=management" },
        { name: "招生营销", href: "/magazine?category=marketing" },
      ],
    },
    related: {
      title: "专刊相关",
      items: [
        { name: "订阅专刊", href: "/contact" },
        { name: "投稿指南", href: "/contact" },
        { name: "常见问题", href: "/faq" },
        { name: "联系我们", href: "/contact" },
      ],
    },
  },
];

function HeaderInner() {
  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveNav, setMobileActiveNav] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout>(null);
  // Block Safari's auto-fired mouseenter after remount
  const suppressRef = useRef(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      suppressRef.current = false;
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleNavEnter = (name: string) => {
    if (suppressRef.current) return;
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setActivePanel("nav");
    setActiveNav(name);
  };

  const handleBarLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActivePanel(null);
      setActiveNav(null);
    }, 200);
  };

  const handleBarEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const togglePanel = (panel: PanelType) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (activePanel === panel) {
      setActivePanel(null);
      setActiveNav(null);
    } else {
      setActivePanel(panel);
      if (panel !== "nav") setActiveNav(null);
    }
  };

  const currentItem = navItems.find((item) => item.name === activeNav);
  const hasPanel = activePanel !== null;

  return (
    <>
      {/* Combined Header + Panel Container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
        onMouseEnter={handleBarEnter}
        onMouseLeave={handleBarLeave}
      >
        {/* Background */}
        <div
          className="glass"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        {/* Header Nav Bar */}
        <nav
          style={{
            position: "relative",
            maxWidth: "var(--content-max-width)",
            margin: "0 auto",
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 var(--space-6)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              color: "var(--color-text-primary)",
              width: 140,
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/logo.png"
              alt="有思网"
              width={18}
              height={18}
              style={{ borderRadius: 3 }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 500,
                opacity: 0.9,
              }}
            >
              有思网
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
            }}
            className="hidden md:flex"
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                style={{ height: "100%", display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleNavEnter(item.name)}
              >
                <Link
                  href={item.href}
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "var(--color-text-primary)",
                    opacity: activeNav === item.name ? 1 : 0.8,
                    textDecoration: "none",
                    transition: "opacity 0.4s ease",
                    cursor: "pointer",
                  }}
                  className="hover:opacity-100"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Right side icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              justifyContent: "flex-end",
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => togglePanel("search")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "var(--color-text-primary)",
                opacity: activePanel === "search" ? 1 : 0.8,
                transition: "opacity 0.4s ease",
              }}
              className="hover:opacity-100"
              aria-label="搜索"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <button
              onClick={() => togglePanel("bag")}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "var(--color-text-primary)",
                opacity: activePanel === "bag" ? 1 : 0.8,
                transition: "opacity 0.4s ease",
              }}
              className="hover:opacity-100"
              aria-label="购物袋"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 7v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7" />
                <path d="M2 7h20" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <circle cx="12" cy="14" r="2" />
              </svg>
            </button>

            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
                color: "var(--color-text-primary)",
              }}
              className="md:hidden"
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); if (mobileMenuOpen) setMobileActiveNav(null); }}
              aria-label="菜单"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Panel Content */}
        <div
          style={{
            position: "relative",
            maxWidth: "var(--content-max-width)",
            marginLeft: "max(calc((100vw - var(--content-max-width)) / 2), var(--space-6))",
            marginRight: "var(--space-6)",
            overflow: "hidden",
            height: hasPanel ? (isMobile ? "calc(100vh - 44px)" : "calc(50vh - 44px)") : 0,
            opacity: hasPanel ? 1 : 0,
            transition: "height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Nav Panel */}
          {activePanel === "nav" && currentItem && (
            <div
              style={{
                padding: "32px var(--space-6) 40px",
                display: "grid",
                gap: 12,
              }}
              className="grid-cols-1 md:grid-cols-3"
            >
              {/* Explore Column */}
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 20,
                    opacity: 0,
                    animation: "fadeSlideUp 0.5s ease forwards",
                    animationDelay: "0.1s",
                  }}
                >
                  {currentItem.explore.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {currentItem.explore.items.map((child, index) => {
                    const fontSize = index === 0 ? 28 : index === 1 ? 22 : 17;
                    const fontWeight = index === 0 ? 700 : index === 1 ? 600 : 400;
                    return (
                      <li
                        key={`${currentItem.name}-${child.name}`}
                        style={{
                          opacity: 0,
                          animation: "fadeSlideUp 0.5s ease forwards",
                          animationDelay: `${0.15 + index * 0.05}s`,
                        }}
                      >
                        <Link
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "10px 0",
                            fontSize,
                            fontWeight,
                            color: "var(--color-text-primary)",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                          }}
                          className="hover:text-[var(--color-text-link)]"
                          onClick={() => {
                            setActivePanel(null);
                            setActiveNav(null);
                          }}
                        >
                          {child.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Shop Column */}
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 20,
                    opacity: 0,
                    animation: "fadeSlideUp 0.5s ease forwards",
                    animationDelay: "0.15s",
                  }}
                >
                  {currentItem.shop.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {currentItem.shop.items.map((child, index) => (
                    <li
                      key={`${currentItem.name}-${child.name}`}
                      style={{
                        opacity: 0,
                        animation: "fadeSlideUp 0.5s ease forwards",
                        animationDelay: `${0.2 + index * 0.05}s`,
                      }}
                    >
                      <Link
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "8px 0",
                          fontSize: 12,
                          fontWeight: 400,
                          color: "var(--color-text-primary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        className="hover:text-[var(--color-text-link)]"
                        onClick={() => {
                          setActivePanel(null);
                          setActiveNav(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Column */}
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 20,
                    opacity: 0,
                    animation: "fadeSlideUp 0.5s ease forwards",
                    animationDelay: "0.2s",
                  }}
                >
                  {currentItem.related.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {currentItem.related.items.map((child, index) => (
                    <li
                      key={`${currentItem.name}-${child.name}`}
                      style={{
                        opacity: 0,
                        animation: "fadeSlideUp 0.5s ease forwards",
                        animationDelay: `${0.25 + index * 0.05}s`,
                      }}
                    >
                      <Link
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "8px 0",
                          fontSize: 12,
                          fontWeight: 400,
                          color: "var(--color-text-primary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        className="hover:text-[var(--color-text-primary)]"
                        onClick={() => {
                          setActivePanel(null);
                          setActiveNav(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Search Panel */}
          {activePanel === "search" && (
            <div
              style={{
                padding: "32px var(--space-6) 40px",
                maxWidth: 680,
              }}
            >
              <div
                style={{
                  opacity: 0,
                  animation: "fadeSlideUp 0.5s ease forwards",
                  animationDelay: "0.1s",
                }}
              >
                <input
                  type="text"
                  placeholder="搜索服务、案例..."
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    fontSize: "1.1rem",
                    border: "none",
                    borderBottom: "1px solid var(--color-border)",
                    background: "transparent",
                    color: "var(--color-text-primary)",
                    outline: "none",
                  }}
                  autoFocus
                />
              </div>
              <div
                style={{
                  marginTop: 24,
                  opacity: 0,
                  animation: "fadeSlideUp 0.5s ease forwards",
                  animationDelay: "0.2s",
                }}
              >
                <h4
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  }}
                >
                  快速访问
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {["品牌策略", "视觉设计", "IP设计", "音乐制作", "视频制作", "案例"].map((tag) => (
                    <Link
                      key={tag}
                      href="/services"
                      style={{
                        padding: "8px 16px",
                        fontSize: 14,
                        background: "var(--color-bg-secondary)",
                        borderRadius: 20,
                        color: "var(--color-text-primary)",
                        textDecoration: "none",
                        transition: "background 0.2s ease",
                      }}
                      className="hover:bg-black/10 dark:hover:bg-white/10"
                      onClick={() => setActivePanel(null)}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bag Panel */}
          {activePanel === "bag" && (
            <div
              style={{
                padding: "32px var(--space-6) 40px",
                display: "grid",
                gap: 12,
              }}
              className="grid-cols-1 md:grid-cols-3"
            >
              {/* Account Column */}
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 20,
                    opacity: 0,
                    animation: "fadeSlideUp 0.5s ease forwards",
                    animationDelay: "0.1s",
                  }}
                >
                  账户
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    { name: "登录 / 注册", href: "/login" },
                    { name: "我的账户", href: "/account" },
                    { name: "个人信息", href: "/account/profile" },
                  ].map((item, index) => {
                    const fontSize = index === 0 ? 24 : index === 1 ? 21 : index === 2 ? 19 : 17;
                    const fontWeight = index === 0 ? 600 : index === 1 ? 500 : 400;
                    return (
                      <li
                        key={item.name}
                        style={{
                          opacity: 0,
                          animation: "fadeSlideUp 0.5s ease forwards",
                          animationDelay: `${0.15 + index * 0.05}s`,
                        }}
                      >
                        <Link
                          href={item.href}
                          style={{
                            display: "block",
                            padding: "10px 0",
                            fontSize,
                            fontWeight,
                            color: "var(--color-text-primary)",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                          }}
                          className="hover:text-[var(--color-text-link)]"
                          onClick={() => setActivePanel(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Orders Column */}
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 20,
                    opacity: 0,
                    animation: "fadeSlideUp 0.5s ease forwards",
                    animationDelay: "0.15s",
                  }}
                >
                  订单
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    { name: "我的订单", href: "/account/orders" },
                    { name: "咨询记录", href: "/account/inquiries" },
                    { name: "购物袋", href: "/bag" },
                  ].map((item, index) => (
                    <li
                      key={item.name}
                      style={{
                        opacity: 0,
                        animation: "fadeSlideUp 0.5s ease forwards",
                        animationDelay: `${0.2 + index * 0.05}s`,
                      }}
                    >
                      <Link
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "8px 0",
                          fontSize: 12,
                          fontWeight: 400,
                          color: "var(--color-text-primary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        className="hover:text-[var(--color-text-link)]"
                        onClick={() => setActivePanel(null)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Column */}
              <div>
                <h3
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--color-text-secondary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 20,
                    opacity: 0,
                    animation: "fadeSlideUp 0.5s ease forwards",
                    animationDelay: "0.2s",
                  }}
                >
                  快速链接
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    { name: "帮助中心", href: "/faq" },
                    { name: "联系我们", href: "/contact" },
                    { name: "服务条款", href: "/terms" },
                  ].map((item, index) => (
                    <li
                      key={item.name}
                      style={{
                        opacity: 0,
                        animation: "fadeSlideUp 0.5s ease forwards",
                        animationDelay: `${0.25 + index * 0.05}s`,
                      }}
                    >
                      <Link
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "8px 0",
                          fontSize: 12,
                          fontWeight: 400,
                          color: "var(--color-text-primary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        className="hover:text-[var(--color-text-primary)]"
                        onClick={() => setActivePanel(null)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 9998,
          opacity: hasPanel ? 1 : 0,
          visibility: hasPanel ? "visible" : "hidden",
          transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={() => {
          setActivePanel(null);
          setActiveNav(null);
        }}
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 44,
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-bg)",
            zIndex: 9997,
            overflowY: "auto",
            padding: "24px var(--space-6)",
          }}
          className="md:hidden"
        >
          {!mobileActiveNav ? (
            /* Layer 1: Category list */
            navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setMobileActiveNav(item.name)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "16px 0",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--color-divider)",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {item.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            ))
          ) : (
            /* Layer 2: Sub-links for selected category */
            (() => {
              const item = navItems.find((n) => n.name === mobileActiveNav);
              if (!item) return null;
              return (
                <div>
                  <button
                    onClick={() => setMobileActiveNav(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 0",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--color-text-secondary)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      marginBottom: 16,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    返回
                  </button>

                  <Link
                    href={item.href}
                    style={{
                      display: "block",
                      fontSize: 28,
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      textDecoration: "none",
                      marginBottom: 24,
                    }}
                    onClick={() => { setMobileMenuOpen(false); setMobileActiveNav(null); }}
                  >
                    {item.name}
                  </Link>

                  {/* Explore */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                      {item.explore.title}
                    </h3>
                    {item.explore.items.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        style={{ display: "block", padding: "10px 0", fontSize: 17, fontWeight: 500, color: "var(--color-text-primary)", textDecoration: "none" }}
                        onClick={() => { setMobileMenuOpen(false); setMobileActiveNav(null); }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>

                  {/* Shop */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                      {item.shop.title}
                    </h3>
                    {item.shop.items.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        style={{ display: "block", padding: "8px 0", fontSize: 14, color: "var(--color-text-primary)", textDecoration: "none" }}
                        onClick={() => { setMobileMenuOpen(false); setMobileActiveNav(null); }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>

                  {/* Related */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                      {item.related.title}
                    </h3>
                    {item.related.items.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        style={{ display: "block", padding: "8px 0", fontSize: 14, color: "var(--color-text-secondary)", textDecoration: "none" }}
                        onClick={() => { setMobileMenuOpen(false); setMobileActiveNav(null); }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })()
          )}
        </div>
      )}

      {/* Spacer */}
      <div style={{ height: 44 }} />

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

// Wrapper that forces remount on route change (Apple-like behavior)
export default function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} />;
}
