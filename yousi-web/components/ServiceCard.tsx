"use client";

import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "var(--space-12) var(--space-8)",
        background: "#FFFFFF",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-card)",
        textDecoration: "none",
        transition: "transform var(--duration-normal) var(--easing-default), box-shadow var(--duration-normal) var(--easing-default)",
      }}
      className="hover:scale-[1.02] hover:shadow-[var(--shadow-hover)]"
    >
      <div
        style={{
          width: 48,
          height: 48,
          marginBottom: "var(--space-6)",
          color: "var(--color-text-primary)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 28,
          fontWeight: 600,
          marginBottom: "var(--space-3)",
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 17,
          color: "var(--color-text-secondary)",
          marginBottom: "var(--space-6)",
          lineHeight: "var(--leading-relaxed)",
        }}
      >
        {description}
      </p>
      <span
        style={{
          color: "var(--color-text-link)",
          fontSize: 21,
          textDecoration: "none",
        }}
        className="link-arrow"
      >
        探索
      </span>
    </Link>
  );
}
