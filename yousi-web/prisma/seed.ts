import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter }) as unknown as PrismaClient;

async function main() {
  console.log("🌱 开始导入数据...");

  // 1. 创建默认管理员
  const adminPassword = await bcrypt.hash("admin123", 12);
  await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: { username: "admin", password: adminPassword },
  });
  console.log("✅ 管理员账号创建完成 (admin / admin123)");

  // 2. 导入网站设置
  const settings = [
    { key: "siteName", value: "有思网" },
    { key: "siteDescription", value: "专注幼儿园设计的一站式品牌服务平台" },
    { key: "logoUrl", value: "/images/logo.png" },
    { key: "phone", value: "400-888-8888" },
    { key: "email", value: "contact@yousi.com" },
    { key: "wechat", value: "yousi_design" },
    { key: "address", value: "北京市朝阳区xxx大厦" },
  ];
  for (const s of settings) {
    await prisma.setting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: s,
    });
  }
  console.log("✅ 网站设置导入完成");

  // 3. 导入服务数据
  const allServices = [
    // brand services
    {
      slug: "brand-strategy", category: "services", name: "品牌策略",
      tagline: "从零到一，打造幼儿园专属品牌体系",
      description: "专业品牌顾问团队，通过市场调研、竞品分析、品牌定位，为幼儿园量身定制品牌战略方案，让品牌从理念到落地一步到位。",
      price: "¥4,980 起", heroImage: "/images/services/brand-strategy.webp",
      features: [
        { icon: "target", title: "精准定位", description: "深度调研，找到品牌核心差异点" },
        { icon: "compass", title: "体系完整", description: "从理念到视觉，一站式品牌体系" },
        { icon: "users", title: "顾问跟踪", description: "专属品牌顾问全程陪伴落地" },
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
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "品牌定位非常精准，家长满意度提升了40%。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
        { id: "case-002", title: "未来星幼儿园视觉焕新", kindergarten: "成都未来星幼儿园", testimonial: "顾问团队很专业，品牌焕然一新。", coverImage: "/images/thumbnails/kindergarten-02.webp" },
      ],
      relatedServices: [
        { name: "视觉设计", slug: "visual-design", category: "services", price: "¥2,980 起", icon: "palette" },
        { name: "内容创作", slug: "content-creation", category: "services", price: "¥1,980 起", icon: "edit" },
        { name: "IP形象设计", slug: "ip-design", category: "ip", price: "¥12,800 起", icon: "star" },
      ],
    },
    {
      slug: "visual-design", category: "services", name: "视觉设计",
      tagline: "让每一处视觉都传递品牌温度",
      description: "专业设计团队，从LOGO到园所环境，从招生物料到线上视觉，全方位打造幼儿园品牌视觉体系，让家长一眼记住你。",
      price: "¥2,980 起", heroImage: "/images/services/visual-design.webp",
      features: [
        { icon: "palette", title: "风格统一", description: "全场景视觉风格一致，强化品牌记忆" },
        { icon: "layers", title: "多场景适配", description: "线上+线下，一套体系全覆盖" },
        { icon: "printer", title: "即印即用", description: "提供印刷级源文件，交付即可落地" },
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
        { id: "case-002", title: "未来星幼儿园视觉焕新", kindergarten: "成都未来星幼儿园", testimonial: "设计很有质感，家长都说我们幼儿园看起来更专业了。", coverImage: "/images/thumbnails/kindergarten-02.webp" },
        { id: "case-006", title: "星星幼儿园IP形象设计", kindergarten: "成都星星幼儿园", testimonial: "海报效果特别好，招生转化率明显提升。", coverImage: "/images/thumbnails/kindergarten-06.webp" },
      ],
      relatedServices: [
        { name: "品牌策略", slug: "brand-strategy", category: "services", price: "¥4,980 起", icon: "target" },
        { name: "内容创作", slug: "content-creation", category: "services", price: "¥1,980 起", icon: "edit" },
        { name: "企业宣传片", slug: "corporate-video", category: "video", price: "¥9,800 起", icon: "video" },
      ],
    },
    {
      slug: "content-creation", category: "services", name: "内容创作",
      tagline: "好内容，让品牌自己会说话",
      description: "专业内容团队，为幼儿园提供公众号运营、短视频脚本、活动策划等一站式内容服务，用好内容吸引好家长。",
      price: "¥1,980 起", heroImage: "/images/services/content-creation.webp",
      features: [
        { icon: "edit", title: "原创内容", description: "专业文案团队，篇篇原创不重复" },
        { icon: "calendar", title: "定期更新", description: "按周/月排期，内容持续输出" },
        { icon: "trending-up", title: "数据驱动", description: "根据数据反馈优化内容方向" },
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
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "文章阅读量从200涨到2000+，效果太明显了。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
        { id: "case-005", title: "智慧树幼儿园品牌宣传片", kindergarten: "成都智慧树幼儿园", testimonial: "3个月涨粉5000+，招生电话明显多了。", coverImage: "/images/thumbnails/kindergarten-05.webp" },
      ],
      relatedServices: [
        { name: "品牌策略", slug: "brand-strategy", category: "services", price: "¥4,980 起", icon: "target" },
        { name: "视觉设计", slug: "visual-design", category: "services", price: "¥2,980 起", icon: "palette" },
        { name: "短视频制作", slug: "short-video", category: "video", price: "¥2,980 起", icon: "video" },
      ],
    },
    // music services
    {
      slug: "commercial-music", category: "music", name: "商业配乐",
      tagline: "为您的幼儿园打造专属品牌音乐",
      description: "AI辅助创作，专业音乐人制作，打造独一无二的幼儿园品牌音乐，让每一次播放都传递品牌价值。",
      price: "¥3,980 起", heroImage: "/images/services/commercial-music.webp",
      features: [
        { icon: "clock", title: "3天出稿", description: "AI辅助创作，快速输出初稿" },
        { icon: "refresh", title: "3次修改", description: "不满意免费修改到满意" },
        { icon: "shield", title: "永久商用", description: "交付即用，无限使用" },
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
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "效果超出预期！孩子们特别喜欢新的园歌。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
        { id: "case-002", title: "未来星幼儿园视觉焕新", kindergarten: "成都未来星幼儿园", testimonial: "专业又高效，3天就出了初稿。", coverImage: "/images/thumbnails/kindergarten-02.webp" },
      ],
      relatedServices: [
        { name: "音效设计", slug: "sound-design", category: "music", price: "¥1,980 起", icon: "volume" },
        { name: "企业宣传片", slug: "corporate-video", category: "video", price: "¥9,800 起", icon: "video" },
        { name: "IP形象设计", slug: "ip-design", category: "ip", price: "¥12,800 起", icon: "star" },
      ],
    },
    {
      slug: "music-production", category: "music", name: "音乐制作",
      tagline: "园歌、主题曲、企业歌，专业编曲录制",
      description: "专业音乐人团队，从作词作曲到编曲录制，一站式音乐制作服务，打造幼儿园专属音乐品牌。",
      price: "¥5,980 起", heroImage: "/images/services/music-production.webp",
      features: [
        { icon: "mic", title: "专业录制", description: "专业录音棚，高品质音频" },
        { icon: "pen", title: "原创词曲", description: "专属词曲创作，独一无二" },
        { icon: "music", title: "多版本", description: "提供多种风格版本" },
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
        { id: "case-003", title: "蓝天幼儿园园歌定制", kindergarten: "成都蓝天幼儿园", testimonial: "园歌朗朗上口，孩子们都会唱了。", coverImage: "/images/thumbnails/kindergarten-03.webp" },
      ],
      relatedServices: [
        { name: "商业配乐", slug: "commercial-music", category: "music", price: "¥3,980 起", icon: "music" },
        { name: "音效设计", slug: "sound-design", category: "music", price: "¥1,980 起", icon: "volume" },
        { name: "短视频制作", slug: "short-video", category: "video", price: "¥2,980 起", icon: "video" },
      ],
    },
    {
      slug: "sound-design", category: "music", name: "音效设计",
      tagline: "广播、活动、提示音，专业音效定制",
      description: "从广播体操到活动提示音，专业音效设计让幼儿园的每一个声音都成为品牌记忆点。",
      price: "¥1,980 起", heroImage: "/images/services/sound-design.webp",
      features: [
        { icon: "zap", title: "快速交付", description: "2-3天完成，即刻使用" },
        { icon: "layers", title: "多种风格", description: "可爱、活泼、温馨可选" },
        { icon: "headphones", title: "高品质", description: "48kHz专业音质" },
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
        { id: "case-004", title: "彩虹幼儿园音效系统设计", kindergarten: "成都彩虹幼儿园", testimonial: "广播体操音效孩子们特别喜欢。", coverImage: "/images/thumbnails/kindergarten-04.webp" },
      ],
      relatedServices: [
        { name: "商业配乐", slug: "commercial-music", category: "music", price: "¥3,980 起", icon: "music" },
        { name: "音乐制作", slug: "music-production", category: "music", price: "¥5,980 起", icon: "music" },
        { name: "产品广告", slug: "product-ad", category: "video", price: "¥6,800 起", icon: "video" },
      ],
    },
    // video services
    {
      slug: "corporate-video", category: "video", name: "企业宣传片",
      tagline: "用镜头讲述幼儿园的品牌故事",
      description: "专业导演团队执导，4K超清拍摄，从策划到成片一站式服务，全方位展示幼儿园的办学理念、师资力量和校园文化，打造有温度的品牌宣传片。",
      price: "¥9,800 起", heroImage: "/images/services/corporate-video.webp",
      features: [
        { icon: "film", title: "4K拍摄", description: "电影级画质，展现校园之美" },
        { icon: "users", title: "专业团队", description: "导演+摄影+剪辑全程服务" },
        { icon: "edit", title: "脚本定制", description: "根据品牌定位量身策划" },
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
        { id: "case-005", title: "智慧树幼儿园品牌宣传片", kindergarten: "成都智慧树幼儿园", testimonial: "宣传片拍得太好了，家长看完都说想来我们园！", coverImage: "/images/thumbnails/kindergarten-05.webp" },
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "招生季播放后，咨询量提升了40%。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
      ],
      relatedServices: [
        { name: "产品广告", slug: "product-ad", category: "video", price: "¥6,800 起", icon: "video" },
        { name: "短视频制作", slug: "short-video", category: "video", price: "¥2,980 起", icon: "video" },
        { name: "商业配乐", slug: "commercial-music", category: "music", price: "¥3,980 起", icon: "music" },
      ],
    },
    {
      slug: "product-ad", category: "video", name: "产品广告",
      tagline: "让幼儿园特色课程一目了然",
      description: "针对幼儿园特色课程、活动项目或周边产品，制作精炼有力的广告视频，突出核心卖点，适用于招生季投放、朋友圈推广和线下展示。",
      price: "¥6,800 起", heroImage: "/images/services/product-ad.webp",
      features: [
        { icon: "target", title: "精准定位", description: "锁定目标家长群体，高效转化" },
        { icon: "zap", title: "快速出片", description: "7个工作日交付成品" },
        { icon: "share", title: "多平台适配", description: "抖音、微信、线下全渠道覆盖" },
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
        { id: "case-002", title: "未来星幼儿园视觉焕新", kindergarten: "成都未来星幼儿园", testimonial: "广告投出去第一天就收到了好几个咨询。", coverImage: "/images/thumbnails/kindergarten-02.webp" },
        { id: "case-004", title: "彩虹幼儿园音效系统设计", kindergarten: "成都彩虹幼儿园", testimonial: "朋友圈广告效果很好，家长转发率很高。", coverImage: "/images/thumbnails/kindergarten-04.webp" },
      ],
      relatedServices: [
        { name: "企业宣传片", slug: "corporate-video", category: "video", price: "¥9,800 起", icon: "video" },
        { name: "短视频制作", slug: "short-video", category: "video", price: "¥2,980 起", icon: "video" },
        { name: "音效设计", slug: "sound-design", category: "music", price: "¥1,980 起", icon: "volume" },
      ],
    },
    {
      slug: "short-video", category: "video", name: "短视频制作",
      tagline: "用短视频让更多家长认识你",
      description: "针对抖音、小红书、视频号等平台，批量制作幼儿园日常记录、活动花絮、教师风采等短视频内容，持续输出优质内容，打造幼儿园线上影响力。",
      price: "¥2,980 起", heroImage: "/images/services/short-video.webp",
      features: [
        { icon: "package", title: "批量制作", description: "一次拍摄产出多条内容" },
        { icon: "trending", title: "爆款策划", description: "紧跟热点，提升曝光量" },
        { icon: "repeat", title: "持续更新", description: "可按月订阅，长期合作优惠" },
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
        { id: "case-005", title: "智慧树幼儿园品牌宣传片", kindergarten: "成都智慧树幼儿园", testimonial: "3个月涨粉2万，好多家长都是刷抖音来的。", coverImage: "/images/thumbnails/kindergarten-05.webp" },
        { id: "case-003", title: "蓝天幼儿园园歌定制", kindergarten: "成都蓝天幼儿园", testimonial: "每次活动的短视频家长都疯狂转发。", coverImage: "/images/thumbnails/kindergarten-03.webp" },
      ],
      relatedServices: [
        { name: "企业宣传片", slug: "corporate-video", category: "video", price: "¥9,800 起", icon: "video" },
        { name: "产品广告", slug: "product-ad", category: "video", price: "¥6,800 起", icon: "video" },
        { name: "音乐制作", slug: "music-production", category: "music", price: "¥5,980 起", icon: "music" },
      ],
    },
    // ip services
    {
      slug: "ip-design", category: "ip", name: "IP形象设计",
      tagline: "为您的幼儿园打造独一无二的品牌吉祥物",
      description: "专业设计师团队，从创意构思到形象落地，打造专属幼儿园IP形象，让品牌形象深入人心，成为孩子们喜爱的好朋友。",
      price: "¥12,800 起", heroImage: "/images/services/ip-design.webp",
      features: [
        { icon: "palette", title: "原创设计", description: "100%原创，独一无二的品牌形象" },
        { icon: "layers", title: "多场景应用", description: "平面、立体、动态多维度呈现" },
        { icon: "shield", title: "版权归属", description: "设计完成即获完整版权" },
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
        { id: "case-006", title: "星星幼儿园IP形象设计", kindergarten: "成都星星幼儿园", testimonial: "小朋友们超级喜欢新的吉祥物，每天都要抱着玩偶睡觉！", coverImage: "/images/thumbnails/kindergarten-06.webp" },
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "设计团队非常专业，把我们的想法完美呈现出来了。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
      ],
      relatedServices: [
        { name: "IP授权运营", slug: "ip-licensing", category: "ip", price: "¥8,800 起", icon: "award" },
        { name: "衍生品开发", slug: "ip-merchandise", category: "ip", price: "¥6,800 起", icon: "gift" },
        { name: "企业宣传片", slug: "corporate-video", category: "video", price: "¥9,800 起", icon: "video" },
      ],
    },
    {
      slug: "ip-licensing", category: "ip", name: "IP授权运营",
      tagline: "让您的IP形象创造更大商业价值",
      description: "专业的IP授权运营服务，从品牌授权到联名合作，帮助幼儿园IP形象实现商业化运营，拓展品牌影响力与收益渠道。",
      price: "¥8,800 起", heroImage: "/images/services/ip-licensing.webp",
      features: [
        { icon: "award", title: "品牌授权", description: "规范授权体系，保障品牌价值" },
        { icon: "trending-up", title: "商业拓展", description: "联名合作，开拓多元收入" },
        { icon: "shield", title: "版权保护", description: "全程法律护航，维护IP权益" },
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
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "通过IP授权合作，品牌知名度提升了很多，家长们都很认可。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
        { id: "case-005", title: "智慧树幼儿园品牌宣传片", kindergarten: "成都智慧树幼儿园", testimonial: "运营团队非常专业，帮我们对接了优质的合作资源。", coverImage: "/images/thumbnails/kindergarten-05.webp" },
      ],
      relatedServices: [
        { name: "IP形象设计", slug: "ip-design", category: "ip", price: "¥12,800 起", icon: "star" },
        { name: "衍生品开发", slug: "ip-merchandise", category: "ip", price: "¥6,800 起", icon: "gift" },
        { name: "商业配乐", slug: "commercial-music", category: "music", price: "¥3,980 起", icon: "music" },
      ],
    },
    {
      slug: "ip-merchandise", category: "ip", name: "衍生品开发",
      tagline: "让IP形象走进孩子们的日常生活",
      description: "从毛绒玩具到文具周边，将幼儿园IP形象开发成各类衍生产品，增强品牌粘性，创造额外营收渠道。",
      price: "¥6,800 起", heroImage: "/images/services/ip-merchandise.webp",
      features: [
        { icon: "gift", title: "品类丰富", description: "玩具、文具、服饰等多品类覆盖" },
        { icon: "check", title: "品质保障", description: "严格品控，安全环保材料" },
        { icon: "refresh", title: "灵活定制", description: "小批量起订，按需生产" },
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
        { id: "case-004", title: "彩虹幼儿园音效系统设计", kindergarten: "成都彩虹幼儿园", testimonial: "孩子们特别喜欢印有吉祥物的书包和文具，家长们也纷纷购买。", coverImage: "/images/thumbnails/kindergarten-04.webp" },
        { id: "case-002", title: "未来星幼儿园视觉焕新", kindergarten: "成都未来星幼儿园", testimonial: "衍生品质量很好，成为了幼儿园的一大特色。", coverImage: "/images/thumbnails/kindergarten-02.webp" },
      ],
      relatedServices: [
        { name: "IP形象设计", slug: "ip-design", category: "ip", price: "¥12,800 起", icon: "star" },
        { name: "IP授权运营", slug: "ip-licensing", category: "ip", price: "¥8,800 起", icon: "award" },
        { name: "短视频制作", slug: "short-video", category: "video", price: "¥2,980 起", icon: "video" },
      ],
    },
    // tech services
    {
      slug: "web-dev", category: "tech", name: "网站开发",
      tagline: "为幼儿园打造专业品牌形象官网",
      description: "响应式网站设计与开发，适配PC、平板、手机全端访问，助力幼儿园建立专业线上品牌形象，提升招生转化率。",
      price: "¥5,800 起", heroImage: "/images/services/web-dev.webp",
      features: [
        { icon: "layout", title: "响应式设计", description: "自适应全端设备，访问体验一致" },
        { icon: "zap", title: "7天上线", description: "高效开发流程，快速交付上线" },
        { icon: "shield", title: "安全稳定", description: "HTTPS加密，全年99.9%可用性" },
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
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "网站上线后咨询量提升了40%，家长都说看着很专业。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
        { id: "case-005", title: "智慧树幼儿园品牌宣传片", kindergarten: "成都智慧树幼儿园", testimonial: "新版网站漂亮又好用，报名转化率明显提高了。", coverImage: "/images/thumbnails/kindergarten-05.webp" },
      ],
      relatedServices: [
        { name: "小程序开发", slug: "mini-program", category: "tech", price: "¥8,800 起", icon: "smartphone" },
        { name: "视觉设计", slug: "visual-design", category: "services", price: "¥2,980 起", icon: "palette" },
        { name: "短视频制作", slug: "short-video", category: "video", price: "¥2,980 起", icon: "video" },
      ],
    },
    {
      slug: "mini-program", category: "tech", name: "小程序开发",
      tagline: "家园共育，一码直达",
      description: "微信小程序定制开发，集成家园互动、在线报名、课程展示、通知推送等核心功能，让家长随时掌握孩子在园动态。",
      price: "¥8,800 起", heroImage: "/images/services/mini-program.webp",
      features: [
        { icon: "smartphone", title: "即开即用", description: "微信扫码即可使用，无需下载安装" },
        { icon: "bell", title: "消息推送", description: "重要通知实时推送到家长手机" },
        { icon: "users", title: "家园互动", description: "照片、视频、动态随时分享" },
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
        { id: "case-003", title: "蓝天幼儿园园歌定制", kindergarten: "成都蓝天幼儿园", testimonial: "家长使用率超过95%，沟通效率大幅提升。", coverImage: "/images/thumbnails/kindergarten-03.webp" },
        { id: "case-001", title: "阳光幼儿园品牌全案升级", kindergarten: "成都阳光幼儿园", testimonial: "线上报名功能太方便了，招生季轻松了很多。", coverImage: "/images/thumbnails/kindergarten-01.webp" },
      ],
      relatedServices: [
        { name: "网站开发", slug: "web-dev", category: "tech", price: "¥5,800 起", icon: "layout" },
        { name: "系统定制", slug: "system-custom", category: "tech", price: "¥15,800 起", icon: "code" },
        { name: "商业配乐", slug: "commercial-music", category: "music", price: "¥3,980 起", icon: "music" },
      ],
    },
    {
      slug: "system-custom", category: "tech", name: "系统定制",
      tagline: "幼儿园数字化管理一站式解决方案",
      description: "深度定制幼儿园管理系统，涵盖教务管理、财务管理、人事管理、资产管理等模块，全面提升园所运营效率。",
      price: "¥15,800 起", heroImage: "/images/services/system-custom.webp",
      features: [
        { icon: "settings", title: "按需定制", description: "根据园所实际需求灵活配置功能模块" },
        { icon: "database", title: "数据驱动", description: "可视化报表，数据辅助经营决策" },
        { icon: "lock", title: "安全合规", description: "数据加密存储，符合教育行业规范" },
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
        { id: "case-002", title: "未来星幼儿园视觉焕新", kindergarten: "成都未来星幼儿园", testimonial: "5个园区统一管理，运营效率提升了60%。", coverImage: "/images/thumbnails/kindergarten-02.webp" },
        { id: "case-004", title: "彩虹幼儿园音效系统设计", kindergarten: "成都彩虹幼儿园", testimonial: "系统上线后老师工作量明显减轻，家长也很满意。", coverImage: "/images/thumbnails/kindergarten-04.webp" },
      ],
      relatedServices: [
        { name: "小程序开发", slug: "mini-program", category: "tech", price: "¥8,800 起", icon: "smartphone" },
        { name: "网站开发", slug: "web-dev", category: "tech", price: "¥5,800 起", icon: "layout" },
        { name: "IP形象设计", slug: "ip-design", category: "ip", price: "¥12,800 起", icon: "star" },
      ],
    },
  ];

  for (const svc of allServices) {
    await prisma.service.upsert({
      where: { slug: svc.slug },
      update: svc,
      create: svc,
    });
  }
  console.log(`✅ ${allServices.length} 个服务导入完成`);

  // 4. 导入案例
  const allCases = [
    {
      slug: "chengdu-sunshine-brand", title: "阳光幼儿园品牌全案升级", category: "brand",
      kindergarten: "成都阳光幼儿园",
      description: "为成都阳光幼儿园打造全新品牌体系，包括品牌定位、视觉识别系统、园所空间导视及全套品牌应用物料。以「温暖生长」为核心理念，采用暖橙色与自然绿为主色调，塑造阳光、健康、富有生命力的品牌形象，助力园所在区域内建立强烈的品牌辨识度。",
      coverImage: "/images/cases/case-001/cover.webp",
      gallery: ["/images/cases/case-001/01.webp", "/images/cases/case-001/02.webp", "/images/cases/case-001/03.webp", "/images/cases/case-001/04.webp", "/images/cases/case-001/05.webp"],
      testimonial: "有思团队对幼教行业理解深刻，从品牌策划到落地执行都非常专业。新品牌形象让家长的咨询量提升了40%，很多家长说第一眼就被我们的视觉形象吸引了。",
      testimonialAuthor: "李园长 · 成都阳光幼儿园",
      services: ["品牌策略", "LOGO设计", "VI系统", "导视系统", "品牌物料"],
      deliveryDays: 30, isFeatured: true,
    },
    {
      slug: "chengdu-futurestar-visual", title: "未来星幼儿园视觉焕新", category: "visual",
      kindergarten: "成都未来星幼儿园",
      description: "为未来星幼儿园进行视觉形象全面焕新，重新设计LOGO及VI系统，融入科技感与童趣元素。以星球、火箭为设计灵感，运用渐变蓝紫色系，打造兼具未来感与亲和力的视觉语言，应用于园所标识、宣传物料及线上平台。",
      coverImage: "/images/cases/case-002/cover.webp",
      gallery: ["/images/cases/case-002/01.webp", "/images/cases/case-002/02.webp", "/images/cases/case-002/03.webp"],
      testimonial: "新LOGO和视觉系统太棒了，孩子们特别喜欢那个小火箭的图案。家长们也觉得我们幼儿园的形象焕然一新，招生季报名明显比去年积极。",
      testimonialAuthor: "王园长 · 成都未来星幼儿园",
      services: ["LOGO设计", "VI系统", "宣传物料设计"],
      deliveryDays: 20, isFeatured: false,
    },
    {
      slug: "chengdu-bluesky-music", title: "蓝天幼儿园园歌与音乐定制", category: "media",
      kindergarten: "成都蓝天幼儿园",
      description: "为蓝天幼儿园量身创作专属园歌《蓝天下的梦想》，包含词曲创作、编曲录音及多版本制作。",
      coverImage: "/images/cases/case-003/cover.webp",
      gallery: ["/images/cases/case-003/01.webp", "/images/cases/case-003/02.webp"],
      testimonial: "园歌成了孩子们最喜欢唱的歌，每天早上播放的时候小朋友们都会跟着一起唱。",
      testimonialAuthor: "陈园长 · 成都蓝天幼儿园",
      services: ["词曲创作", "编曲录音", "多版本制作", "背景音乐系统"],
      deliveryDays: 15, isFeatured: false,
    },
    {
      slug: "chengdu-rainbow-sound", title: "彩虹幼儿园音效系统设计", category: "media",
      kindergarten: "成都彩虹幼儿园",
      description: "为彩虹幼儿园设计全套园所音效系统，涵盖晨检提示音、课间铃声、午休音乐、放学提示音等20余个场景音效。",
      coverImage: "/images/cases/case-004/cover.webp",
      gallery: ["/images/cases/case-004/01.webp", "/images/cases/case-004/02.webp", "/images/cases/case-004/03.webp"],
      testimonial: "有思的音效设计让我们的日常管理变得更有仪式感。",
      testimonialAuthor: "张园长 · 成都彩虹幼儿园",
      services: ["场景音效设计", "原创音乐制作", "音频后期处理"],
      deliveryDays: 12, isFeatured: false,
    },
    {
      slug: "chengdu-wisdomtree-video", title: "智慧树幼儿园品牌宣传片", category: "media",
      kindergarten: "成都智慧树幼儿园",
      description: "为智慧树幼儿园策划并拍摄品牌宣传片《成长的智慧》，全程4K拍摄。",
      coverImage: "/images/cases/case-005/cover.webp",
      gallery: ["/images/cases/case-005/01.webp", "/images/cases/case-005/02.webp", "/images/cases/case-005/03.webp", "/images/cases/case-005/04.webp"],
      testimonial: "宣传片拍得太好了，发到家长群和朋友圈后反响特别热烈。",
      testimonialAuthor: "刘园长 · 成都智慧树幼儿园",
      services: ["视频策划", "4K拍摄", "后期制作", "动画设计", "原创配乐"],
      deliveryDays: 25, isFeatured: true,
    },
    {
      slug: "chengdu-star-ip", title: "星星幼儿园IP形象设计", category: "ip",
      kindergarten: "成都星星幼儿园",
      description: "为星星幼儿园打造专属IP形象「星宝」系列，包含主IP形象设计、表情包系统、延展角色家族及全套IP应用规范。",
      coverImage: "/images/cases/case-006/cover.webp",
      gallery: ["/images/cases/case-006/01.webp", "/images/cases/case-006/02.webp", "/images/cases/case-006/03.webp", "/images/cases/case-006/04.webp", "/images/cases/case-006/05.webp"],
      testimonial: "星宝成了我们幼儿园的明星！孩子们每天都要跟门口的星宝立牌打招呼。",
      testimonialAuthor: "赵园长 · 成都星星幼儿园",
      services: ["IP形象设计", "表情包设计", "延展角色设计", "IP应用规范"],
      deliveryDays: 22, isFeatured: false,
    },
  ];

  for (const c of allCases) {
    await prisma.caseStudy.upsert({
      where: { slug: c.slug },
      update: c,
      create: c,
    });
  }
  console.log(`✅ ${allCases.length} 个案例导入完成`);

  // 5. 导入套餐
  const allPackages = [
    {
      slug: "lite", name: "轻量版", tagline: "新园起步优选，快速建立品牌基础",
      price: 2980, originalPrice: 4980, isRecommended: false,
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
      deliveryDays: 15, warrantyDays: 30,
    },
    {
      slug: "standard", name: "标准版", tagline: "全方位品牌升级，打造区域标杆园所",
      price: 9980, originalPrice: 15800, isRecommended: true,
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
      serviceNames: ["品牌策略", "LOGO设计", "完整VI", "导视系统", "IP形象设计", "社交媒体套件"],
      deliveryDays: 25, warrantyDays: 90,
    },
    {
      slug: "premium", name: "尊享版", tagline: "旗舰级品牌全案，塑造行业领导品牌",
      price: 29800, originalPrice: 45800, isRecommended: false,
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
      serviceNames: ["品牌策略", "LOGO设计", "完整VI", "导视系统", "IP形象全家福", "宣传片拍摄", "园歌定制", "社交媒体套件", "年度顾问"],
      deliveryDays: 45, warrantyDays: 365,
    },
  ];

  for (const pkg of allPackages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: pkg,
      create: pkg,
    });
  }
  console.log(`✅ ${allPackages.length} 个套餐导入完成`);

  // 6. 创建示例咨询
  const sampleInquiries = [
    { name: "张女士", kindergarten: "成都小太阳幼儿园", phone: "13800138001", wechat: "zhang_mm", service: "品牌全案设计", message: "想了解品牌升级方案", status: "pending" },
    { name: "李园长", kindergarten: "北京蓝天幼儿园", phone: "13900139002", service: "Logo设计", message: "需要重新设计LOGO", status: "contacted" },
    { name: "王老师", kindergarten: "上海彩虹幼儿园", phone: "13700137003", wechat: "wang_t", service: "IP形象设计", message: "想给幼儿园设计一个吉祥物", status: "converted" },
  ];

  for (const inq of sampleInquiries) {
    await prisma.inquiry.create({ data: inq });
  }
  console.log(`✅ ${sampleInquiries.length} 条示例咨询导入完成`);

  // 7. 创建示例订单
  const sampleOrders = [
    { orderNo: "YS20260401001", customer: "成都阳光幼儿园", phone: "13800000001", items: [{ name: "品牌策略", price: 4980, quantity: 1 }], total: 4980, status: "completed" },
    { orderNo: "YS20260401002", customer: "成都未来星幼儿园", phone: "13800000002", items: [{ name: "视觉设计", price: 2980, quantity: 1 }, { name: "短视频制作", price: 2980, quantity: 1 }], total: 5960, status: "in_progress" },
    { orderNo: "YS20260402001", customer: "成都蓝天幼儿园", phone: "13800000003", items: [{ name: "音乐制作", price: 5980, quantity: 1 }], total: 5980, status: "pending" },
  ];

  for (const order of sampleOrders) {
    await prisma.order.upsert({
      where: { orderNo: order.orderNo },
      update: order,
      create: order,
    });
  }
  console.log(`✅ ${sampleOrders.length} 个示例订单导入完成`);

  console.log("\n🎉 数据导入完成！");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
