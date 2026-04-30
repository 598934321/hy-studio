import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get("category");
    const where = category ? { category, isActive: true } : { isActive: true };
    const services = await prisma.service.findMany({ where, orderBy: { createdAt: "asc" } });
    return NextResponse.json(services);
  } catch {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
