import { NextResponse } from "next/server";
import { getAuth } from "@/lib/auth";

export async function GET() {
  const auth = await getAuth();
  if (!auth) return NextResponse.json({ error: "未登录" }, { status: 401 });
  return NextResponse.json({ username: auth.username });
}
