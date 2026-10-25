"tsx"
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-8 pb-12 text-xs text-slate-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Tải ứng dụng Chợ Tốt */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-900 uppercase">Tải ứng dụng Chợ Tốt</h4>
            <div className="w-28 h-28 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-center text-[10px] text-slate-400">
              [QR Code]
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-black text-white rounded px-3 py-1.5 text-center font-medium cursor-pointer">App Store</div>
              <div className="bg-black text-white rounded px-3 py-1.5 text-center font-medium cursor-pointer">Google Play</div>
            </div>
          </div>

          {/* Hỗ trợ khách hàng */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-slate-900 uppercase">Hỗ trợ khách hàng</h4>
            <Link href="#" className="hover:text-amber-600">Trung tâm trợ giúp</Link>
            <Link href="#" className="hover:text-amber-600">An toàn mua bán</Link>
            <Link href="#" className="hover:text-amber-600">Liên hệ hỗ trợ</Link>
          </div>

          {/* Về Chợ Tốt */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-slate-900 uppercase">Về Chợ Tốt</h4>
            <Link href="#" className="hover:text-amber-600">Giới thiệu</Link>
            <Link href="#" className="hover:text-amber-600">Quy chế hoạt động sàn</Link>
            <Link href="#" className="hover:text-amber-600">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-amber-600">Giải quyết khiếu nại</Link>
            <Link href="#" className="hover:text-amber-600">Tuyển dụng</Link>
            <Link href="#" className="hover:text-amber-600">Truyền thông</Link>
            <Link href="#" className="hover:text-amber-600">Blog</Link>
          </div>

          {/* Liên kết */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-slate-900 uppercase">Liên kết</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">f</div>
              <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">yt</div>
              <div className="w-7 h-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold">in</div>
            </div>
            <p className="text-slate-500">Email: trợgiúp@chotot.vn</p>
            <p className="text-slate-500">CSKH: 19003003 (1000đ/phút)</p>
            <p className="text-slate-500 mt-2">
              Địa chỉ: Tầng 18, Toà nhà UOA, Số 6 đường Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 text-center text-[11px] text-slate-500 flex flex-col gap-1">
          <p>CÔNG TY TNHH CHỢ TỐT - Người đại diện pháp luật: Nguyễn Trọng Tấn; Giấy phép ĐKKD số: 0312120782 cấp ngày 20/12/2012 bởi Sở Kế hoạch và Đầu tư TPHCM.</p>
          <p>Địa chỉ: Tầng 18, Tòa nhà UOA, số 6 đường Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh, Việt Nam - Chăm sóc khách hàng: cskh@chotot.vn - Tổng đài CSKH: 19003003 (1.000đ/phút).</p>
        </div>
      </div>
    </footer>
  );
};
