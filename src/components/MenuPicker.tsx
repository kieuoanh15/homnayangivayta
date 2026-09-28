import React, { useState, useMemo } from 'react';
import { 
  Search, CheckSquare, Square, Plus, Trash2, X, Check, 
  Sparkles, Filter, CheckCheck, RotateCcw, UtensilsCrossed 
} from 'lucide-react';
import { MenuCategoryGroup, WheelItem } from '../types';
import { DEFAULT_MENU_GROUPS } from '../data/defaultMenu';
import { 
  addCustomDishToStorage, removeCustomDishFromStorage, 
  createWheelItem 
} from '../utils/storage';

interface MenuPickerProps {
  currentWheelItems: WheelItem[];
  onApplySelection: (items: WheelItem[]) => void;
  customDishes: string[];
  onUpdateCustomDishes: (dishes: string[]) => void;
  onClose?: () => void;
  isModal?: boolean;
}

export const MenuPicker: React.FC<MenuPickerProps> = ({
  currentWheelItems,
  onApplySelection,
  customDishes,
  onUpdateCustomDishes,
  onClose,
  isModal = false
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newDishInput, setNewDishInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>('all');

  // Currently selected dish names in local state before applying
  const [selectedNames, setSelectedNames] = useState<Set<string>>(() => {
    return new Set(currentWheelItems.map((item) => item.name.toLowerCase()));
  });

  // Construct all category groups including custom items if present
  const allGroups = useMemo<MenuCategoryGroup[]>(() => {
    const groups = [...DEFAULT_MENU_GROUPS];
    if (customDishes.length > 0) {
      groups.push({
        id: 'custom',
        title: 'MÓN TỰ THÊM',
        icon: '🌟',
        color: '#EC4899',
        items: customDishes
      });
    }
    return groups;
  }, [customDishes]);

  // All unique dish names across all groups
  const allAvailableDishNames = useMemo(() => {
    return allGroups.flatMap((g) => g.items);
  }, [allGroups]);

  // Filtered groups based on search & category filter
  const filteredGroups = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return allGroups
      .filter((group) => {
        if (selectedGroupFilter !== 'all' && group.id !== selectedGroupFilter) {
          return false;
        }
        return true;
      })
      .map((group) => {
        const filteredItems = group.items.filter((item) => {
          if (!q) return true;
          return item.toLowerCase().includes(q);
        });
        return {
          ...group,
          items: filteredItems
        };
      })
      .filter((group) => group.items.length > 0);
  }, [allGroups, searchQuery, selectedGroupFilter]);

  // Toggle single dish
  const toggleDish = (name: string) => {
    const lower = name.toLowerCase();
    const next = new Set(selectedNames);
    if (next.has(lower)) {
      next.delete(lower);
    } else {
      next.add(lower);
    }
    setSelectedNames(next);
  };

  // Select all (from currently filtered or all dishes)
  const handleSelectAll = () => {
    const next = new Set(selectedNames);
    allAvailableDishNames.forEach((name) => {
      next.add(name.toLowerCase());
    });
    setSelectedNames(next);
  };

  // Deselect all
  const handleDeselectAll = () => {
    setSelectedNames(new Set());
  };

  // Select all in a specific group
  const handleSelectGroup = (items: string[]) => {
    const next = new Set(selectedNames);
    items.forEach((item) => next.add(item.toLowerCase()));
    setSelectedNames(next);
  };

  // Deselect all in a specific group
  const handleDeselectGroup = (items: string[]) => {
    const next = new Set(selectedNames);
    items.forEach((item) => next.delete(item.toLowerCase()));
    setSelectedNames(next);
  };

  // Add custom dish
  const handleAddCustomDish = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newDishInput.trim();
    if (!trimmed) return;

    // Check if dish already exists in list (case insensitive)
    const exists = allAvailableDishNames.some(
      (n) => n.toLowerCase() === trimmed.toLowerCase()
    );

    if (!exists) {
      const updatedCustom = addCustomDishToStorage(trimmed);
      onUpdateCustomDishes(updatedCustom);
    }

    // Automatically check the new dish
    const next = new Set(selectedNames);
    next.add(trimmed.toLowerCase());
    setSelectedNames(next);

    setNewDishInput('');
    setShowAddForm(false);
  };

  // Delete custom dish
  const handleDeleteCustomDish = (dishName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = removeCustomDishFromStorage(dishName);
    onUpdateCustomDishes(updated);

    const next = new Set(selectedNames);
    next.delete(dishName.toLowerCase());
    setSelectedNames(next);
  };

  // Apply selected items to wheel
  const handleApply = () => {
    // Build new WheelItem array preserving existing ones or creating new
    const existingMap = new Map(
      currentWheelItems.map((it) => [it.name.toLowerCase(), it])
    );

    // Map through all names that are in selectedNames
    const result: WheelItem[] = [];

    // First preserve existing order of items that remain selected
    currentWheelItems.forEach((item) => {
      if (selectedNames.has(item.name.toLowerCase())) {
        result.push({ ...item, enabled: true });
      }
    });

    // Then append newly selected items that weren't in wheel before
    allAvailableDishNames.forEach((name) => {
      const lower = name.toLowerCase();
      if (selectedNames.has(lower) && !existingMap.has(lower)) {
        result.push(createWheelItem(name));
      }
    });

    onApplySelection(result);
    if (onClose) {
      onClose();
    }
  };

  // Count how many are selected
  const selectedCount = selectedNames.size;

  return (
    <div className={`bg-white rounded-3xl border border-amber-100 shadow-xl overflow-hidden flex flex-col ${isModal ? 'max-h-[90vh]' : 'w-full'}`}>
      {/* Header */}
      <div className="p-4 sm:p-6 bg-linear-to-r from-amber-50 via-orange-50/70 to-rose-50 border-b border-amber-200/70 flex items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📋</span>
            <h2 className="text-xl sm:text-2xl font-black text-stone-800 tracking-tight">
              Danh Sách Món Ăn Mặc Định
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-500 text-white">
              60+ món
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Chọn các món bạn muốn ăn hôm nay, sau đó bấm &ldquo;Thêm vào vòng quay&rdquo;.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Control bar: Search, Custom Dish Form, Quick Actions */}
      <div className="p-4 sm:p-6 border-b border-amber-100 space-y-4 bg-white">
        {/* Search & Add button */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm món trong danh sách (Cơm tấm, Phở, Lẩu, Bánh mì...)"
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-amber-50/50 border border-amber-200 text-sm font-medium text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>+ Thêm món mới</span>
          </button>
        </div>

        {/* Custom dish creation input form */}
        {showAddForm && (
          <form
            onSubmit={handleAddCustomDish}
            className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row gap-2 animate-in fade-in"
          >
            <input
              type="text"
              value={newDishInput}
              onChange={(e) => setNewDishInput(e.target.value)}
              placeholder="Nhập tên món mới (vd: Cháo sườn, Hủ tiếu dê, Bún đậu mắm tôm đặc biệt...)"
              autoFocus
              className="flex-1 px-3.5 py-2 bg-white rounded-xl border border-amber-300 text-sm font-medium text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex gap-2 justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Lưu & Chọn
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-semibold rounded-xl"
              >
                Hủy
              </button>
            </div>
          </form>
        )}

        {/* Action Buttons: Chọn tất cả, Bỏ chọn tất cả & Group filter pills */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSelectAll}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <CheckCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Chọn tất cả ({allAvailableDishNames.length})</span>
            </button>

            <button
              onClick={handleDeselectAll}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
              <span>Bỏ chọn tất cả</span>
            </button>
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedGroupFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                selectedGroupFilter === 'all'
                  ? 'bg-stone-800 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Tất cả nhóm
            </button>
            {allGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedGroupFilter(group.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 transition-colors cursor-pointer ${
                  selectedGroupFilter === group.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-amber-50 text-stone-700 hover:bg-amber-100'
                }`}
              >
                <span>{group.icon}</span>
                <span>{group.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dish Groups List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-h-[55vh]">
        {filteredGroups.length === 0 ? (
          <div className="text-center py-12 text-stone-400 space-y-3">
            <UtensilsCrossed className="w-10 h-10 mx-auto text-stone-300" />
            <p className="text-sm font-medium">
              Không tìm thấy món nào với từ khóa &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGroupFilter('all');
              }}
              className="text-xs text-orange-600 font-bold hover:underline"
            >
              Xem lại toàn bộ danh sách
            </button>
          </div>
        ) : (
          filteredGroups.map((group) => {
            const groupItemNames = group.items;
            const selectedInGroupCount = groupItemNames.filter((item) =>
              selectedNames.has(item.toLowerCase())
            ).length;
            const allSelectedInGroup =
              groupItemNames.length > 0 &&
              selectedInGroupCount === groupItemNames.length;

            return (
              <div
                key={group.id}
                className="bg-amber-50/40 rounded-2xl p-4 sm:p-5 border border-amber-100 space-y-3"
              >
                {/* Group Header */}
                <div className="flex items-center justify-between border-b border-amber-200/50 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{group.icon}</span>
                    <h3 className="font-black text-sm sm:text-base text-stone-800 tracking-tight">
                      {group.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-stone-600 border border-amber-200">
                      {selectedInGroupCount}/{groupItemNames.length}
                    </span>
                  </div>

                  {/* Group bulk select/deselect */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        allSelectedInGroup
                          ? handleDeselectGroup(groupItemNames)
                          : handleSelectGroup(groupItemNames)
                      }
                      className="text-xs font-bold text-amber-700 hover:text-orange-600 transition-colors cursor-pointer"
                    >
                      {allSelectedInGroup ? 'Bỏ chọn nhóm' : 'Chọn cả nhóm'}
                    </button>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {group.items.map((itemName) => {
                    const isChecked = selectedNames.has(itemName.toLowerCase());
                    const isCustom = group.id === 'custom';

                    return (
                      <div
                        key={itemName}
                        onClick={() => toggleDish(itemName)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                          isChecked
                            ? 'bg-white border-amber-400 shadow-2xs'
                            : 'bg-white/60 border-stone-200/80 hover:bg-white text-stone-600'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-amber-500 shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-stone-400 shrink-0" />
                          )}
                          <span
                            className={`text-xs sm:text-sm font-semibold truncate ${
                              isChecked ? 'text-stone-900 font-bold' : 'text-stone-700'
                            }`}
                          >
                            {itemName}
                          </span>
                        </div>

                        {isCustom && (
                          <button
                            type="button"
                            onClick={(e) => handleDeleteCustomDish(itemName, e)}
                            title="Xóa món tự thêm này"
                            className="p-1 rounded-md text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors ml-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer Bottom Action Bar with Stats */}
      <div className="p-4 sm:p-5 bg-stone-50 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-bold text-stone-700">
            Đã chọn: <span className="text-orange-600 text-base font-black">{selectedCount}</span> món
          </span>
          {selectedCount < 2 && (
            <span className="text-xs text-rose-600 font-medium">
              (Cần chọn ít nhất 2 món để quay)
            </span>
          )}
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {onClose && (
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-stone-600 bg-white border border-stone-200 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Đóng
            </button>
          )}

          <button
            onClick={handleApply}
            disabled={selectedCount < 2}
            className="flex-1 sm:flex-initial px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-black bg-linear-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Thêm vào &ldquo;Ăn gì đây ta&rdquo; ({selectedCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
