export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceInclude {
  name: string;
  spec: string;
  icon?: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface RelatedCase {
  id: string;
  title: string;
  kindergarten: string;
  testimonial: string;
  coverImage: string; // 编号：IMG-XX
}

export interface RelatedService {
  name: string;
  slug: string;
  category: string;
  price: string;
  icon: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  heroImage: string; // 编号：IMG-XX
  features: ServiceFeature[];
  includes: ServiceInclude[];
  specs: ServiceSpec[];
  relatedCases: RelatedCase[];
  relatedServices: RelatedService[];
}

export const techServices: Service[] = [
  {
    slug: "web-dev",
    name: "网站开发",
    tagline: "为幼儿园打造专业品牌形象官网",
    description: "响应式网站设计与开发，适配PC、平板、手机全端访问，助力幼儿园建立专业线上品牌形象，提升招生转化率。",
    price: "¥5,800 起",
    heroImage: "/images/services/web-dev.webp",
    features: [
      {
        icon: "layout",
        title: "响应式设计",
        description: "自适应全端设备，访问体验一致",
      },
      {
        icon: "zap",
        title: "7天上线",
        description: "高效开发流程，快速交付上线",
      },
      {
        icon: "shield",
        title: "安全稳定",
        description: "HTTPS加密，全年99.9%可用性",
      },
    ],
    includes: [
      { name: "首页设计", spec: "1套", icon: "layout" },
      { name: "内页开发", spec: "5-8页", icon: "file" },
      { name: "在线报名表单", spec: "1个", icon: "form" },
      { name: "SEO基础优化", spec: "1次", icon: "search" },
      { name: "后台管理系统", spec: "1套", icon: "settings" },
    ],
    specs: [
      { label: "交付周期", value: "7-15 个工作日" },
      { label: "修改次数", value: "3 次" },
      { label: "技术栈", value: "Next.js + Tailwind CSS" },
      { label: "域名托管", value: "首年免费，次年起 ¥500/年" },
      { label: "售后服务", value: "90 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "网站上线后咨询量提升了40%，家长都说看着很专业。",
        coverImage: "/images/thumbnails/kindergarten-01.webp",
      },
      {
        id: "case-005",
        title: "智慧树幼儿园品牌宣传片",
        kindergarten: "成都智慧树幼儿园",
        testimonial: "新版网站漂亮又好用，报名转化率明显提高了。",
        coverImage: "/images/thumbnails/kindergarten-05.webp",
      },
    ],
    relatedServices: [
      {
        name: "小程序开发",
        slug: "mini-program",
        category: "tech",
        price: "¥8,800 起",
        icon: "smartphone",
      },
      {
        name: "视觉设计",
        slug: "visual-design",
        category: "services",
        price: "¥2,980 起",
        icon: "palette",
      },
      {
        name: "短视频制作",
        slug: "short-video",
        category: "video",
        price: "¥2,980 起",
        icon: "video",
      },
    ],
  },
  {
    slug: "mini-program",
    name: "小程序开发",
    tagline: "家园共育，一码直达",
    description: "微信小程序定制开发，集成家园互动、在线报名、课程展示、通知推送等核心功能，让家长随时掌握孩子在园动态。",
    price: "¥8,800 起",
    heroImage: "/images/services/mini-program.webp",
    features: [
      {
        icon: "smartphone",
        title: "即开即用",
        description: "微信扫码即可使用，无需下载安装",
      },
      {
        icon: "bell",
        title: "消息推送",
        description: "重要通知实时推送到家长手机",
      },
      {
        icon: "users",
        title: "家园互动",
        description: "照片、视频、动态随时分享",
      },
    ],
    includes: [
      { name: "家长端小程序", spec: "1套", icon: "smartphone" },
      { name: "教师管理后台", spec: "1套", icon: "monitor" },
      { name: "在线报名功能", spec: "1个", icon: "form" },
      { name: "班级相册模块", spec: "1个", icon: "image" },
      { name: "通知推送系统", spec: "1套", icon: "bell" },
    ],
    specs: [
      { label: "交付周期", value: "15-25 个工作日" },
      { label: "修改次数", value: "5 次" },
      { label: "技术栈", value: "微信原生 + 云开发" },
      { label: "平台支持", value: "微信小程序 + 企业微信" },
      { label: "售后服务", value: "180 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-003",
        title: "蓝天幼儿园园歌定制",
        kindergarten: "成都蓝天幼儿园",
        testimonial: "家长使用率超过95%，沟通效率大幅提升。",
        coverImage: "/images/thumbnails/kindergarten-03.webp",
      },
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "线上报名功能太方便了，招生季轻松了很多。",
        coverImage: "/images/thumbnails/kindergarten-01.webp",
      },
    ],
    relatedServices: [
      {
        name: "网站开发",
        slug: "web-dev",
        category: "tech",
        price: "¥5,800 起",
        icon: "layout",
      },
      {
        name: "系统定制",
        slug: "system-custom",
        category: "tech",
        price: "¥15,800 起",
        icon: "code",
      },
      {
        name: "商业配乐",
        slug: "commercial-music",
        category: "music",
        price: "¥3,980 起",
        icon: "music",
      },
    ],
  },
  {
    slug: "system-custom",
    name: "系统定制",
    tagline: "幼儿园数字化管理一站式解决方案",
    description: "深度定制幼儿园管理系统，涵盖教务管理、财务管理、人事管理、资产管理等模块，全面提升园所运营效率。",
    price: "¥15,800 起",
    heroImage: "/images/services/system-custom.webp",
    features: [
      {
        icon: "settings",
        title: "按需定制",
        description: "根据园所实际需求灵活配置功能模块",
      },
      {
        icon: "database",
        title: "数据驱动",
        description: "可视化报表，数据辅助经营决策",
      },
      {
        icon: "lock",
        title: "安全合规",
        description: "数据加密存储，符合教育行业规范",
      },
    ],
    includes: [
      { name: "教务管理系统", spec: "1套", icon: "book" },
      { name: "财务管理系统", spec: "1套", icon: "calculator" },
      { name: "人事管理系统", spec: "1套", icon: "users" },
      { name: "家长沟通平台", spec: "1套", icon: "message" },
      { name: "数据看板", spec: "1套", icon: "chart" },
    ],
    specs: [
      { label: "交付周期", value: "30-60 个工作日" },
      { label: "修改次数", value: "不限次数" },
      { label: "技术栈", value: "React + Node.js + MySQL" },
      { label: "部署方式", value: "私有化部署 / SaaS可选" },
      { label: "售后服务", value: "1 年免费维护 + 技术支持" },
    ],
    relatedCases: [
      {
        id: "case-002",
        title: "未来星幼儿园视觉焕新",
        kindergarten: "成都未来星幼儿园",
        testimonial: "5个园区统一管理，运营效率提升了60%。",
        coverImage: "/images/thumbnails/kindergarten-02.webp",
      },
      {
        id: "case-004",
        title: "彩虹幼儿园音效系统设计",
        kindergarten: "成都彩虹幼儿园",
        testimonial: "系统上线后老师工作量明显减轻，家长也很满意。",
        coverImage: "/images/thumbnails/kindergarten-04.webp",
      },
    ],
    relatedServices: [
      {
        name: "小程序开发",
        slug: "mini-program",
        category: "tech",
        price: "¥8,800 起",
        icon: "smartphone",
      },
      {
        name: "网站开发",
        slug: "web-dev",
        category: "tech",
        price: "¥5,800 起",
        icon: "layout",
      },
      {
        name: "IP形象设计",
        slug: "ip-design",
        category: "ip",
        price: "¥12,800 起",
        icon: "star",
      },
    ],
  },
];
