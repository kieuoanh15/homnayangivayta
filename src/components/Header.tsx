import React, { useState } from 'react';
import { Utensils, Sparkles, Heart, Compass, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { isAudioEnabled, setAudioEnabled } from '../utils/audio';

interface HeaderProps {
  currentTab: 'home' | 'wheel' | 'catalog' | 'favorites';
  onSelectTab: (tab: 'home' | 'wheel' | 'catalog' | 'favorites') => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  favoritesCount
}) => {
  const [soundOn, setSoundOn] = useState(() => isAudioEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setAudioEnabled(next);
  };

  const navLinks = [
    { id: 'home', label: 'Trang chủ', icon: Utensils },
    { id: 'wheel', label: 'Ăn gì đây ta', icon: Sparkles, badge: 'Hot' },
    { id: 'catalog', label: 'Khám phá', icon: Compass },
    { id: 'favorites', label: 'Yêu thích', icon: Heart, count: favoritesCount }
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer shrink-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-linear-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Utensils className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </div>
          <div className="shrink-0">
            <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
              <span className="font-black text-lg sm:text-2xl tracking-tight bg-linear-to-r from-orange-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent whitespace-nowrap inline-block">
                HÔM NAY ĂN GÌ?
              </span>
              <span className="inline-block animate-bounce text-sm sm:text-base shrink-0">🍜</span>
            </div>
            <p className="text-xs text-stone-500 font-medium hidden sm:block whitespace-nowrap">
              Chọn món quán nhanh &amp; chuẩn vị
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`relative px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-[1.02]'
                    : 'text-stone-700 hover:text-orange-600 hover:bg-amber-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                <span>{item.label}</span>

                {'badge' in item && item.badge && !isActive && (
                  <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-rose-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}

                {'count' in item && typeof item.count === 'number' && item.count > 0 && (
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                      isActive ? 'bg-white text-amber-700' : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={soundOn ? 'Tắt âm thanh' : 'Bật âm thanh'}
            className="p-2.5 ml-1 rounded-xl text-stone-600 hover:text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
          >
            {soundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-stone-400" />}
          </button>
        </nav>

        {/* Mobile Action Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleToggleSound}
            aria-label="Bật tắt âm thanh"
            className="p-2 rounded-xl text-stone-600 hover:bg-amber-50"
          >
            {soundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-stone-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-2 rounded-xl text-stone-700 bg-amber-50 hover:bg-amber-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-100 bg-white/98 px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-amber-500 text-white font-bold'
                    : 'text-stone-700 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {'count' in item && typeof item.count === 'number' && item.count > 0 && (
                  <span
                    className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                      isActive ? 'bg-white text-amber-700' : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
