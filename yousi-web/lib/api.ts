async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `请求失败 (${res.status})`);
  }
  return res.json();
}

// Auth
export const authApi = {
  login: (username: string, password: string) =>
    request<{ success: boolean; username: string }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),
  logout: () => request<{ success: boolean }>("/api/auth/logout", { method: "POST" }),
  me: () => request<{ username: string }>("/api/auth/me"),
};

// Settings
export const settingsApi = {
  get: () => request<Record<string, string>>("/api/settings"),
  update: (data: Record<string, string>) =>
    request<{ success: boolean }>("/api/settings", {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};

// Services
export const servicesApi = {
  list: (category?: string) =>
    request<Record<string, unknown>[]>(`/api/services${category ? `?category=${category}` : ""}`),
  get: (slug: string) => request<Record<string, unknown>>(`/api/services/${slug}`),
  update: (slug: string, data: Record<string, unknown>) =>
    request<Record<string, unknown>>(`/api/services/${slug}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};

// Cases
export const casesApi = {
  list: (params?: { category?: string; featured?: string }) => {
    const q = new URLSearchParams(params || {}).toString();
    return request<Record<string, unknown>[]>(`/api/cases${q ? `?${q}` : ""}`);
  },
  get: (slug: string) => request<Record<string, unknown>>(`/api/cases/${slug}`),
  update: (slug: string, data: Record<string, unknown>) =>
    request<Record<string, unknown>>(`/api/cases/${slug}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
};

// Packages
export const packagesApi = {
  list: () => request<Record<string, unknown>[]>("/api/packages"),
};

// Inquiries
export const inquiriesApi = {
  list: (status?: string) =>
    request<Record<string, unknown>[]>(`/api/inquiries${status ? `?status=${status}` : ""}`),
  create: (data: { name: string; kindergarten: string; phone: string; wechat?: string; service: string; message?: string }) =>
    request<{ success: boolean; id: string }>("/api/inquiries", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateStatus: (id: string, status: string) =>
    request<Record<string, unknown>>(`/api/inquiries/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};

// Orders
export const ordersApi = {
  list: (status?: string) =>
    request<Record<string, unknown>[]>(`/api/orders${status ? `?status=${status}` : ""}`),
  updateStatus: (id: string, status: string) =>
    request<Record<string, unknown>>(`/api/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
