export interface Package {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  isRecommended: boolean;
  features: { name: string; included: boolean }[];
  serviceNames: string[];
  deliveryDays: number;
  warrantyDays: number;
}

export const packages: Package[] = [
  {
    id: "pkg-001",
    slug: "lite",
    name: "轻量版",
    tagline: "新园起步优选，快速建立品牌基础",
    price: 2980,
    originalPrice: 4980,
    isRecommended: false,
    features: [
      { name: "品牌定位分析", included: true },
      { name: "LOGO设计（2款方案）", included: true },
      { name: "基础VI系统（标准色+标准字）", included: true },
      { name: "名片设计", included: true },
      { name: "宣传单页设计（1款）", included: true },
      { name: "源文件交付", included: true },
      { name: "品牌手册", included: false },
      { name: "导视系统设计", included: false },
      { name: "IP形象设计", included: false },
      { name: "视频/音乐制作", included: false },
      { name: "社交媒体视觉套件", included: false },
      { name: "专属项目经理", included: false },
      { name: "年度品牌顾问服务", included: false },
    ],
    serviceNames: ["品牌策略", "LOGO设计", "基础VI", "名片设计", "宣传单页"],
    deliveryDays: 15,
    warrantyDays: 30,
  },
  {
    id: "pkg-002",
    slug: "standard",
    name: "标准版",
    tagline: "全方位品牌升级，打造区域标杆园所",
    price: 9980,
    originalPrice: 15800,
    isRecommended: true,
    features: [
      { name: "品牌定位分析", included: true },
      { name: "LOGO设计（3款方案）", included: true },
      { name: "完整VI系统", included: true },
      { name: "名片设计", included: true },
      { name: "宣传单页设计（3款）", included: true },
      { name: "源文件交付", included: true },
      { name: "品牌手册", included: true },
      { name: "导视系统设计", included: true },
      { name: "IP形象设计（1个主形象）", included: true },
      { name: "视频/音乐制作", included: false },
      { name: "社交媒体视觉套件", included: true },
      { name: "专属项目经理", included: true },
      { name: "年度品牌顾问服务", included: false },
    ],
    serviceNames: [
      "品牌策略",
      "LOGO设计",
      "完整VI",
      "导视系统",
      "IP形象设计",
      "社交媒体套件",
    ],
    deliveryDays: 25,
    warrantyDays: 90,
  },
  {
    id: "pkg-003",
    slug: "premium",
    name: "尊享版",
    tagline: "旗舰级品牌全案，塑造行业领导品牌",
    price: 29800,
    originalPrice: 45800,
    isRecommended: false,
    features: [
      { name: "品牌定位分析", included: true },
      { name: "LOGO设计（5款方案）", included: true },
      { name: "完整VI系统", included: true },
      { name: "名片设计", included: true },
      { name: "宣传物料全套设计", included: true },
      { name: "源文件交付", included: true },
      { name: "品牌手册", included: true },
      { name: "导视系统设计", included: true },
      { name: "IP形象设计（含延展角色家族）", included: true },
      { name: "品牌宣传片拍摄", included: true },
      { name: "园歌原创定制", included: true },
      { name: "社交媒体视觉套件", included: true },
      { name: "专属项目经理", included: true },
      { name: "年度品牌顾问服务（12个月）", included: true },
    ],
    serviceNames: [
      "品牌策略",
      "LOGO设计",
      "完整VI",
      "导视系统",
      "IP形象全家福",
      "宣传片拍摄",
      "园歌定制",
      "社交媒体套件",
      "年度顾问",
    ],
    deliveryDays: 45,
    warrantyDays: 365,
  },
];
