import React from 'react';
import { Utensils, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-16 border-t border-stone-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-800">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center text-white font-black">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                HÔM NAY ĂN GÌ?
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Ứng dụng hỗ trợ chọn món ăn ngoài quán nhanh chóng, chuẩn vị Việt Nam. Không còn đau đầu với câu hỏi &ldquo;Trưa nay ăn gì?&rdquo; hay &ldquo;Tối nay ăn gì?&rdquo;.
            </p>
          </div>

          {/* Slogan & Culture */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Văn hóa ẩm thực quán xá
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              &ldquo;Ăn Bắc, mặc Kinh, thưởng vị Sài Gòn&rdquo; — những món ăn ngoài quán dễ tìm, hình ảnh chuẩn từ bún phở nóng hổi, cơm tấm thơm nức mũi đến những món ăn vặt trứ danh hè phố.
            </p>
          </div>

          {/* Quick Note */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Tiện ích thông minh
            </h4>
            <ul className="text-xs text-stone-400 space-y-1.5">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Tính năng &ldquo;Ăn gì đây ta&rdquo; tùy biến linh hoạt</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Hình ảnh chân thực 100% chuẩn từng món</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Lưu trữ cục bộ (localStorage) không sợ mất dữ liệu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Hôm Nay Ăn Gì? — Dành cho những tâm hồn yêu ẩm thực Việt.</p>
          <div className="flex items-center gap-1">
            <span>Được tạo với niềm đam mê ẩm thực</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};
