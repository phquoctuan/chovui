"tsx"
import { Flame, ShieldCheck, Heart } from "lucide-react";

const DEMO_FEATURED = [
  { id: 1, title: "CĂN TRỐNG *** 1 PHÒNG SÁT BẾN ĐẠI", price: "2.2 triệu/tháng", location: "Q. Phú Nhuận", time: "6 giờ trước", tag: "Tin trả phí" },
  { id: 2, title: "IPHONE 12PM 128G 2SIM ZIN KHOANG MỜ XẤU", price: "14.900.000 đ", location: "Q. 3", time: "5 giờ trước", tag: "Tin trả phí" },
  { id: 3, title: "CHO THUÊ NHÀ 57 LÊ ĐÌNH CẨN 3 TRIỆU", price: "6 triệu/tháng", location: "Q. Bình Tân", time: "7 giờ trước", tag: "Tin trả phí" },
  { id: 4, title: "Cho thuê phòng trọ tại An Hải", price: "1.7 triệu/tháng", location: "Tp. Nha Trang", time: "8 giờ trước", tag: "Tin trả phí" },
];

export function FeaturedAds() {
  return (
    <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 my-6 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center">
            <Flame className="w-4 h-4 fill-current" />
          </div>
          <h3 className="text-base font-bold text-slate-900 uppercase">Tin được trả phí cao</h3>
        </div>
        <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">Nổi bật</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DEMO_FEATURED.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow relative group">
            <div className="absolute top-2 right-2 z-10 bg-black/40 hover:bg-black/60 p-1.5 rounded-full text-white cursor-pointer">
              <Heart className="w-4 h-4" />
            </div>
            <div className="h-40 bg-slate-200 relative flex items-center justify-center text-slate-400 font-medium">
              [Ảnh demo]
              <span className="absolute bottom-2 left-2 bg-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded font-semibold">
                {item.tag}
              </span>
            </div>
            <div className="p-3 flex flex-col justify-between h-[120px]">
              <div>
                <h4 className="text-xs font-semibold text-slate-800 line-clamp-2 mb-1 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h4>
                <div className="text-sm font-bold text-red-600">{item.price}</div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 border-t pt-2 mt-1">
                <span>{item.location}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
