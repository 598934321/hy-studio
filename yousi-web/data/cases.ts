export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string; // brand, visual, media, ip, tech
  kindergarten: string;
  description: string;
  coverImage: string; // IMG-XXX
  gallery: string[]; // IMG-XXX array
  testimonial: string;
  testimonialAuthor: string;
  services: string[];
  deliveryDays: number;
  isFeatured: boolean;
}

export const cases: CaseStudy[] = [
  {
    id: "case-001",
    slug: "chengdu-sunshine-brand",
    title: "阳光幼儿园品牌全案升级",
    category: "brand",
    kindergarten: "成都阳光幼儿园",
    description:
      "为成都阳光幼儿园打造全新品牌体系，包括品牌定位、视觉识别系统、园所空间导视及全套品牌应用物料。以「温暖生长」为核心理念，采用暖橙色与自然绿为主色调，塑造阳光、健康、富有生命力的品牌形象，助力园所在区域内建立强烈的品牌辨识度。",
    coverImage: "IMG-301",
    gallery: ["IMG-301", "IMG-302", "IMG-303", "IMG-304", "IMG-305", "IMG-306"],
    testimonial:
      "有思团队对幼教行业理解深刻，从品牌策划到落地执行都非常专业。新品牌形象让家长的咨询量提升了40%，很多家长说第一眼就被我们的视觉形象吸引了。",
    testimonialAuthor: "李园长 · 成都阳光幼儿园",
    services: ["品牌策略", "LOGO设计", "VI系统", "导视系统", "品牌物料"],
    deliveryDays: 30,
    isFeatured: true,
  },
  {
    id: "case-002",
    slug: "chengdu-futurestar-visual",
    title: "未来星幼儿园视觉焕新",
    category: "visual",
    kindergarten: "成都未来星幼儿园",
    description:
      "为未来星幼儿园进行视觉形象全面焕新，重新设计LOGO及VI系统，融入科技感与童趣元素。以星球、火箭为设计灵感，运用渐变蓝紫色系，打造兼具未来感与亲和力的视觉语言，应用于园所标识、宣传物料及线上平台。",
    coverImage: "IMG-311",
    gallery: ["IMG-311", "IMG-312", "IMG-313", "IMG-314"],
    testimonial:
      "新LOGO和视觉系统太棒了，孩子们特别喜欢那个小火箭的图案。家长们也觉得我们幼儿园的形象焕然一新，招生季报名明显比去年积极。",
    testimonialAuthor: "王园长 · 成都未来星幼儿园",
    services: ["LOGO设计", "VI系统", "宣传物料设计"],
    deliveryDays: 20,
    isFeatured: false,
  },
  {
    id: "case-003",
    slug: "chengdu-bluesky-music",
    title: "蓝天幼儿园园歌与音乐定制",
    category: "media",
    kindergarten: "成都蓝天幼儿园",
    description:
      "为蓝天幼儿园量身创作专属园歌《蓝天下的梦想》，包含词曲创作、编曲录音及多版本制作（演唱版、伴奏版、晨检播放版）。音乐风格温馨明快，旋律朗朗上口，适合3-6岁儿童传唱，同时制作了配套的园所日常背景音乐系统。",
    coverImage: "IMG-321",
    gallery: ["IMG-321", "IMG-322", "IMG-323"],
    testimonial:
      "园歌成了孩子们最喜欢唱的歌，每天早上播放的时候小朋友们都会跟着一起唱。音乐制作质量非常高，完全超出了我们的预期。",
    testimonialAuthor: "陈园长 · 成都蓝天幼儿园",
    services: ["词曲创作", "编曲录音", "多版本制作", "背景音乐系统"],
    deliveryDays: 15,
    isFeatured: false,
  },
  {
    id: "case-004",
    slug: "chengdu-rainbow-sound",
    title: "彩虹幼儿园音效系统设计",
    category: "media",
    kindergarten: "成都彩虹幼儿园",
    description:
      "为彩虹幼儿园设计全套园所音效系统，涵盖晨检提示音、课间铃声、午休音乐、放学提示音等20余个场景音效。所有音效采用原创设计，风格统一且富有童趣，搭配七色彩虹主题，为孩子们营造充满仪式感的园所生活体验。",
    coverImage: "IMG-331",
    gallery: ["IMG-331", "IMG-332", "IMG-333", "IMG-334"],
    testimonial:
      "有思的音效设计让我们的日常管理变得更有仪式感。孩子们听到不同的提示音就知道该做什么，连家长都说我们幼儿园的声音环境特别用心。",
    testimonialAuthor: "张园长 · 成都彩虹幼儿园",
    services: ["场景音效设计", "原创音乐制作", "音频后期处理"],
    deliveryDays: 12,
    isFeatured: false,
  },
  {
    id: "case-005",
    slug: "chengdu-wisdomtree-video",
    title: "智慧树幼儿园品牌宣传片",
    category: "media",
    kindergarten: "成都智慧树幼儿园",
    description:
      "为智慧树幼儿园策划并拍摄品牌宣传片《成长的智慧》，全程4K拍摄，包含航拍园所全景、课堂纪实、亲子互动、毕业典礼等核心场景。后期制作融入动态图形、手绘动画及原创配乐，打造一部3分钟的高品质品牌形象片，用于招生宣传及品牌传播。",
    coverImage: "IMG-341",
    gallery: ["IMG-341", "IMG-342", "IMG-343", "IMG-344", "IMG-345"],
    testimonial:
      "宣传片拍得太好了，发到家长群和朋友圈后反响特别热烈。很多家长说看完视频就决定来我们幼儿园参观。有思团队非常专业，拍摄过程对孩子也很有耐心。",
    testimonialAuthor: "刘园长 · 成都智慧树幼儿园",
    services: ["视频策划", "4K拍摄", "后期制作", "动画设计", "原创配乐"],
    deliveryDays: 25,
    isFeatured: true,
  },
  {
    id: "case-006",
    slug: "chengdu-star-ip",
    title: "星星幼儿园IP形象设计",
    category: "ip",
    kindergarten: "成都星星幼儿园",
    description:
      "为星星幼儿园打造专属IP形象「星宝」系列，包含主IP形象设计、表情包系统、延展角色家族及全套IP应用规范。星宝以小星星为原型，拥有丰富的表情和动作，可应用于园所标识、教具、服装、周边产品等多个场景，成为孩子们喜爱的园所伙伴。",
    coverImage: "IMG-351",
    gallery: ["IMG-351", "IMG-352", "IMG-353", "IMG-354", "IMG-355", "IMG-356"],
    testimonial:
      "星宝成了我们幼儿园的明星！孩子们每天都要跟门口的星宝立牌打招呼，家长群里星宝的表情包使用率超高。IP形象让我们的品牌有了灵魂。",
    testimonialAuthor: "赵园长 · 成都星星幼儿园",
    services: ["IP形象设计", "表情包设计", "延展角色设计", "IP应用规范"],
    deliveryDays: 22,
    isFeatured: false,
  },
];
