import type {
  Service,
  ServiceFeature,
  ServiceInclude,
  ServiceSpec,
  RelatedCase,
  RelatedService,
} from "./music";

export type {
  Service,
  ServiceFeature,
  ServiceInclude,
  ServiceSpec,
  RelatedCase,
  RelatedService,
};

export const servicesServices: Service[] = [
  {
    slug: "brand-strategy",
    name: "品牌策略",
    tagline: "从零到一，打造幼儿园专属品牌体系",
    description: "专业品牌顾问团队，通过市场调研、竞品分析、品牌定位，为幼儿园量身定制品牌战略方案，让品牌从理念到落地一步到位。",
    price: "¥4,980 起",
    heroImage: "/images/services/brand-strategy.webp",
    features: [
      {
        icon: "target",
        title: "精准定位",
        description: "深度调研，找到品牌核心差异点",
      },
      {
        icon: "compass",
        title: "体系完整",
        description: "从理念到视觉，一站式品牌体系",
      },
      {
        icon: "users",
        title: "顾问跟踪",
        description: "专属品牌顾问全程陪伴落地",
      },
    ],
    includes: [
      { name: "品牌定位报告", spec: "1份", icon: "file" },
      { name: "品牌命名方案", spec: "3套", icon: "tag" },
      { name: "品牌故事文案", spec: "1套", icon: "book" },
      { name: "竞品分析报告", spec: "1份", icon: "chart" },
      { name: "品牌手册", spec: "1本", icon: "book" },
    ],
    specs: [
      { label: "交付周期", value: "10-15 个工作日" },
      { label: "修改次数", value: "3 次" },
      { label: "交付格式", value: "PDF + PPT + Word" },
      { label: "服务周期", value: "30 天顾问跟踪" },
      { label: "售后服务", value: "60 天免费咨询" },
    ],
    relatedCases: [
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "品牌定位非常精准，家长满意度提升了40%。",
        coverImage: "/images/thumbnails/kindergarten-01.webp",
      },
      {
        id: "case-002",
        title: "未来星幼儿园视觉焕新",
        kindergarten: "成都未来星幼儿园",
        testimonial: "顾问团队很专业，品牌焕然一新。",
        coverImage: "/images/thumbnails/kindergarten-02.webp",
      },
    ],
    relatedServices: [
      {
        name: "视觉设计",
        slug: "visual-design",
        category: "services",
        price: "¥2,980 起",
        icon: "palette",
      },
      {
        name: "内容创作",
        slug: "content-creation",
        category: "services",
        price: "¥1,980 起",
        icon: "edit",
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
  {
    slug: "visual-design",
    name: "视觉设计",
    tagline: "让每一处视觉都传递品牌温度",
    description: "专业设计团队，从LOGO到园所环境，从招生物料到线上视觉，全方位打造幼儿园品牌视觉体系，让家长一眼记住你。",
    price: "¥2,980 起",
    heroImage: "/images/services/visual-design.webp",
    features: [
      {
        icon: "palette",
        title: "风格统一",
        description: "全场景视觉风格一致，强化品牌记忆",
      },
      {
        icon: "layers",
        title: "多场景适配",
        description: "线上+线下，一套体系全覆盖",
      },
      {
        icon: "printer",
        title: "即印即用",
        description: "提供印刷级源文件，交付即可落地",
      },
    ],
    includes: [
      { name: "LOGO设计", spec: "3套方案", icon: "star" },
      { name: "VI基础系统", spec: "1套", icon: "grid" },
      { name: "招生海报", spec: "5张", icon: "image" },
      { name: "名片/信纸", spec: "1套", icon: "file" },
      { name: "园所导视设计", spec: "1套", icon: "map" },
    ],
    specs: [
      { label: "交付周期", value: "7-10 个工作日" },
      { label: "修改次数", value: "5 次" },
      { label: "交付格式", value: "AI + PSD + PDF + PNG" },
      { label: "源文件", value: "全部交付，可二次编辑" },
      { label: "售后服务", value: "30 天免费调整" },
    ],
    relatedCases: [
      {
        id: "case-002",
        title: "未来星幼儿园视觉焕新",
        kindergarten: "成都未来星幼儿园",
        testimonial: "设计很有质感，家长都说我们幼儿园看起来更专业了。",
        coverImage: "/images/thumbnails/kindergarten-02.webp",
      },
      {
        id: "case-006",
        title: "星星幼儿园IP形象设计",
        kindergarten: "成都星星幼儿园",
        testimonial: "海报效果特别好，招生转化率明显提升。",
        coverImage: "/images/thumbnails/kindergarten-06.webp",
      },
    ],
    relatedServices: [
      {
        name: "品牌策略",
        slug: "brand-strategy",
        category: "services",
        price: "¥4,980 起",
        icon: "target",
      },
      {
        name: "内容创作",
        slug: "content-creation",
        category: "services",
        price: "¥1,980 起",
        icon: "edit",
      },
      {
        name: "企业宣传片",
        slug: "corporate-video",
        category: "video",
        price: "¥9,800 起",
        icon: "video",
      },
    ],
  },
  {
    slug: "content-creation",
    name: "内容创作",
    tagline: "好内容，让品牌自己会说话",
    description: "专业内容团队，为幼儿园提供公众号运营、短视频脚本、活动策划等一站式内容服务，用好内容吸引好家长。",
    price: "¥1,980 起",
    heroImage: "/images/services/content-creation.webp",
    features: [
      {
        icon: "edit",
        title: "原创内容",
        description: "专业文案团队，篇篇原创不重复",
      },
      {
        icon: "calendar",
        title: "定期更新",
        description: "按周/月排期，内容持续输出",
      },
      {
        icon: "trending-up",
        title: "数据驱动",
        description: "根据数据反馈优化内容方向",
      },
    ],
    includes: [
      { name: "公众号推文", spec: "8篇/月", icon: "edit" },
      { name: "短视频脚本", spec: "4条/月", icon: "video" },
      { name: "活动策划方案", spec: "1份/月", icon: "calendar" },
      { name: "朋友圈文案", spec: "20条/月", icon: "message" },
      { name: "家长社群内容", spec: "4次/月", icon: "users" },
    ],
    specs: [
      { label: "交付周期", value: "按月排期交付" },
      { label: "修改次数", value: "每月 3 次" },
      { label: "交付格式", value: "Word + 图片素材包" },
      { label: "内容审核", value: "发布前 24h 提交审核" },
      { label: "售后服务", value: "当月免费调整" },
    ],
    relatedCases: [
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "文章阅读量从200涨到2000+，效果太明显了。",
        coverImage: "/images/thumbnails/kindergarten-01.webp",
      },
      {
        id: "case-005",
        title: "智慧树幼儿园品牌宣传片",
        kindergarten: "成都智慧树幼儿园",
        testimonial: "3个月涨粉5000+，招生电话明显多了。",
        coverImage: "/images/thumbnails/kindergarten-05.webp",
      },
    ],
    relatedServices: [
      {
        name: "品牌策略",
        slug: "brand-strategy",
        category: "services",
        price: "¥4,980 起",
        icon: "target",
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
];
