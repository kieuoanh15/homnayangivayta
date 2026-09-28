import { DEFAULT_WHEEL_ITEMS, DISHES } from '../data/dishes';
import { WheelItem } from '../types';

const FAVORITES_KEY = 'hom_nay_an_gi_favorites';
const WHEEL_ITEMS_KEY = 'hom_nay_an_gi_wheel_items';
const CUSTOM_DISHES_KEY = 'hom_nay_an_gi_custom_dishes';

export function getCustomDishes(): string[] {
  try {
    const raw = localStorage.getItem(CUSTOM_DISHES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveCustomDishes(dishes: string[]): void {
  try {
    localStorage.setItem(CUSTOM_DISHES_KEY, JSON.stringify(dishes));
  } catch (e) {
    console.error('Failed to save custom dishes', e);
  }
}

export function addCustomDishToStorage(name: string): string[] {
  const trimmed = name.trim();
  if (!trimmed) return getCustomDishes();
  const current = getCustomDishes();
  if (!current.some(c => c.toLowerCase() === trimmed.toLowerCase())) {
    const next = [...current, trimmed];
    saveCustomDishes(next);
    return next;
  }
  return current;
}

export function removeCustomDishFromStorage(name: string): string[] {
  const current = getCustomDishes();
  const next = current.filter(c => c.toLowerCase() !== name.trim().toLowerCase());
  saveCustomDishes(next);
  return next;
}

const WHEEL_PALETTE = [
  '#FF6B35', // Warm orange
  '#F59E0B', // Amber
  '#10B981', // Emerald
  '#06B6D4', // Cyan
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#E11D48', // Rose
  '#3B82F6', // Blue
  '#84CC16', // Lime
  '#14B8A6'  // Teal
];

export function getFavorites(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveFavorites(favs: string[]): void {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error('Failed to save favorites to localStorage', e);
  }
}

export function toggleFavoriteInStorage(dishId: string): string[] {
  const current = getFavorites();
  const next = current.includes(dishId)
    ? current.filter(id => id !== dishId)
    : [...current, dishId];
  saveFavorites(next);
  return next;
}

export function isFavoriteDish(dishId: string): boolean {
  return getFavorites().includes(dishId);
}

export function getWheelItems(): WheelItem[] {
  try {
    const raw = localStorage.getItem(WHEEL_ITEMS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to parse wheel items from localStorage', e);
  }

  // Initial default list
  const initial: WheelItem[] = DEFAULT_WHEEL_ITEMS.map((name, index) => {
    const matchedDish = DISHES.find(d => d.name.toLowerCase() === name.toLowerCase());
    return {
      id: `default-${index}-${Date.now()}`,
      name,
      color: WHEEL_PALETTE[index % WHEEL_PALETTE.length],
      dishId: matchedDish ? matchedDish.id : undefined,
      enabled: true
    };
  });

  saveWheelItems(initial);
  return initial;
}

export function saveWheelItems(items: WheelItem[]): void {
  try {
    localStorage.setItem(WHEEL_ITEMS_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save wheel items', e);
  }
}

export function createWheelItem(name: string, dishId?: string): WheelItem {
  const current = getWheelItems();
  const matchedDish = dishId 
    ? DISHES.find(d => d.id === dishId)
    : DISHES.find(d => d.name.toLowerCase() === name.trim().toLowerCase());

  return {
    id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: name.trim(),
    color: WHEEL_PALETTE[current.length % WHEEL_PALETTE.length],
    dishId: matchedDish ? matchedDish.id : undefined,
    enabled: true
  };
}
