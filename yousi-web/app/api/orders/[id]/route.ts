import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAuth();
    const { id } = await params;
    const body = await req.json();
    const order = await prisma.order.update({ where: { id }, data: { status: body.status } });
    return NextResponse.json(order);
  } catch (e) {
    if (e instanceof Response) return e;
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
