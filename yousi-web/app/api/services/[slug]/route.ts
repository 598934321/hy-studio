import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const service = await prisma.service.findUnique({ where: { slug } });
    if (!service) return NextResponse.json({ error: "服务不存在" }, { status: 404 });
    return NextResponse.json(service);
  } catch {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    await requireAuth();
    const { slug } = await params;
    const body = await req.json();
    const service = await prisma.service.update({ where: { slug }, data: body });
    return NextResponse.json(service);
  } catch (e) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    await requireAuth();
    const { slug } = await params;
    await prisma.service.delete({ where: { slug } });
    return NextResponse.json({ success: true });
  } catch (e) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
