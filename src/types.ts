export type CategoryType = 
  | 'rice'             // 🍚 Cơm
  | 'noodle'           // 🍜 Bún / Phở / Mì
  | 'bread'            // 🥖 Bánh / Mì (legacy support)
  | 'fastfood'         // 🥖 Bánh / Món nhanh
  | 'snack'            // 🌶️ Ăn vặt
  | 'hotpot'           // 🍲 Món no / Lẩu
  | 'japanese_korean'  // 🍣 Món Nhật / Hàn
  | 'dessert'          // 🍧 Tráng miệng / Đồ uống
  | 'custom';          // 🌟 Món tự thêm

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  icon: string;
  color: string;
  badgeBg: string;
  textColor: string;
}

export interface Dish {
  id: string;
  name: string;
  category: CategoryType;
  priceRange: string;
  minPrice: number;
  maxPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  shortDesc: string;
  fullDesc: string;
  mainIngredients: string[];
  orderTips: string[];
  bestTime: ('Sáng' | 'Trưa' | 'Tối' | 'Ăn khuya' | 'Ăn xế')[];
  tag: string;
  isPopular?: boolean;
}

export interface MenuItemDefinition {
  id: string;
  name: string;
  category: CategoryType;
  isCustom?: boolean;
}

export interface MenuCategoryGroup {
  id: CategoryType;
  title: string;
  icon: string;
  color: string;
  items: string[];
}

export interface WheelItem {
  id: string;
  name: string;
  color?: string;
  dishId?: string; // Optional reference to a database dish
  category?: CategoryType;
  enabled: boolean;
}
