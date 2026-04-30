import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const packages = await prisma.package.findMany({ orderBy: { price: "asc" } });
    return NextResponse.json(packages);
  } catch {
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
