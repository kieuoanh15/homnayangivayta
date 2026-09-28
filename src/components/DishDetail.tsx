import React, { useState } from 'react';
import { 
  ArrowLeft, Heart, Star, Sparkles, Clock, CheckCircle2, 
  Lightbulb, UtensilsCrossed, Share2, Check, Flame 
} from 'lucide-react';
import { Dish } from '../types';
import { CATEGORIES, DISHES } from '../data/dishes';

interface DishDetailProps {
  dish: Dish;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onAddToWheel: (dish: Dish) => void;
  onSelectDish: (dish: Dish) => void;
}

export const DishDetail: React.FC<DishDetailProps> = ({
  dish,
  onBack,
  isFavorite,
  onToggleFavorite,
  onAddToWheel,
  onSelectDish
}) => {
  const [copied, setCopied] = useState(false);
  const [addedToWheel, setAddedToWheel] = useState(false);

  const category = CATEGORIES.find((c) => c.id === dish.category);

  // Similar dishes in the same category or random
  const similarDishes = DISHES.filter(
    (d) => d.id !== dish.id && (d.category === dish.category || d.isPopular)
  ).slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hôm nay ăn ${dish.name}!`,
          text: dish.shortDesc,
          url: window.location.href
        });
      } catch {
        // Share cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddWheel = () => {
    onAddToWheel(dish);
    setAddedToWheel(true);
    setTimeout(() => setAddedToWheel(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] pb-24 animate-in fade-in duration-300">
      {/* Sticky top action bar */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-stone-700 hover:text-orange-600 font-bold text-sm bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Chia sẻ món này"
              className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onToggleFavorite(dish.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'bg-stone-100 text-stone-700 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              <span>{isFavorite ? 'Đã thích' : 'Yêu thích'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Full-page Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8">
        {/* Hero Image & Headings */}
        <div className="relative rounded-3xl overflow-hidden bg-stone-900 shadow-xl border border-amber-200/60 aspect-16/10 sm:aspect-16/9">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

          {/* Overlaid Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-white/95 text-stone-900 shadow-md backdrop-blur-md">
              <span>{category?.icon}</span>
              <span>{category?.name}</span>
            </span>

            {dish.tag && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500 text-white shadow-md">
                <Flame className="w-3.5 h-3.5" />
                <span>{dish.tag}</span>
              </span>
            )}
          </div>

          {/* Hero Bottom text */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-md text-white mb-2">
                  {dish.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-amber-400/90 text-stone-950 px-2.5 py-1 rounded-lg text-xs font-black shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{dish.rating}</span>
                  </div>
                  <span className="text-xs text-stone-200 font-medium">
                    Dựa trên {dish.reviewCount} lượt đánh giá quán xá
                  </span>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 self-start sm:self-auto">
                <span className="text-[11px] text-amber-200 block font-bold uppercase tracking-wider">
                  Giá tham khảo ngoài quán
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-300">
                  {dish.priceRange}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-linear-to-r from-amber-50 via-orange-50 to-amber-50 p-4 sm:p-6 rounded-3xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div>
            <h2 className="font-extrabold text-stone-800 text-base sm:text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Chốt ngay món này cho bữa hôm nay?</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Thêm “{dish.name}” vào danh sách “Ăn gì đây ta” để chuẩn bị quay cùng bạn bè!
            </p>
          </div>

          <button
            onClick={handleAddWheel}
            className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
              addedToWheel
                ? 'bg-emerald-600 text-white'
                : 'bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-orange-500/25'
            }`}
          >
            {addedToWheel ? (
              <>
                <Check className="w-4 h-4" />
                <span>Đã thêm vào &ldquo;Ăn gì đây ta&rdquo;!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Thêm vào &ldquo;Ăn gì đây ta&rdquo;</span>
              </>
            )}
          </button>
        </div>

        {/* Dish Description Section */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-amber-50">
            <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-extrabold text-stone-800">Mô tả món ăn</h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            {dish.fullDesc}
          </p>
        </section>

        {/* Ingredients & Order Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Ingredients */}
          <section className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-amber-50 mb-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-extrabold text-stone-800">Thành phần đặc trưng ngoài quán</h2>
              </div>
              <ul className="space-y-2.5">
                {dish.mainIngredients.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-stone-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Pro Order Tips */}
          <section className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-amber-50 mb-4">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-extrabold text-stone-800">Gợi ý khi gọi món</h2>
              </div>
              <ul className="space-y-3">
                {dish.orderTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-stone-700 text-sm bg-amber-50/60 p-3 rounded-2xl border border-amber-100/50">
                    <span className="font-bold text-amber-700 text-xs px-2 py-0.5 bg-amber-200/80 rounded-md shrink-0">
                      Mẹo {idx + 1}
                    </span>
                    <span className="leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Best Time to Eat */}
        <section className="bg-white p-6 rounded-3xl border border-amber-100 shadow-xs">
          <div className="flex items-center gap-2.5 pb-3 border-b border-amber-50 mb-4">
            <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              <Clock className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-extrabold text-stone-800">Thời điểm phù hợp để ăn</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {dish.bestTime.map((time, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold bg-amber-50 text-amber-800 border border-amber-200/70 flex items-center gap-2 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Bữa {time}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Similar Dishes */}
        {similarDishes.length > 0 && (
          <section className="space-y-4 pt-4">
            <h2 className="text-xl font-extrabold text-stone-800 flex items-center gap-2">
              <span>Có thể bạn cũng thích</span>
              <span className="text-orange-500">✨</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {similarDishes.map((sDish) => (
                <div
                  key={sDish.id}
                  onClick={() => {
                    onSelectDish(sDish);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white p-3 rounded-2xl border border-amber-100 hover:shadow-md transition-all cursor-pointer group flex items-center gap-3"
                >
                  <img
                    src={sDish.image}
                    alt={sDish.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-stone-800 group-hover:text-orange-600 transition-colors">
                      {sDish.name}
                    </h3>
                    <p className="text-xs text-orange-600 font-extrabold mt-0.5">
                      {sDish.priceRange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
