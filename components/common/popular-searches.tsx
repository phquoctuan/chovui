"tsx"
const SEARCH_COLUMNS = [
  {
    title: "Khu vực",
    items: ["TPHCM", "Hà Nội", "Đà Nẵng", "Bình Dương", "Đồng Nai", "Hải Phòng", "Cần Thơ", "Vũng Tàu", "Long An", "Bình Phước"]
  },
  {
    title: "Thuê phòng trọ theo khu vực",
    items: ["Thuê phòng trọ TPHCM", "Thuê phòng trọ Hà Nội", "Thuê phòng trọ Cần Thơ", "Thuê phòng trọ Đà Nẵng", "Thuê phòng trọ Bình Dương", "Thuê phòng trọ Đồng Nai", "Thuê phòng trọ Vũng Tàu", "Thuê phòng trọ Long An", "Thuê phòng trọ Lâm Đồng", "Thuê phòng trọ Thừa Thiên Huế"]
  },
  {
    title: "Điện thoại cũ theo hãng phổ biến",
    items: ["iPhone cũ", "Điện thoại Samsung cũ", "Điện thoại Xiaomi cũ", "Điện thoại Oppo cũ", "Điện thoại Vivo cũ", "Điện thoại Realme cũ", "Điện thoại Nokia cũ", "Điện thoại Huawei cũ", "Điện thoại Asus cũ", "Điện thoại Tecno cũ"]
  },
  {
    title: "Laptop cũ theo hãng phổ biến",
    items: ["Macbook cũ", "Laptop Dell cũ", "Laptop HP cũ", "Laptop Lenovo cũ", "Laptop Asus cũ", "Laptop Acer cũ", "Laptop MSI cũ", "Laptop Sony cũ", "Laptop Toshiba cũ"]
  },
  {
    title: "Ipad cũ theo hãng phổ biến",
    items: ["iPad cũ", "Máy tính bảng Samsung cũ", "Máy tính bảng Xiaomi cũ", "Máy tính bảng Lenovo cũ", "Máy tính bảng Huawei cũ", "Máy tính bảng Amazon cũ", "Máy tính bảng Honor cũ", "Máy tính bảng Huawei cũ"]
  },
];

export function PopularSearches() {
  return (
    <div className="border-t border-slate-200 py-8 my-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {SEARCH_COLUMNS.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase">{col.title}</h4>
            <ul className="flex flex-col gap-1.5">
              {col.items.map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-xs text-slate-500 hover:text-amber-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
