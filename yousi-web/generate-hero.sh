#!/bin/bash
# 有思网 Hero 大图生成脚本
# 统一 Apple 产品美学风格，使用 4.5 模型
# 每两张一组，间隔等待

OUTPUT_DIR="/Users/hongyang/Desktop/洪扬/Web/有思网/yousi-web/public/images/hero"
STYLE="Apple product aesthetic, minimalist design, pure black gradient background, premium studio lighting, clean sophisticated composition, dramatic rim lighting, subtle reflections, ultra high quality, 8k"

echo "=== 第1组：品牌服务 Hero + 分隔图 ==="
echo "生成 services-hero..."
dreamina text2image --prompt="Brand design concept, elegant typography and color palette cards floating in dark space, ${STYLE}" --ratio=16:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-services-hero.json
echo ""
echo "生成 services-mid..."
dreamina text2image --prompt="Brand strategy materials spread on dark surface, logo mockups, business cards, stationery design, ${STYLE}" --ratio=21:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-services-mid.json
echo ""
echo "等待30秒..."
sleep 30

echo "=== 第2组：IP服务 Hero + 分隔图 ==="
echo "生成 ip-hero..."
dreamina text2image --prompt="Cute cartoon mascot character design showcase, multiple IP character variations on dark pedestal, children brand design, ${STYLE}" --ratio=16:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-ip-hero.json
echo ""
echo "生成 ip-mid..."
dreamina text2image --prompt="IP character merchandise and licensing products, plush toys and stationery with cute mascot, dark premium background, ${STYLE}" --ratio=21:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-ip-mid.json
echo ""
echo "等待30秒..."
sleep 30

echo "=== 第3组：音乐服务 Hero + 分隔图 ==="
echo "生成 music-hero..."
dreamina text2image --prompt="Music production studio with instruments and sound waves visualization, piano keys and headphones on dark background, ${STYLE}" --ratio=16:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-music-hero.json
echo ""
echo "生成 music-mid..."
dreamina text2image --prompt="Sound wave visualization and musical notes floating in dark space, equalizer bars with blue accent glow, ${STYLE}" --ratio=21:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-music-mid.json
echo ""
echo "等待30秒..."
sleep 30

echo "=== 第4组：视频服务 Hero + 分隔图 ==="
echo "生成 video-hero..."
dreamina text2image --prompt="Professional video production scene, cinematic camera and film equipment on dark background, movie clapperboard, ${STYLE}" --ratio=16:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-video-hero.json
echo ""
echo "生成 video-mid..."
dreamina text2image --prompt="Video editing timeline and film frames floating in dark space, cinematic composition, ${STYLE}" --ratio=21:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-video-mid.json
echo ""
echo "等待30秒..."
sleep 30

echo "=== 第5组：技术支持 Hero + 分隔图 ==="
echo "生成 tech-hero..."
dreamina text2image --prompt="Modern technology workspace, code editor on screen with glowing UI elements, developer setup on dark background, ${STYLE}" --ratio=16:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-tech-hero.json
echo ""
echo "生成 tech-mid..."
dreamina text2image --prompt="Digital interface and app development concept, floating UI screens and code elements in dark space, ${STYLE}" --ratio=21:9 --model_version=4.5 --poll=120 2>&1 | tee /tmp/dreamina-tech-mid.json

echo ""
echo "=== 全部 Hero 大图生成完成 ==="
