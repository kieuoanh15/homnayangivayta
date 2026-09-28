import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, RotateCcw, Plus, Heart, Eye, AlertCircle, 
  Trash2, Check, Utensils, X, Shuffle, CheckSquare, Square,
  ListFilter, Layers
} from 'lucide-react';
import { WheelItem, Dish } from '../types';
import { playTickSound, playWinnerSound } from '../utils/audio';
import { DISHES } from '../data/dishes';
import { MenuPicker } from './MenuPicker';
import { addCustomDishToStorage } from '../utils/storage';

interface LuckyWheelProps {
  items: WheelItem[];
  onUpdateItems: (items: WheelItem[]) => void;
  customDishes: string[];
  onUpdateCustomDishes: (dishes: string[]) => void;
  onViewDishDetail?: (dish: Dish) => void;
  isFavorite: (dishId: string) => boolean;
  onToggleFavorite: (dishId: string) => void;
}

const PALETTE = [
  '#FF6B35', // Orange
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

export const LuckyWheel: React.FC<LuckyWheelProps> = ({
  items,
  onUpdateItems,
  customDishes,
  onUpdateCustomDishes,
  onViewDishDetail,
  isFavorite,
  onToggleFavorite
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<WheelItem | null>(null);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showClearAllConfirm, setShowClearAllConfirm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);
  const [quickAddMenu, setQuickAddMenu] = useState(false);
  const [showMenuPickerModal, setShowMenuPickerModal] = useState(false);
  const [wheelViewMode, setWheelViewMode] = useState<'current_list' | 'full_menu'>('current_list');

  // Lock body scroll when modal or confirm dialog is open
  useEffect(() => {
    if (showWinnerModal || showClearAllConfirm) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [showWinnerModal, showClearAllConfirm]);

  // Active items in the wheel
  const activeItems = items.filter((it) => it.enabled);

  // Wheel animation references
  const currentAngleRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTickIndexRef = useRef<number>(-1);

  // Draw wheel on canvas
  const drawWheel = useCallback((angle: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 18;

    ctx.clearRect(0, 0, width, height);

    if (activeItems.length === 0) {
      // Empty wheel state
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#F3F4F6';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#E5E7EB';
      ctx.stroke();

      ctx.font = 'bold 16px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = '#9CA3AF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Chưa có món nào', centerX, centerY);
      ctx.restore();
      return;
    }

    const numSlices = activeItems.length;
    const sliceAngle = (2 * Math.PI) / numSlices;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    // Draw Slices
    for (let i = 0; i < numSlices; i++) {
      const item = activeItems[i];
      const startAngle = i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      // Slice sector
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();

      const sliceColor = item.color || PALETTE[i % PALETTE.length];
      ctx.fillStyle = sliceColor;
      ctx.fill();

      // Border line
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Text label inside slice
      ctx.save();
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
      ctx.shadowBlur = 4;

      // Dynamic font size depending on number of items
      const fontSize = numSlices > 12 ? 12 : numSlices > 8 ? 14 : 16;
      ctx.font = `bold ${fontSize}px "Plus Jakarta Sans", sans-serif`;

      // Truncate text if too long
      let text = item.name;
      if (text.length > 14) {
        text = text.slice(0, 13) + '…';
      }

      ctx.fillText(text, radius - 24, 0);
      ctx.restore();
    }

    // Outer rim border
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#F59E0B';
    ctx.stroke();

    // Center circular badge
    ctx.beginPath();
    ctx.arc(0, 0, 36, 0, 2 * Math.PI);
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 10;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#F59E0B';
    ctx.fill();

    ctx.restore();
  }, [activeItems]);

  // Redraw when items change or resize
  useEffect(() => {
    drawWheel(currentAngleRef.current);
  }, [drawWheel]);

  // Spin Action
  const spinWheel = () => {
    if (isSpinning || activeItems.length < 2) return;

    setIsSpinning(true);
    setWinner(null);
    setShowWinnerModal(false);

    // Pick random winner from active items
    const winnerIndex = Math.floor(Math.random() * activeItems.length);
    const winningItem = activeItems[winnerIndex];

    const numSlices = activeItems.length;
    const sliceAngle = (2 * Math.PI) / numSlices;

    // The pointer is at the top (angle = -PI/2 or 3*PI/2)
    // When the wheel is rotated by angle theta, slice i covers:
    // [i * sliceAngle + theta, (i+1) * sliceAngle + theta]
    // To have slice winnerIndex centered under pointer at -PI/2:
    // (winnerIndex + 0.5) * sliceAngle + theta = -PI/2 (modulo 2PI)
    // => theta = -PI/2 - (winnerIndex + 0.5) * sliceAngle

    const targetBase = -Math.PI / 2 - (winnerIndex + 0.5) * sliceAngle;
    
    // Normalize target angle and add 5 to 7 full rotations (10*PI to 14*PI)
    const extraRotations = (5 + Math.floor(Math.random() * 3)) * 2 * Math.PI;
    const startAngle = currentAngleRef.current;
    
    // Calculate final angle
    // Align with current angle plus extra rotations plus offset to target
    const currentMod = startAngle % (2 * Math.PI);
    let diff = (targetBase - currentMod) % (2 * Math.PI);
    if (diff < 0) diff += 2 * Math.PI;

    const totalAngleChange = extraRotations + diff;
    const finalAngle = startAngle + totalAngleChange;

    const duration = 3200; // 3.2 seconds
    const startTime = performance.now();

    // Sound tick tracking
    lastTickIndexRef.current = -1;

    // Ease-out cubic easing
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3.5);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);

      const angle = startAngle + totalAngleChange * eased;
      currentAngleRef.current = angle;
      drawWheel(angle);

      // Calculate which slice is currently under the pointer for sound tick
      const normalized = ((-Math.PI / 2 - angle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
      const currentSlice = Math.floor(normalized / sliceAngle);
      if (currentSlice !== lastTickIndexRef.current) {
        lastTickIndexRef.current = currentSlice;
        playTickSound(650 + (currentSlice % 3) * 50);
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation finished
        setIsSpinning(false);
        setWinner(winningItem);
        setShowWinnerModal(true);
        playWinnerSound();

        // Confetti celebration
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Add Item to Wheel
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const name = newItemName.trim();
    const matchedDish = DISHES.find(
      (d) => d.name.toLowerCase() === name.toLowerCase()
    );

    const nextItem: WheelItem = {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name,
      color: PALETTE[items.length % PALETTE.length],
      dishId: matchedDish ? matchedDish.id : undefined,
      enabled: true
    };

    onUpdateItems([...items, nextItem]);

    // Save to custom dishes in localStorage so it also appears in 60+ menu list
    const updatedCustom = addCustomDishToStorage(name);
    onUpdateCustomDishes(updatedCustom);

    setNewItemName('');
    setShowAddInput(false);
  };

  // Toggle item enabled
  const toggleItem = (id: string) => {
    if (isSpinning) return;
    const next = items.map((it) => (it.id === id ? { ...it, enabled: !it.enabled } : it));
    onUpdateItems(next);
  };

  // Delete single item
  const deleteItem = (id: string) => {
    if (isSpinning) return;
    const next = items.filter((it) => it.id !== id);
    onUpdateItems(next);
  };

  // Clear all items
  const clearAll = () => {
    if (isSpinning) return;
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ món trong vòng quay không?')) {
      onUpdateItems([]);
    }
  };

  // Reset to default sample dishes
  const resetToDefault = () => {
    if (isSpinning) return;
    const sampleNames = ['Cơm tấm', 'Phở bò', 'Bún bò Huế', 'Bún thịt nướng', 'Bánh mì thịt', 'Bún đậu mắm tôm', 'Gà rán', 'Lẩu Thái'];
    const sampleList: WheelItem[] = sampleNames.map((name, idx) => {
      const match = DISHES.find((d) => d.name.toLowerCase() === name.toLowerCase());
      return {
        id: `default-${idx}-${Date.now()}`,
        name,
        color: PALETTE[idx % PALETTE.length],
        dishId: match ? match.id : undefined,
        enabled: true
      };
    });
    onUpdateItems(sampleList);
  };

  // Matched winner dish in database
  const winnerDish = winner?.dishId
    ? DISHES.find((d) => d.id === winner.dishId)
    : DISHES.find((d) => d.name.toLowerCase() === winner?.name.toLowerCase());

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider mb-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Ăn gì đây ta</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-stone-800 tracking-tight">
          ĂN GÌ ĐÂY TA
        </h1>
        <p className="text-sm text-stone-600">
          Thêm những món bạn đang phân vân, quay một lượt và để ứng dụng quyết định bữa ăn giúp bạn!
        </p>
      </div>

      {/* Main Wheel Area */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-xl max-w-2xl mx-auto flex flex-col items-center">
        {/* Wheel Canvas Container */}
        <div className="relative flex items-center justify-center p-2">
          {/* Top Pointer Needle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-20 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[28px] border-t-rose-600 drop-shadow-md animate-pulse" />
            <div className="w-3.5 h-3.5 bg-rose-700 rounded-full -mt-7 shadow-xs border-2 border-white" />
          </div>

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            width={380}
            height={380}
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] max-w-full drop-shadow-lg"
          />

          {/* Center Spin Button Icon */}
          <button
            onClick={spinWheel}
            disabled={isSpinning || activeItems.length < 2}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-tr from-amber-500 via-orange-500 to-rose-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 flex flex-col items-center justify-center gap-0.5 border-4 border-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 cursor-pointer z-10"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>QUAY</span>
          </button>
        </div>

        {/* Warning if < 2 items */}
        {activeItems.length < 2 && (
          <div className="mt-4 flex items-center gap-2 p-3 bg-amber-50 text-amber-800 rounded-2xl text-xs sm:text-sm border border-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Vui lòng thêm ít nhất 2 món để bắt đầu quay.</span>
          </div>
        )}

        {/* Big Spin Button & Quick Action to 60+ dishes */}
        <div className="mt-6 w-full max-w-sm space-y-3">
          <button
            onClick={spinWheel}
            disabled={isSpinning || activeItems.length < 2}
            className="w-full py-4 px-6 rounded-2xl font-black text-base sm:text-lg bg-linear-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-lg shadow-orange-500/25 flex items-center justify-center gap-3 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Sparkles className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'ĐANG QUAY LỰA CHỌN...' : '🎡 QUAY NGAY'}</span>
          </button>

          {/* Stat badge & direct picker trigger */}
          <div className="flex items-center justify-between px-2 pt-1 text-xs text-stone-600">
            <span className="font-bold">
              Đã chọn: <strong className="text-orange-600 font-black text-sm">{activeItems.length}</strong> món
            </span>
            <button
              onClick={() => setWheelViewMode('full_menu')}
              className="text-amber-800 hover:text-orange-600 font-extrabold flex items-center gap-1 underline cursor-pointer"
            >
              <span>📋 Chọn từ 60+ món có sẵn</span>
            </button>
          </div>
        </div>
      </div>

      {/* View Mode Switcher: Current Wheel List vs 60+ Menu Selector */}
      <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 p-1.5 bg-amber-100/70 rounded-2xl border border-amber-200">
        <button
          onClick={() => setWheelViewMode('current_list')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            wheelViewMode === 'current_list'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <span>🎯 Món trên vòng quay</span>
          <span className="px-2 py-0.5 rounded-full text-xs font-black bg-amber-500 text-white">
            {activeItems.length}
          </span>
        </button>

        <button
          onClick={() => setWheelViewMode('full_menu')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            wheelViewMode === 'full_menu'
              ? 'bg-white text-orange-600 shadow-xs'
              : 'text-stone-600 hover:text-orange-600'
          }`}
        >
          <span>📋 Danh sách 60+ món mặc định</span>
          <span className="px-2 py-0.5 rounded-full text-xs font-black bg-orange-600 text-white">
            Mới
          </span>
        </button>
      </div>

      {/* Conditionally render Full Menu Picker OR Current Wheel Items */}
      {wheelViewMode === 'full_menu' ? (
        <div className="max-w-2xl mx-auto animate-in fade-in duration-200">
          <MenuPicker
            currentWheelItems={items}
            customDishes={customDishes}
            onUpdateCustomDishes={onUpdateCustomDishes}
            onApplySelection={(selectedItems) => {
              onUpdateItems(selectedItems);
              setWheelViewMode('current_list');
              window.scrollTo({ top: 120, behavior: 'smooth' });
            }}
            onClose={() => setWheelViewMode('current_list')}
          />
        </div>
      ) : (
        /* Wheel Item Management Section */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-amber-50">
            <div>
              <h2 className="text-lg font-extrabold text-stone-800 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-500" />
                <span>Danh sách món trong vòng quay</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-black">
                  Đã chọn {activeItems.length} món
                </span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Chỉ những món có dấu tick ☑ mới xuất hiện trên vòng quay
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => setWheelViewMode('full_menu')}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>📋 Chọn từ 60+ món</span>
              </button>

              <button
                onClick={() => setShowAddInput(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm món</span>
              </button>

              {items.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowClearAllConfirm(true)}
                  className="px-3 py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 flex items-center gap-1.5 transition-colors cursor-pointer border border-rose-200"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa tất cả</span>
                </button>
              )}

              <button
                onClick={resetToDefault}
                title="Khôi phục danh sách mẫu"
                className="p-2 rounded-xl text-xs font-bold text-stone-500 hover:text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

        {/* Add Item Form */}
        {showAddInput && (
          <form
            onSubmit={handleAddItem}
            className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-3 animate-in fade-in"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="food-input" className="text-xs font-bold text-amber-900">
                Nhập tên món bạn muốn ăn:
              </label>
              <button
                type="button"
                onClick={() => setShowAddInput(false)}
                className="text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-2">
              <input
                id="food-input"
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Ví dụ: Cơm tấm, Pizza, Phở bò, Trà sữa..."
                autoFocus
                className="flex-1 bg-white px-4 py-2.5 rounded-xl border border-amber-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-stone-800 font-medium"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Thêm
              </button>
            </div>

            {/* Quick add dropdown trigger */}
            <div className="pt-1 flex items-center justify-between text-xs text-amber-800">
              <span>Hoặc chọn nhanh từ 20 món có sẵn:</span>
              <button
                type="button"
                onClick={() => setQuickAddMenu(!quickAddMenu)}
                className="font-bold underline hover:text-orange-700 cursor-pointer"
              >
                {quickAddMenu ? 'Đóng' : 'Xem danh sách gợi ý'}
              </button>
            </div>

            {quickAddMenu && (
              <div className="flex flex-wrap gap-1.5 pt-2 max-h-36 overflow-y-auto pr-1">
                {DISHES.map((d) => {
                  const alreadyIn = items.some(
                    (it) => it.name.toLowerCase() === d.name.toLowerCase()
                  );
                  return (
                    <button
                      key={d.id}
                      type="button"
                      disabled={alreadyIn}
                      onClick={() => {
                        onUpdateItems([
                          ...items,
                          {
                            id: `dish-${d.id}-${Date.now()}`,
                            name: d.name,
                            color: PALETTE[items.length % PALETTE.length],
                            dishId: d.id,
                            enabled: true
                          }
                        ]);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        alreadyIn
                          ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                          : 'bg-white hover:bg-amber-500 hover:text-white text-stone-700 border border-amber-200 cursor-pointer'
                      }`}
                    >
                      + {d.name}
                    </button>
                  );
                })}
              </div>
            )}
          </form>
        )}

        {/* Dish List Items */}
        {items.length === 0 ? (
          <div className="text-center py-8 text-stone-400 space-y-3">
            <Utensils className="w-10 h-10 mx-auto stroke-1" />
            <p className="text-sm">Chưa có món nào trong vòng quay.</p>
            <button
              onClick={resetToDefault}
              className="text-xs font-bold text-amber-600 hover:underline cursor-pointer"
            >
              + Tải 8 món gợi ý ngay
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1">
            {items.map((item) => {
              const matched = DISHES.find(
                (d) => d.name.toLowerCase() === item.name.toLowerCase()
              );
              return (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                    item.enabled
                      ? 'bg-white border-amber-100 hover:border-amber-300 shadow-2xs'
                      : 'bg-stone-50 border-stone-200 opacity-60'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="flex items-center gap-3 text-left flex-1 min-w-0 cursor-pointer"
                  >
                    {item.enabled ? (
                      <CheckSquare className="w-5 h-5 text-amber-500 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-stone-400 shrink-0" />
                    )}

                    <div className="min-w-0">
                      <span className="block font-bold text-sm text-stone-800 truncate">
                        {item.name}
                      </span>
                      {matched && (
                        <span className="text-[11px] text-orange-600 font-semibold">
                          {matched.priceRange}
                        </span>
                      )}
                    </div>
                  </button>

                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    <button
                      onClick={() => deleteItem(item.id)}
                      title="Xóa món này"
                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      )}

      {/* Clear All Confirmation Modal */}
      {showClearAllConfirm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setShowClearAllConfirm(false)}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-stone-200 text-center space-y-4 animate-in zoom-in-95 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-black text-stone-800">Xóa tất cả món ăn?</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Toàn bộ món hiện tại trên vòng quay sẽ được làm trống. Bạn có thể tự thêm lại hoặc chọn từ thực đơn 60+ món bất kỳ lúc nào.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowClearAllConfirm(false)}
                className="py-2.5 px-4 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={() => {
                  onUpdateItems([]);
                  setShowClearAllConfirm(false);
                }}
                className="py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 cursor-pointer shadow-sm"
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Winner Modal */}
      {showWinnerModal && winner && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-hidden"
          onClick={() => setShowWinnerModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-md w-full shadow-2xl border-4 border-amber-400 text-center animate-in zoom-in-95 duration-300 relative flex flex-col max-h-[85vh] sm:max-h-[88vh] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close */}
            <div className="p-3.5 pb-2 border-b border-amber-100 relative shrink-0">
              <button
                type="button"
                onClick={() => setShowWinnerModal(false)}
                className="absolute top-3 right-3 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-3xl mb-0.5 animate-bounce">🎉</span>
              <p className="text-[11px] font-black tracking-widest text-amber-600 uppercase">
                KẾT QUẢ ĐÃ CHỐT
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
                HÔM NAY ĂN:
              </h2>
            </div>

            {/* Scrollable Dish Details Section */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 overscroll-contain">
              <div className="bg-linear-to-b from-amber-50 to-orange-50 p-3.5 rounded-2xl border border-amber-200 space-y-2.5">
                {winnerDish && (
                  <div className="aspect-16/10 max-h-40 rounded-xl overflow-hidden shadow-sm mx-auto">
                    <img
                      src={winnerDish.image}
                      alt={winnerDish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="text-2xl sm:text-3xl font-black text-orange-600 tracking-tight">
                  “{winner.name}”
                </div>

                {winnerDish && (
                  <div className="space-y-1">
                    <p className="text-xs text-stone-600 font-medium line-clamp-2">
                      {winnerDish.shortDesc}
                    </p>
                    <span className="inline-block text-xs font-black text-amber-700 bg-amber-200/60 px-2.5 py-0.5 rounded-md">
                      {winnerDish.priceRange}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Action Buttons at bottom - NEVER COVERED */}
            <div className="p-3.5 sm:p-4 bg-stone-50 border-t border-amber-100 shrink-0 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowWinnerModal(false);
                    setTimeout(() => spinWheel(), 200);
                  }}
                  className="py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm bg-stone-200 hover:bg-stone-300 text-stone-800 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>Quay lại</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowWinnerModal(false);
                    setShowAddInput(true);
                  }}
                  className="py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4 shrink-0" />
                  <span>Thêm món khác</span>
                </button>
              </div>

              {winnerDish && (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onToggleFavorite(winnerDish.id);
                    }}
                    className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isFavorite(winnerDish.id)
                        ? 'bg-rose-500 text-white shadow-xs'
                        : 'bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200'
                    }`}
                  >
                    <Heart className={`w-4 h-4 shrink-0 ${isFavorite(winnerDish.id) ? 'fill-current' : ''}`} />
                    <span>{isFavorite(winnerDish.id) ? 'Đã lưu' : 'Lưu món'}</span>
                  </button>

                  {onViewDishDetail && (
                    <button
                      type="button"
                      onClick={() => {
                        setShowWinnerModal(false);
                        onViewDishDetail(winnerDish);
                      }}
                      className="py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <Eye className="w-4 h-4 shrink-0" />
                      <span>Xem chi tiết</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
