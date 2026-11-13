import { and, asc, eq, ilike, or } from "drizzle-orm";
import { db } from "@/db";
import { currencies, type Currency } from "@/db/schema";

export type CurrencySearchOptions = {
  query?: string;
  activeOnly?: boolean;
};

export async function listCurrencies({
  query,
  activeOnly = true,
}: CurrencySearchOptions = {}): Promise<Currency[]> {
  const q = query?.trim();
  const searchCondition = q
    ? or(
        ilike(currencies.code, `%${q}%`),
        ilike(currencies.name, `%${q}%`),
        ilike(currencies.symbol, `%${q}%`),
      )
    : undefined;

  const activeCondition = activeOnly
    ? eq(currencies.isActive, true)
    : undefined;

  const where = and(activeCondition, searchCondition);

  const queryBuilder = db
    .select()
    .from(currencies)
    .orderBy(asc(currencies.code)); // Sắp xếp theo mã tiền tệ (hoặc thay đổi cột bạn muốn)

  return where ? queryBuilder.where(where) : queryBuilder;
}