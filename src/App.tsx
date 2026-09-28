import { useState, useEffect } from 'react';
import { 
  Sparkles, Compass, Search, Flame, ArrowRight, X, 
  Utensils, RotateCcw, Heart
} from 'lucide-react';
import { Dish, CategoryType, WheelItem } from './types';
import { DISHES, CATEGORIES } from './data/dishes';
import { 
  getFavorites, toggleFavoriteInStorage, 
  getWheelItems, saveWheelItems, createWheelItem,
  getCustomDishes
} from './utils/storage';
import { initAudioSetting } from './utils/audio';

import { Header } from './components/Header';
import { DishCard } from './components/DishCard';
import { DishDetail } from './components/DishDetail';
import { LuckyWheel } from './components/LuckyWheel';
import { FavoritesView } from './components/FavoritesView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'wheel' | 'catalog' | 'favorites'>('home');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  
  // Storage state
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [wheelItems, setWheelItems] = useState<WheelItem[]>([]);
  const [customDishes, setCustomDishes] = useState<string[]>([]);

  // Catalog filters & search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');

  // Initialize data on mount
  useEffect(() => {
    initAudioSetting();
    setFavoriteIds(getFavorites());
    setWheelItems(getWheelItems());
    setCustomDishes(getCustomDishes());
  }, []);

  // Sync wheel items to localStorage
  const handleUpdateWheelItems = (items: WheelItem[]) => {
    setWheelItems(items);
    saveWheelItems(items);
  };

  // Toggle favorite
  const handleToggleFavorite = (dishId: string) => {
    const updated = toggleFavoriteInStorage(dishId);
    setFavoriteIds(updated);
  };

  // Add single dish to wheel
  const handleAddDishToWheel = (dish: Dish) => {
    const exists = wheelItems.some(
      (it) => it.name.toLowerCase() === dish.name.toLowerCase()
    );
    if (!exists) {
      const newItem = createWheelItem(dish.name, dish.id);
      handleUpdateWheelItems([...wheelItems, newItem]);
    } else {
      // If already in list but disabled, enable it
      const next = wheelItems.map((it) =>
        it.name.toLowerCase() === dish.name.toLowerCase()
          ? { ...it, enabled: true }
          : it
      );
      handleUpdateWheelItems(next);
    }
  };

  // Add all favorite dishes to wheel
  const handleAddAllFavoritesToWheel = (dishes: Dish[]) => {
    const newItems = [...wheelItems];
    dishes.forEach((d) => {
      const exists = newItems.some((it) => it.name.toLowerCase() === d.name.toLowerCase());
      if (!exists) {
        newItems.push(createWheelItem(d.name, d.id));
      } else {
        const idx = newItems.findIndex((it) => it.name.toLowerCase() === d.name.toLowerCase());
        if (idx !== -1) {
          newItems[idx] = { ...newItems[idx], enabled: true };
        }
      }
    });
    handleUpdateWheelItems(newItems);
    setCurrentTab('wheel');
  };

  // Filtered dishes for Catalog / Search
  const filteredDishes = DISHES.filter((dish) => {
    const matchCategory = selectedCategory === 'all' || dish.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchSearch =
      !query ||
      dish.name.toLowerCase().includes(query) ||
      dish.shortDesc.toLowerCase().includes(query) ||
      dish.mainIngredients.some((ing) => ing.toLowerCase().includes(query));
    return matchCategory && matchSearch;
  });

  // Popular dishes for homepage
  const popularDishes = DISHES.filter((d) => d.isPopular);

  // If a dish is selected, render Fullscreen Detail Page
  if (selectedDish) {
    return (
      <DishDetail
        dish={selectedDish}
        onBack={() => setSelectedDish(null)}
        isFavorite={favoriteIds.includes(selectedDish.id)}
        onToggleFavorite={handleToggleFavorite}
        onAddToWheel={handleAddDishToWheel}
        onSelectDish={(d) => setSelectedDish(d)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        favoritesCount={favoriteIds.length}
      />

      <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* ========================================================
            TAB 1: TRANG CHỦ
        ======================================================== */}
        {currentTab === 'home' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Hero Banner */}
            <section className="relative rounded-3xl overflow-hidden bg-linear-to-br from-amber-500 via-orange-500 to-rose-500 text-white p-6 sm:p-12 shadow-xl shadow-orange-500/15">
              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Trợ thủ chọn món ăn ngoài quán số 1</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  🍴 HÔM NAY ĂN GÌ?
                </h1>

                <p className="text-base sm:text-xl font-medium text-amber-50 drop-shadow-xs">
                  &ldquo;Không biết ăn gì? Để chúng tôi chọn giúp bạn!&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
                  Những món ăn ngoài quán dễ tìm, hình ảnh chuẩn vị thơm ngon. Bật &ldquo;Ăn gì đây ta&rdquo; để chọn món ngẫu nhiên hoặc khám phá thực đơn hấp dẫn hôm nay!
                </p>
              </div>

              {/* Decorative Background Circles */}
              <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute top-0 right-1/4 w-48 h-48 rounded-full bg-amber-300/20 blur-xl pointer-events-none" />
            </section>

            {/* Hai Chức Năng Chính */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: ĂN GÌ ĐÂY TA */}
              <div
                onClick={() => {
                  setCurrentTab('wheel');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-linear-to-br from-amber-50 via-orange-50/60 to-rose-50 p-6 sm:p-8 rounded-3xl border-2 border-orange-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7" />
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-orange-100 text-orange-800 text-[11px] font-black uppercase">
                    Tính năng nổi bật
                  </div>

                  <h2 className="text-2xl font-black text-stone-800 group-hover:text-orange-600 transition-colors">
                    🎲 ĂN GÌ ĐÂY TA
                  </h2>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    Bạn đang phân vân giữa Cơm tấm, Phở bò hay Bún đậu? Chọn nhanh từ thực đơn phong phú hoặc tự nhập món yêu thích, bấm quay và để app quyết định!
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-orange-200/60 flex items-center justify-between text-orange-600 font-extrabold text-sm relative z-10">
                  <span>Khám phá ngay</span>
                  <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtle background illustration symbol */}
                <div className="absolute -right-4 -bottom-4 text-orange-200/50 text-8xl font-black select-none pointer-events-none group-hover:rotate-12 transition-transform">
                  🎡
                </div>
              </div>

              {/* Box 2: KHÁM PHÁ MÓN ĂN */}
              <div
                onClick={() => {
                  setCurrentTab('catalog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-linear-to-br from-emerald-50 via-teal-50/60 to-cyan-50 p-6 sm:p-8 rounded-3xl border-2 border-emerald-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <Compass className="w-7 h-7" />
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase">
                    Gợi ý chuẩn vị
                  </div>

                  <h2 className="text-2xl font-black text-stone-800 group-hover:text-emerald-700 transition-colors">
                    🍜 KHÁM PHÁ MÓN ĂN
                  </h2>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    Những món ăn ngoài quán dễ tìm, hình ảnh chuẩn từng món, giá tham khảo, đánh giá và mẹo gọi món ngon đúng điệu.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-200/60 flex items-center justify-between text-emerald-700 font-extrabold text-sm relative z-10">
                  <span>Khám phá danh sách</span>
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtle background illustration symbol */}
                <div className="absolute -right-4 -bottom-4 text-emerald-200/50 text-8xl font-black select-none pointer-events-none group-hover:rotate-12 transition-transform">
                  🍲
                </div>
              </div>
            </section>

            {/* Phần: Món Ăn Phổ Biến Hôm Nay */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-100">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-800 flex items-center gap-2">
                    <Flame className="w-7 h-7 text-rose-500" />
                    <span>🔥 Món ăn phổ biến hôm nay</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Những món quán được nhiều người lựa chọn nhất trong ngày
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentTab('catalog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="self-start sm:self-auto font-bold text-xs sm:text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Những món ăn ngoài quán dễ tìm, hình ảnh chuẩn</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Grid of Popular Dishes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularDishes.map((dish) => {
                  const inWheel = wheelItems.some(
                    (it) => it.name.toLowerCase() === dish.name.toLowerCase()
                  );
                  return (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      isFavorite={favoriteIds.includes(dish.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onViewDetail={(d) => setSelectedDish(d)}
                      onAddToWheel={handleAddDishToWheel}
                      isInWheel={inWheel}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* ========================================================
            TAB 2: VÒNG QUAY MAY MẮN
        ======================================================== */}
        {currentTab === 'wheel' && (
          <LuckyWheel
            items={wheelItems}
            onUpdateItems={handleUpdateWheelItems}
            customDishes={customDishes}
            onUpdateCustomDishes={setCustomDishes}
            onViewDishDetail={(d) => setSelectedDish(d)}
            isFavorite={(id) => favoriteIds.includes(id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {/* ========================================================
            TAB 3: DANH SÁCH MÓN ĂN (KHÁM PHÁ)
        ======================================================== */}
        {currentTab === 'catalog' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Header Title */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-orange-600" />
                <span>Thực đơn quán xá Việt Nam</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-800 tracking-tight">
                Những Món Ăn Ngoài Quán Dễ Tìm, Hình Ảnh Chuẩn
              </h1>
              <p className="text-sm text-stone-600">
                Tìm kiếm theo tên món, lọc theo nhóm hoặc khám phá giá tiền tham khảo và cách gọi món ngon
              </p>
            </div>

            {/* Search Bar & Filter Controls */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-amber-100 shadow-sm space-y-4">
              {/* Search input */}
              <div className="relative">
                <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm món ngon: Cơm tấm, Bún bò, Bánh mì, Gà rán..."
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-medium text-stone-800 placeholder:text-stone-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Group category chips */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Phân loại nhóm món:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedCategory === 'all'
                        ? 'bg-stone-900 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <span>Tất cả</span>
                    <span className="opacity-80">({DISHES.length})</span>
                  </button>

                  {CATEGORIES.map((cat) => {
                    const count = DISHES.filter((d) => d.category === cat.id).length;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-amber-500 text-white shadow-xs scale-105'
                            : 'bg-amber-50 text-stone-700 hover:bg-amber-100'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                        <span className="opacity-75">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Results count & Quick reset */}
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-1">
              <span>
                Tìm thấy <strong>{filteredDishes.length}</strong> món phù hợp
              </span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-1 text-orange-600 hover:underline cursor-pointer font-bold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Đặt lại bộ lọc</span>
                </button>
              )}
            </div>

            {/* Dishes Grid */}
            {filteredDishes.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-amber-100 shadow-sm max-w-md mx-auto space-y-3">
                <Search className="w-10 h-10 text-stone-300 mx-auto" />
                <h3 className="font-extrabold text-stone-800 text-lg">Không tìm thấy món ăn nào</h3>
                <p className="text-xs text-stone-500">
                  Thử tìm với từ khóa khác hoặc chọn &ldquo;Tất cả&rdquo; để xem những món ăn ngoài quán dễ tìm, hình ảnh chuẩn.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-bold hover:bg-amber-600 cursor-pointer"
                >
                  Xem tất cả món
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDishes.map((dish) => {
                  const inWheel = wheelItems.some(
                    (it) => it.name.toLowerCase() === dish.name.toLowerCase()
                  );
                  return (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      isFavorite={favoriteIds.includes(dish.id)}
                      onToggleFavorite={handleToggleFavorite}
                      onViewDetail={(d) => setSelectedDish(d)}
                      onAddToWheel={handleAddDishToWheel}
                      isInWheel={inWheel}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            TAB 4: YÊU THÍCH
        ======================================================== */}
        {currentTab === 'favorites' && (
          <FavoritesView
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onViewDetail={(d) => setSelectedDish(d)}
            onAddToWheel={handleAddDishToWheel}
            onAddAllToWheel={handleAddAllFavoritesToWheel}
            onGoToWheel={() => setCurrentTab('wheel')}
            wheelItems={wheelItems}
          />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
