import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    await requireAuth();
    const status = req.nextUrl.searchParams.get("status");
    const where = status && status !== "all" ? { status } : {};
    const orders = await prisma.order.findMany({ where, orderBy: { createdAt: "desc" } });
    return NextResponse.json(orders);
  } catch (e) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
