import { useCurrencies } from "./use-currencies";

// export function useCurrencyNameByCode(code: string | null): string {
//   const { data: currencies } = useCurrencies();

//   if (!code || !currencies) return "Chưa cập nhật";

//   // Tìm tiền tệ theo mã code từ danh sách đã cache
//   const currency = currencies.find((c) => c.code === code);

//   return currency ? `${currency.name} (${currency.symbol})` : "Chưa cập nhật";
// }