import React, { useState } from 'react';
import { Star, Heart, Plus, ArrowRight, Check } from 'lucide-react';
import { Dish } from '../types';
import { CATEGORIES } from '../data/dishes';

interface DishCardProps {
  dish: Dish;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onViewDetail: (dish: Dish) => void;
  onAddToWheel?: (dish: Dish) => void;
  isInWheel?: boolean;
}

export const DishCard: React.FC<DishCardProps> = ({
  dish,
  isFavorite,
  onToggleFavorite,
  onViewDetail,
  onAddToWheel,
  isInWheel = false
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const category = CATEGORIES.find((c) => c.id === dish.category);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToWheel) {
      onAddToWheel(dish);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
    }
  };

  return (
    <div
      onClick={() => onViewDetail(dish)}
      className="group bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden bg-amber-50">
        {!imgError ? (
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-amber-100 via-orange-100 to-rose-100 text-stone-700 p-4 text-center">
            <span className="text-4xl mb-2">{category?.icon || '🍲'}</span>
            <span className="font-bold text-lg text-amber-950">{dish.name}</span>
            <span className="text-xs text-stone-500 mt-1">Món ngon quán Việt</span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-stone-800 shadow-sm">
            <span>{category?.icon}</span>
            <span>{category?.name}</span>
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(dish.id);
          }}
          aria-label={isFavorite ? 'Bỏ yêu thích' : 'Yêu thích món này'}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-90 shadow-sm cursor-pointer ${
            isFavorite
              ? 'bg-rose-500 text-white'
              : 'bg-white/90 text-stone-600 hover:text-rose-500 hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Tag Pill */}
        {dish.tag && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-block px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-amber-500 text-white shadow-xs">
              {dish.tag}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-extrabold text-lg text-stone-800 group-hover:text-orange-600 transition-colors">
              {dish.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-2 py-0.5 rounded-lg">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-xs text-amber-900">{dish.rating}</span>
              <span className="text-[10px] text-stone-400">({dish.reviewCount})</span>
            </div>
          </div>

          {/* Short description */}
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
            {dish.shortDesc}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-amber-50 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-stone-400 block font-medium">Giá tham khảo</span>
            <span className="font-extrabold text-sm sm:text-base text-orange-600">
              {dish.priceRange}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {onAddToWheel && (
              <button
                type="button"
                onClick={handleAdd}
                title="Thêm món này vào “Ăn gì đây ta”"
                className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                  justAdded
                    ? 'bg-emerald-500 text-white'
                    : isInWheel
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    : 'bg-stone-100 text-stone-700 hover:bg-amber-500 hover:text-white'
                }`}
              >
                {justAdded ? (
                  <Check className="w-4 h-4 animate-in zoom-in" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>
            )}

            <button
              type="button"
              onClick={() => onViewDetail(dish)}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1 transition-all shadow-xs cursor-pointer"
            >
              <span>Chi tiết</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
