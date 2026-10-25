"tsx"
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <div className="bg-[#FFD400] rounded-2xl p-6 md:p-8 my-6 text-slate-900 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
      <div className="flex flex-col gap-2 max-w-lg z-10 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-slate-900">
          Cà phê miễn phí tặng bồ tèo có app!
        </h2>
        <p className="text-sm font-semibold text-slate-800">
          Lấy cả phê ngay
        </p>
        <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
          <Button className="bg-black text-white hover:bg-slate-800 px-4 py-2 text-xs font-bold rounded-lg">
            App Store
          </Button>
          <Button className="bg-black text-white hover:bg-slate-800 px-4 py-2 text-xs font-bold rounded-lg">
            Google Play
          </Button>
        </div>
      </div>
      <div className="z-10 flex items-center justify-center">
        <div className="w-36 h-36 bg-white/40 rounded-full flex items-center justify-center shadow-inner text-xs font-bold text-slate-700 italic">
          [Banner Illustration]
        </div>
      </div>
    </div>
  );
};
