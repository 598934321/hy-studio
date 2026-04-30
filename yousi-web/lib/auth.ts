import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("[FATAL] JWT_SECRET environment variable is not set. Admin auth is disabled.");
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: { adminId: string; username: string }) {
  if (!JWT_SECRET) throw new Error("JWT_SECRET not configured");
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  if (!JWT_SECRET) return null;
  try {
    return jwt.verify(token, JWT_SECRET) as { adminId: string; username: string };
  } catch {
    return null;
  }
}

export async function getAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAuth() {
  const auth = await getAuth();
  if (!auth) throw new Response(JSON.stringify({ error: "未授权" }), { status: 401 });
  return auth;
}
