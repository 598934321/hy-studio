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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customer, phone, kindergarten, wechat, items, total, notes } = body;

    if (!customer || !phone || !items || !total) {
      return NextResponse.json({ error: "请填写必要信息" }, { status: 400 });
    }

    const date = new Date();
    const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    const orderNo = `YS${dateStr}${rand}`;

    const order = await prisma.order.create({
      data: { orderNo, customer, phone, kindergarten, wechat, items, total, notes },
    });

    return NextResponse.json({ success: true, orderNo: order.orderNo, id: order.id });
  } catch {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
