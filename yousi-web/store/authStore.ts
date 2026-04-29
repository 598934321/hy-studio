import { create } from "zustand";

export interface User {
  phone: string;
  name: string;
  role: "admin" | "user";
  school?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, code: string) => { success: boolean; error?: string };
  register: (
    name: string,
    phone: string,
    school: string,
    code: string
  ) => { success: boolean; error?: string };
  logout: () => void;
  checkAuth: () => void;
}

const ADMIN_ACCOUNTS = [
  { phone: "admin", code: "123456", name: "管理员", role: "admin" as const },
  { phone: "13800000000", code: "123456", name: "超级管理员", role: "admin" as const },
];

const STORAGE_KEY = "yousi_auth";

function saveToStorage(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
}

function clearStorage() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function loadFromStorage(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (phone, code) => {
    const admin = ADMIN_ACCOUNTS.find(
      (a) => a.phone === phone && a.code === code
    );
    if (admin) {
      const user: User = { phone: admin.phone, name: admin.name, role: admin.role };
      saveToStorage(user);
      set({ user, isAuthenticated: true });
      return { success: true };
    }
    // 模拟普通用户登录（任意手机号 + 6位验证码）
    if (phone.length >= 6 && code.length === 6) {
      const user: User = { phone, name: "用户", role: "user" };
      saveToStorage(user);
      set({ user, isAuthenticated: true });
      return { success: true };
    }
    return { success: false, error: "手机号或验证码错误" };
  },

  register: (name, phone, school, code) => {
    if (!name || !phone || !code) {
      return { success: false, error: "请填写完整信息" };
    }
    if (code.length !== 6) {
      return { success: false, error: "验证码格式错误" };
    }
    const user: User = { phone, name, role: "user", school };
    saveToStorage(user);
    set({ user, isAuthenticated: true });
    return { success: true };
  },

  logout: () => {
    clearStorage();
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: () => {
    const user = loadFromStorage();
    if (user) {
      set({ user, isAuthenticated: true });
    }
  },
}));
