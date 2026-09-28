import { MenuCategoryGroup } from '../types';

export const DEFAULT_MENU_GROUPS: MenuCategoryGroup[] = [
  {
    id: 'rice',
    title: 'CƠM',
    icon: '🍚',
    color: '#F97316',
    items: [
      'Cơm tấm',
      'Cơm sườn',
      'Cơm gà',
      'Cơm chiên',
      'Cơm chiên Dương Châu',
      'Cơm bò lúc lắc',
      'Cơm thịt kho trứng',
      'Cơm cá kho',
      'Cơm gà xối mỡ',
      'Cơm niêu'
    ]
  },
  {
    id: 'noodle',
    title: 'BÚN / PHỞ / MÌ',
    icon: '🍜',
    color: '#EF4444',
    items: [
      'Phở bò',
      'Phở gà',
      'Bún bò Huế',
      'Bún thịt nướng',
      'Bún riêu',
      'Bún chả',
      'Bún đậu mắm tôm',
      'Bún mắm',
      'Bún cá',
      'Hủ tiếu',
      'Mì Quảng',
      'Mì xào',
      'Miến gà',
      'Miến trộn'
    ]
  },
  {
    id: 'fastfood',
    title: 'BÁNH / MÓN NHANH',
    icon: '🥖',
    color: '#D97706',
    items: [
      'Bánh mì thịt',
      'Bánh mì xíu mại',
      'Bánh mì chảo',
      'Bánh xèo',
      'Bánh cuốn',
      'Bánh căn',
      'Bánh khọt',
      'Gà rán',
      'Hamburger',
      'Pizza',
      'Hot dog'
    ]
  },
  {
    id: 'snack',
    title: 'ĂN VẶT',
    icon: '🌶️',
    color: '#10B981',
    items: [
      'Bánh tráng trộn',
      'Bánh tráng nướng',
      'Cá viên chiên',
      'Xúc xích',
      'Khoai tây chiên',
      'Khoai lang chiên',
      'Takoyaki',
      'Há cảo',
      'Xiên que',
      'Bắp xào',
      'Trứng cút lộn xào me'
    ]
  },
  {
    id: 'hotpot',
    title: 'MÓN NO / LẨU',
    icon: '🍲',
    color: '#E11D48',
    items: [
      'Lẩu Thái',
      'Lẩu bò',
      'Lẩu gà',
      'Lẩu hải sản',
      'Lẩu kim chi',
      'Gà nướng',
      'Gà sốt cay',
      'Sườn nướng',
      'Bò né',
      'Bò lúc lắc'
    ]
  },
  {
    id: 'japanese_korean',
    title: 'MÓN NHẬT / HÀN',
    icon: '🍣',
    color: '#3B82F6',
    items: [
      'Sushi',
      'Ramen',
      'Udon',
      'Kimbap',
      'Tokbokki',
      'Cơm trộn Hàn Quốc',
      'Mì cay'
    ]
  },
  {
    id: 'dessert',
    title: 'TRÁNG MIỆNG / ĐỒ UỐNG',
    icon: '🍧',
    color: '#8B5CF6',
    items: [
      'Chè',
      'Chè khúc bạch',
      'Bánh flan',
      'Kem',
      'Sữa chua',
      'Trái cây tô',
      'Trà sữa'
    ]
  }
];

export const ALL_DEFAULT_DISH_NAMES: string[] = DEFAULT_MENU_GROUPS.flatMap(
  (group) => group.items
);
