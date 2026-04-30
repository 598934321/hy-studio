export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logoUrl: string;
  phone: string;
  email: string;
  wechat: string;
  address: string;
}

export const defaultSettings: SiteSettings = {
  siteName: "有思网",
  siteDescription: "专注幼儿园设计的一站式品牌服务平台",
  logoUrl: "/images/logo.png",
  phone: "400-888-8888",
  email: "contact@yousi.com",
  wechat: "yousi_design",
  address: "北京市朝阳区xxx大厦",
};

export async function loadSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch("/api/settings", { cache: "no-store" });
    if (!res.ok) return defaultSettings;
    const data = await res.json();
    return { ...defaultSettings, ...data };
  } catch {
    return defaultSettings;
  }
}
