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

export const musicServices: Service[] = [
  {
    slug: "commercial-music",
    name: "商业配乐",
    tagline: "为您的幼儿园打造专属品牌音乐",
    description: "AI辅助创作，专业音乐人制作，打造独一无二的幼儿园品牌音乐，让每一次播放都传递品牌价值。",
    price: "¥3,980 起",
    heroImage: "IMG-001", // 主视觉大图/视频
    features: [
      {
        icon: "clock",
        title: "3天出稿",
        description: "AI辅助创作，快速输出初稿",
      },
      {
        icon: "refresh",
        title: "3次修改",
        description: "不满意免费修改到满意",
      },
      {
        icon: "shield",
        title: "永久商用",
        description: "交付即用，无限使用",
      },
    ],
    includes: [
      { name: "背景音乐", spec: "3首", icon: "music" },
      { name: "起床铃声", spec: "2首", icon: "bell" },
      { name: "午休音乐", spec: "2首", icon: "moon" },
      { name: "活动配乐", spec: "2首", icon: "activity" },
      { name: "广播片头", spec: "1段", icon: "radio" },
    ],
    specs: [
      { label: "交付周期", value: "5-7 个工作日" },
      { label: "修改次数", value: "3 次" },
      { label: "交付格式", value: "MP3 + WAV + 工程文件" },
      { label: "商用授权", value: "永久、无限使用" },
      { label: "售后服务", value: "30 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "效果超出预期！孩子们特别喜欢新的园歌。",
        coverImage: "IMG-010",
      },
      {
        id: "case-002",
        title: "未来星幼儿园视觉焕新",
        kindergarten: "成都未来星幼儿园",
        testimonial: "专业又高效，3天就出了初稿。",
        coverImage: "IMG-011",
      },
    ],
    relatedServices: [
      {
        name: "音效设计",
        slug: "sound-design",
        category: "music",
        price: "¥1,980 起",
        icon: "volume",
      },
      {
        name: "企业宣传片",
        slug: "corporate-video",
        category: "video",
        price: "¥9,800 起",
        icon: "video",
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
    slug: "music-production",
    name: "音乐制作",
    tagline: "园歌、主题曲、企业歌，专业编曲录制",
    description: "专业音乐人团队，从作词作曲到编曲录制，一站式音乐制作服务，打造幼儿园专属音乐品牌。",
    price: "¥5,980 起",
    heroImage: "IMG-002", // 主视觉大图/视频
    features: [
      {
        icon: "mic",
        title: "专业录制",
        description: "专业录音棚，高品质音频",
      },
      {
        icon: "pen",
        title: "原创词曲",
        description: "专属词曲创作，独一无二",
      },
      {
        icon: "music",
        title: "多版本",
        description: "提供多种风格版本",
      },
    ],
    includes: [
      { name: "园歌", spec: "1首", icon: "music" },
      { name: "主题曲", spec: "1首", icon: "music" },
      { name: "企业歌", spec: "1首", icon: "building" },
      { name: "伴奏版", spec: "3个版本", icon: "instrument" },
      { name: "歌词本", spec: "1份", icon: "file" },
    ],
    specs: [
      { label: "交付周期", value: "7-10 个工作日" },
      { label: "修改次数", value: "5 次" },
      { label: "交付格式", value: "MP3 + WAV + 伴奏 + 工程文件" },
      { label: "商用授权", value: "永久、无限使用" },
      { label: "售后服务", value: "60 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-003",
        title: "蓝天幼儿园园歌定制",
        kindergarten: "成都蓝天幼儿园",
        testimonial: "园歌朗朗上口，孩子们都会唱了。",
        coverImage: "IMG-012",
      },
    ],
    relatedServices: [
      {
        name: "商业配乐",
        slug: "commercial-music",
        category: "music",
        price: "¥3,980 起",
        icon: "music",
      },
      {
        name: "音效设计",
        slug: "sound-design",
        category: "music",
        price: "¥1,980 起",
        icon: "volume",
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
    slug: "sound-design",
    name: "音效设计",
    tagline: "广播、活动、提示音，专业音效定制",
    description: "从广播体操到活动提示音，专业音效设计让幼儿园的每一个声音都成为品牌记忆点。",
    price: "¥1,980 起",
    heroImage: "IMG-003", // 主视觉大图/视频
    features: [
      {
        icon: "zap",
        title: "快速交付",
        description: "2-3天完成，即刻使用",
      },
      {
        icon: "layers",
        title: "多种风格",
        description: "可爱、活泼、温馨可选",
      },
      {
        icon: "headphones",
        title: "高品质",
        description: "48kHz专业音质",
      },
    ],
    includes: [
      { name: "广播体操音效", spec: "1套", icon: "radio" },
      { name: "活动提示音", spec: "10个", icon: "bell" },
      { name: "上下课铃声", spec: "2首", icon: "bell" },
      { name: "晨检提示音", spec: "1个", icon: "check" },
      { name: "紧急通知音", spec: "1个", icon: "alert" },
    ],
    specs: [
      { label: "交付周期", value: "2-3 个工作日" },
      { label: "修改次数", value: "2 次" },
      { label: "交付格式", value: "MP3 + WAV" },
      { label: "商用授权", value: "永久、无限使用" },
      { label: "售后服务", value: "15 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-004",
        title: "彩虹幼儿园音效系统设计",
        kindergarten: "成都彩虹幼儿园",
        testimonial: "广播体操音效孩子们特别喜欢。",
        coverImage: "IMG-013",
      },
    ],
    relatedServices: [
      {
        name: "商业配乐",
        slug: "commercial-music",
        category: "music",
        price: "¥3,980 起",
        icon: "music",
      },
      {
        name: "音乐制作",
        slug: "music-production",
        category: "music",
        price: "¥5,980 起",
        icon: "music",
      },
      {
        name: "产品广告",
        slug: "product-ad",
        category: "video",
        price: "¥6,800 起",
        icon: "video",
      },
    ],
  },
];
