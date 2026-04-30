import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    await requireAuth();
    const status = req.nextUrl.searchParams.get("status");
    const where = status && status !== "all" ? { status } : {};
    const inquiries = await prisma.inquiry.findMany({ where, orderBy: { createdAt: "desc" } });
    return NextResponse.json(inquiries);
  } catch (e) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, kindergarten, phone, wechat, service, message } = body;

    if (!name || !kindergarten || !phone || !service) {
      return NextResponse.json({ error: "请填写必填项" }, { status: 400 });
    }

    const inquiry = await prisma.inquiry.create({
      data: { name, kindergarten, phone, wechat, service, message },
    });

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
