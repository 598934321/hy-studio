import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get("category");
    const featured = req.nextUrl.searchParams.get("featured");
    const where: Record<string, unknown> = {};
    if (category) where.category = category;
    if (featured === "true") where.isFeatured = true;
    const cases = await prisma.caseStudy.findMany({ where, orderBy: { createdAt: "asc" } });
    return NextResponse.json(cases);
  } catch {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
