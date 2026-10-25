"tsx"
"use client"

import { useState } from "react";
import { Heart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "for-you", label: "Dành cho bạn" },
  { id: "latest", label: "Mới nhất" },
  { id: "video", label: "Video" },
];

const DEMO_ITEMS = [
  { id: 1, title: "IPHONE 16Pro 126/256 Zináp BẢO NỠ XẤU", price: "19.500.000 đ", location: "Q. 3", time: "6 giờ trước", hasVideo: false },
  { id: 2, title: "Nhà cho thuê Quận 4", price: "4,7 triệu/tháng", location: "Q. Xóm chiếu mới", time: "1 ngày trước", hasVideo: false },
  { id: 3, title: "TUYỂN DỤNG NHÂN VIÊN ĐÓNG ĐƠN", price: "Đến 35.000 đ/tháng", location: "Q. Gò Vấp", time: "2 ngày trước", hasVideo: false },
  { id: 4, title: "Căn Hộ: CHOV 28 phòng - Tân Phú", price: "15 tỷ", location: "Q. Tân Phú", time: "14 giờ trước", hasVideo: true },
  { id: 5, title: "Tủ lạnh Panasonic NR-BA229PKXV Mới", price: "4.800.000 đ", location: "Q. Bình Thạnh", time: "54 giờ trước", hasVideo: false },
  { id: 6, title: "Gà chọi 2.6 kg", price: "800.000 đ", location: "Tp. Cao Lãnh", time: "1 ngày trước", hasVideo: false },
];

export function ListingTabs() {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="my-6">
      {/* Tabs Header */}
      <div className="flex border-b border-slate-200 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 px-6 text-sm font-bold border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-amber-500 text-slate-900"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {DEMO_ITEMS.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="relative">
              <div className="absolute top-2 right-2 z-10 bg-black/40 hover:bg-black/60 p-1.5 rounded-full text-white cursor-pointer">
                <Heart className="w-3.5 h-3.5" />
              </div>
              {item.hasVideo && (
                <div className="absolute bottom-2 left-2 z-10 bg-black/60 text-white px-2 py-0.5 rounded text-[10px] flex items-center gap-1 font-medium">
                  <Play className="w-3 h-3 fill-current" /> Video
                </div>
              )}
              <div className="h-36 bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                [Ảnh demo]
              </div>
            </div>
            <div className="p-2.5 flex flex-col justify-between flex-1">
              <div>
                <h4 className="text-xs font-medium text-slate-800 line-clamp-2 mb-1 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h4>
                <div className="text-xs font-bold text-red-600">{item.price}</div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-t pt-2 mt-2">
                <span className="truncate max-w-[70%]" title={item.location}>{item.location}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-6">
        <Button variant="outline" className="border-slate-300 px-8 py-2 font-semibold text-slate-700 hover:bg-slate-50">
          Xem thêm
        </Button>
      </div>
    </div>
  );
};
