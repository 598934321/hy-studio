import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://aiuse.fun";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/cases`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/music`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/video`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/ip`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tech`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/magazine`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/checkout/consult`, changeFrequency: "monthly", priority: 0.5 },
  ];

  try {
    const [services, cases] = await Promise.all([
      prisma.service.findMany({ select: { slug: true, updatedAt: true } }),
      prisma.caseStudy.findMany({ select: { slug: true, updatedAt: true } }),
    ]);

    const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: s.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

    const casePages: MetadataRoute.Sitemap = cases.map((c) => ({
      url: `${base}/cases/${c.slug}`,
      lastModified: c.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...casePages];
  } catch {
    return staticPages;
  }
}
