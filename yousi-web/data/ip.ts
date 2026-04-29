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

export const ipServices: Service[] = [
  {
    slug: "ip-design",
    name: "IP形象设计",
    tagline: "为您的幼儿园打造独一无二的品牌吉祥物",
    description: "专业设计师团队，从创意构思到形象落地，打造专属幼儿园IP形象，让品牌形象深入人心，成为孩子们喜爱的好朋友。",
    price: "¥12,800 起",
    heroImage: "IMG-020",
    features: [
      {
        icon: "palette",
        title: "原创设计",
        description: "100%原创，独一无二的品牌形象",
      },
      {
        icon: "layers",
        title: "多场景应用",
        description: "平面、立体、动态多维度呈现",
      },
      {
        icon: "shield",
        title: "版权归属",
        description: "设计完成即获完整版权",
      },
    ],
    includes: [
      { name: "主形象设计", spec: "1个", icon: "star" },
      { name: "表情包设计", spec: "12个", icon: "smile" },
      { name: "动作姿态", spec: "6个", icon: "activity" },
      { name: "应用场景图", spec: "8张", icon: "image" },
      { name: "品牌规范手册", spec: "1份", icon: "file" },
    ],
    specs: [
      { label: "交付周期", value: "15-20 个工作日" },
      { label: "修改次数", value: "5 次" },
      { label: "交付格式", value: "AI + PSD + PNG + SVG" },
      { label: "版权归属", value: "永久、全权归属甲方" },
      { label: "售后服务", value: "90 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-006",
        title: "星星幼儿园IP形象设计",
        kindergarten: "成都星星幼儿园",
        testimonial: "小朋友们超级喜欢新的吉祥物，每天都要抱着玩偶睡觉！",
        coverImage: "IMG-015",
      },
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "设计团队非常专业，把我们的想法完美呈现出来了。",
        coverImage: "IMG-010",
      },
    ],
    relatedServices: [
      {
        name: "IP授权运营",
        slug: "ip-licensing",
        category: "ip",
        price: "¥8,800 起",
        icon: "award",
      },
      {
        name: "衍生品开发",
        slug: "ip-merchandise",
        category: "ip",
        price: "¥6,800 起",
        icon: "gift",
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
    slug: "ip-licensing",
    name: "IP授权运营",
    tagline: "让您的IP形象创造更大商业价值",
    description: "专业的IP授权运营服务，从品牌授权到联名合作，帮助幼儿园IP形象实现商业化运营，拓展品牌影响力与收益渠道。",
    price: "¥8,800 起",
    heroImage: "IMG-023",
    features: [
      {
        icon: "award",
        title: "品牌授权",
        description: "规范授权体系，保障品牌价值",
      },
      {
        icon: "trending-up",
        title: "商业拓展",
        description: "联名合作，开拓多元收入",
      },
      {
        icon: "shield",
        title: "版权保护",
        description: "全程法律护航，维护IP权益",
      },
    ],
    includes: [
      { name: "授权方案策划", spec: "1份", icon: "file" },
      { name: "品牌授权合同", spec: "1份", icon: "file-text" },
      { name: "联名合作对接", spec: "3家", icon: "handshake" },
      { name: "IP使用规范", spec: "1份", icon: "book" },
      { name: "运营数据报告", spec: "季度", icon: "bar-chart" },
    ],
    specs: [
      { label: "交付周期", value: "10-15 个工作日" },
      { label: "修改次数", value: "3 次" },
      { label: "交付格式", value: "方案文档 + 合同模板 + 运营报告" },
      { label: "授权范围", value: "按合同约定" },
      { label: "售后服务", value: "180 天运营支持" },
    ],
    relatedCases: [
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "通过IP授权合作，品牌知名度提升了很多，家长们都很认可。",
        coverImage: "IMG-010",
      },
      {
        id: "case-005",
        title: "智慧树幼儿园品牌宣传片",
        kindergarten: "成都智慧树幼儿园",
        testimonial: "运营团队非常专业，帮我们对接了优质的合作资源。",
        coverImage: "IMG-014",
      },
    ],
    relatedServices: [
      {
        name: "IP形象设计",
        slug: "ip-design",
        category: "ip",
        price: "¥12,800 起",
        icon: "star",
      },
      {
        name: "衍生品开发",
        slug: "ip-merchandise",
        category: "ip",
        price: "¥6,800 起",
        icon: "gift",
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
    slug: "ip-merchandise",
    name: "衍生品开发",
    tagline: "让IP形象走进孩子们的日常生活",
    description: "从毛绒玩具到文具周边，将幼儿园IP形象开发成各类衍生产品，增强品牌粘性，创造额外营收渠道。",
    price: "¥6,800 起",
    heroImage: "IMG-026",
    features: [
      {
        icon: "gift",
        title: "品类丰富",
        description: "玩具、文具、服饰等多品类覆盖",
      },
      {
        icon: "check",
        title: "品质保障",
        description: "严格品控，安全环保材料",
      },
      {
        icon: "refresh",
        title: "灵活定制",
        description: "小批量起订，按需生产",
      },
    ],
    includes: [
      { name: "毛绒玩偶", spec: "3款", icon: "heart" },
      { name: "文具套装", spec: "1套", icon: "pen" },
      { name: "定制T恤", spec: "2款", icon: "shirt" },
      { name: "贴纸套装", spec: "1套", icon: "star" },
      { name: "产品包装设计", spec: "1套", icon: "package" },
    ],
    specs: [
      { label: "交付周期", value: "20-30 个工作日" },
      { label: "修改次数", value: "3 次" },
      { label: "交付格式", value: "实物样品 + 设计源文件" },
      { label: "起订数量", value: "单品100件起" },
      { label: "售后服务", value: "60 天质量问题包换" },
    ],
    relatedCases: [
      {
        id: "case-004",
        title: "彩虹幼儿园音效系统设计",
        kindergarten: "成都彩虹幼儿园",
        testimonial: "孩子们特别喜欢印有吉祥物的书包和文具，家长们也纷纷购买。",
        coverImage: "IMG-013",
      },
      {
        id: "case-002",
        title: "未来星幼儿园视觉焕新",
        kindergarten: "成都未来星幼儿园",
        testimonial: "衍生品质量很好，成为了幼儿园的一大特色。",
        coverImage: "IMG-011",
      },
    ],
    relatedServices: [
      {
        name: "IP形象设计",
        slug: "ip-design",
        category: "ip",
        price: "¥12,800 起",
        icon: "star",
      },
      {
        name: "IP授权运营",
        slug: "ip-licensing",
        category: "ip",
        price: "¥8,800 起",
        icon: "award",
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
