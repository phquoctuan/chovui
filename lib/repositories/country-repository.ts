import { and, asc, eq, ilike, or } from "drizzle-orm";

import { db } from "@/db";
import { countries, type Country } from "@/db/schema/countries";

export type CountrySearchOptions = {
  query?: string;
  activeOnly?: boolean;
};

export async function listCountries({
  query,
  activeOnly = true,
}: CountrySearchOptions = {}): Promise<Country[]> {
  const q = query?.trim();
  const searchCondition = q
    ? or(
        ilike(countries.code, `%${q}%`),
        ilike(countries.name, `%${q}%`),
        ilike(countries.nameVi, `%${q}%`),
        ilike(countries.nameEn, `%${q}%`),
        ilike(countries.nativeName, `%${q}%`),
        ilike(countries.phoneCode, `%${q}%`),
      )
    : undefined;

  const activeCondition = activeOnly
    ? eq(countries.isActive, true)
    : undefined;

  const where = and(activeCondition, searchCondition);

  const queryBuilder = db
    .select()
    .from(countries)
    .orderBy(asc(countries.sortOrder), asc(countries.nameVi));

  return where ? queryBuilder.where(where) : queryBuilder;
}

export async function getCountryByCode(code: string): Promise<Country | null> {
  const [country] = await db
    .select()
    .from(countries)
    .where(eq(countries.code, code.toUpperCase()))
    .limit(1);

  return country ?? null;
}
