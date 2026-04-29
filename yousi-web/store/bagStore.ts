import { create } from "zustand";

export interface BagItem {
  id: string;
  type: "service" | "package";
  name: string;
  price: number;
  quantity: number;
  details?: string;
  packageServices?: string[];
}

interface BagStore {
  items: BagItem[];
  isOpen: boolean;
  addItem: (item: BagItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBag: () => void;
  total: () => number;
  count: () => number;
  toggleBag: () => void;
  openBag: () => void;
  closeBag: () => void;
}

export const useBagStore = create<BagStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, item] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i
      ).filter((i) => i.quantity > 0),
    })),

  clearBag: () => set({ items: [] }),

  total: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  count: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },

  toggleBag: () => set((state) => ({ isOpen: !state.isOpen })),
  openBag: () => set({ isOpen: true }),
  closeBag: () => set({ isOpen: false }),
}));
