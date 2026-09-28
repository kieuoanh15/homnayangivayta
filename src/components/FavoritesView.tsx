import React from 'react';
import { Heart, Sparkles, Utensils, ArrowRight } from 'lucide-react';
import { Dish, WheelItem } from '../types';
import { DISHES } from '../data/dishes';
import { DishCard } from './DishCard';

interface FavoritesViewProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onViewDetail: (dish: Dish) => void;
  onAddToWheel: (dish: Dish) => void;
  onAddAllToWheel: (dishes: Dish[]) => void;
  onGoToWheel: () => void;
  wheelItems: WheelItem[];
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteIds,
  onToggleFavorite,
  onViewDetail,
  onAddToWheel,
  onAddAllToWheel,
  onGoToWheel,
  wheelItems
}) => {
  const favoriteDishes = DISHES.filter((d) => favoriteIds.includes(d.id));

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
            <span>Món ăn đã lưu</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-800 tracking-tight">
            Danh Sách Món Yêu Thích
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Tổng cộng {favoriteDishes.length} món ngon bạn đã đánh dấu
          </p>
        </div>

        {favoriteDishes.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => onAddAllToWheel(favoriteDishes)}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Đưa tất cả vào &ldquo;Ăn gì đây ta&rdquo;</span>
            </button>

            <button
              onClick={onGoToWheel}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-100 text-amber-900 hover:bg-amber-200 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Vào quay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Dishes Grid or Empty State */}
      {favoriteDishes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-amber-100 shadow-sm max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-rose-50 flex items-center justify-center text-rose-500 mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-extrabold text-stone-800">
            Chưa có món yêu thích nào
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed">
            Hãy khám phá những món ăn ngoài quán dễ tìm, hình ảnh chuẩn và nhấn biểu tượng trái tim ❤️ để lưu lại nhé!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteDishes.map((dish) => {
            const inWheel = wheelItems.some(
              (it) => it.name.toLowerCase() === dish.name.toLowerCase()
            );
            return (
              <DishCard
                key={dish.id}
                dish={dish}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onViewDetail={onViewDetail}
                onAddToWheel={onAddToWheel}
                isInWheel={inWheel}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
