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

export const videoServices: Service[] = [
  {
    slug: "corporate-video",
    name: "企业宣传片",
    tagline: "用镜头讲述幼儿园的品牌故事",
    description: "专业导演团队执导，4K超清拍摄，从策划到成片一站式服务，全方位展示幼儿园的办学理念、师资力量和校园文化，打造有温度的品牌宣传片。",
    price: "¥9,800 起",
    heroImage: "/images/services/corporate-video.webp",
    features: [
      {
        icon: "film",
        title: "4K拍摄",
        description: "电影级画质，展现校园之美",
      },
      {
        icon: "users",
        title: "专业团队",
        description: "导演+摄影+剪辑全程服务",
      },
      {
        icon: "edit",
        title: "脚本定制",
        description: "根据品牌定位量身策划",
      },
    ],
    includes: [
      { name: "前期策划", spec: "1份方案", icon: "file" },
      { name: "拍摄执行", spec: "1天", icon: "camera" },
      { name: "后期剪辑", spec: "3-5分钟成片", icon: "film" },
      { name: "配乐音效", spec: "原创定制", icon: "music" },
      { name: "多版本输出", spec: "横版+竖版", icon: "layers" },
    ],
    specs: [
      { label: "交付周期", value: "10-15 个工作日" },
      { label: "修改次数", value: "3 次" },
      { label: "视频规格", value: "4K / 1080P 双版本" },
      { label: "商用授权", value: "永久、全渠道使用" },
      { label: "售后服务", value: "60 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-005",
        title: "智慧树幼儿园品牌宣传片",
        kindergarten: "成都智慧树幼儿园",
        testimonial: "宣传片拍得太好了，家长看完都说想来我们园！",
        coverImage: "/images/thumbnails/kindergarten-05.webp",
      },
      {
        id: "case-001",
        title: "阳光幼儿园品牌全案升级",
        kindergarten: "成都阳光幼儿园",
        testimonial: "招生季播放后，咨询量提升了40%。",
        coverImage: "/images/thumbnails/kindergarten-01.webp",
      },
    ],
    relatedServices: [
      {
        name: "产品广告",
        slug: "product-ad",
        category: "video",
        price: "¥6,800 起",
        icon: "video",
      },
      {
        name: "短视频制作",
        slug: "short-video",
        category: "video",
        price: "¥2,980 起",
        icon: "video",
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
    slug: "product-ad",
    name: "产品广告",
    tagline: "让幼儿园特色课程一目了然",
    description: "针对幼儿园特色课程、活动项目或周边产品，制作精炼有力的广告视频，突出核心卖点，适用于招生季投放、朋友圈推广和线下展示。",
    price: "¥6,800 起",
    heroImage: "/images/services/product-ad.webp",
    features: [
      {
        icon: "target",
        title: "精准定位",
        description: "锁定目标家长群体，高效转化",
      },
      {
        icon: "zap",
        title: "快速出片",
        description: "7个工作日交付成品",
      },
      {
        icon: "share",
        title: "多平台适配",
        description: "抖音、微信、线下全渠道覆盖",
      },
    ],
    includes: [
      { name: "创意脚本", spec: "1份", icon: "file" },
      { name: "拍摄制作", spec: "半天", icon: "camera" },
      { name: "广告成片", spec: "30-60秒", icon: "film" },
      { name: "字幕包装", spec: "中英双语", icon: "type" },
      { name: "平台适配版", spec: "3个版本", icon: "layers" },
    ],
    specs: [
      { label: "交付周期", value: "5-7 个工作日" },
      { label: "修改次数", value: "2 次" },
      { label: "视频规格", value: "1080P / 竖版9:16" },
      { label: "商用授权", value: "永久、全渠道使用" },
      { label: "售后服务", value: "30 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-002",
        title: "未来星幼儿园视觉焕新",
        kindergarten: "成都未来星幼儿园",
        testimonial: "广告投出去第一天就收到了好几个咨询。",
        coverImage: "/images/thumbnails/kindergarten-02.webp",
      },
      {
        id: "case-004",
        title: "彩虹幼儿园音效系统设计",
        kindergarten: "成都彩虹幼儿园",
        testimonial: "朋友圈广告效果很好，家长转发率很高。",
        coverImage: "/images/thumbnails/kindergarten-04.webp",
      },
    ],
    relatedServices: [
      {
        name: "企业宣传片",
        slug: "corporate-video",
        category: "video",
        price: "¥9,800 起",
        icon: "video",
      },
      {
        name: "短视频制作",
        slug: "short-video",
        category: "video",
        price: "¥2,980 起",
        icon: "video",
      },
      {
        name: "音效设计",
        slug: "sound-design",
        category: "music",
        price: "¥1,980 起",
        icon: "volume",
      },
    ],
  },
  {
    slug: "short-video",
    name: "短视频制作",
    tagline: "用短视频让更多家长认识你",
    description: "针对抖音、小红书、视频号等平台，批量制作幼儿园日常记录、活动花絮、教师风采等短视频内容，持续输出优质内容，打造幼儿园线上影响力。",
    price: "¥2,980 起",
    heroImage: "/images/services/short-video.webp",
    features: [
      {
        icon: "package",
        title: "批量制作",
        description: "一次拍摄产出多条内容",
      },
      {
        icon: "trending",
        title: "爆款策划",
        description: "紧跟热点，提升曝光量",
      },
      {
        icon: "repeat",
        title: "持续更新",
        description: "可按月订阅，长期合作优惠",
      },
    ],
    includes: [
      { name: "内容策划", spec: "月度排期表", icon: "calendar" },
      { name: "现场拍摄", spec: "半天", icon: "camera" },
      { name: "短视频成品", spec: "5条", icon: "film" },
      { name: "封面设计", spec: "5张", icon: "image" },
      { name: "平台代运营", spec: "可选", icon: "settings" },
    ],
    specs: [
      { label: "交付周期", value: "3-5 个工作日" },
      { label: "修改次数", value: "每条1次" },
      { label: "视频规格", value: "1080P 竖版 9:16" },
      { label: "商用授权", value: "永久、全平台使用" },
      { label: "售后服务", value: "15 天免费维护" },
    ],
    relatedCases: [
      {
        id: "case-005",
        title: "智慧树幼儿园品牌宣传片",
        kindergarten: "成都智慧树幼儿园",
        testimonial: "3个月涨粉2万，好多家长都是刷抖音来的。",
        coverImage: "/images/thumbnails/kindergarten-05.webp",
      },
      {
        id: "case-003",
        title: "蓝天幼儿园园歌定制",
        kindergarten: "成都蓝天幼儿园",
        testimonial: "每次活动的短视频家长都疯狂转发。",
        coverImage: "/images/thumbnails/kindergarten-03.webp",
      },
    ],
    relatedServices: [
      {
        name: "企业宣传片",
        slug: "corporate-video",
        category: "video",
        price: "¥9,800 起",
        icon: "video",
      },
      {
        name: "产品广告",
        slug: "product-ad",
        category: "video",
        price: "¥6,800 起",
        icon: "video",
      },
      {
        name: "音乐制作",
        slug: "music-production",
        category: "music",
        price: "¥5,980 起",
        icon: "music",
      },
    ],
  },
];
