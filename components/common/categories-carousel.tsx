"tsx"
import { Smartphone, Car, Home, Briefcase, Tv, Shirt, Wrench, Package, Utensils, Gift, HeartHandshake, MoreHorizontal } from "lucide-react";

const CATEGORIES = [
  { id: 1, name: "Đồ điện tử", icon: Smartphone },
  { id: 2, name: "Xe cộ", icon: Car },
  { id: 3, name: "Bất động sản", icon: Home },
  { id: 4, name: "Việc làm", icon: Briefcase },
  { id: 5, name: "Đồ gia dụng", icon: Tv },
  { id: 6, name: "Thời trang", icon: Shirt },
  { id: 7, name: "Dịch vụ, giải trí", icon: Wrench },
  { id: 8, name: "Thú cưng", icon: Package },
  { id: 9, name: "Đồ ăn, thực phẩm", icon: Utensils },
  { id: 10, name: "Tặng miễn phí", icon: Gift },
  { id: 11, name: "Từ thiện", icon: HeartHandshake },
  { id: 12, name: "Tất cả danh mục", icon: MoreHorizontal },
];

export function CategoriesCarousel() {
  return (
    <div className="bg-white border-b py-4 shadow-xs">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id} 
                className="flex flex-col items-center gap-2 min-w-[76px] cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-amber-700 transition-colors shadow-xs border border-amber-100">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-center text-slate-700 font-medium line-clamp-2 max-w-[80px]">
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
