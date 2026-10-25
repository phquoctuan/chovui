import {
  mockListings,
  type MockListing,
} from "@/data/mock-listings";
import {PAGE_SIZE_OPTIONS, DEFAULT_PAGE_SIZE} from "@/const.js";
import { integer } from 'drizzle-orm/pg-core';
import {type Listing } from "@/db/schema";

// const PAGE_SIZE_OPTIONS = [2, 10, 20, 30, 50] as const;
// const DEFAULT_PAGE_SIZE = 2;

export type ListingQuery = {
  q?: string;
  country?: number;
  category?: number;
  location?: number;
  minPrice?: string;
  maxPrice?: string;
  page?: string;
  pageSize?: string;
};

export type MockListingResult = {
  listings: MockListing[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};

export type ListingResult = {
  listings: Listing[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};

export function getMockListings(query: ListingQuery,): MockListingResult 
{
  const {
    q,
    country,
    category,
    location,
    minPrice,
    maxPrice,
    page,
    pageSize,
  } = query;

  const requestedPage = Math.max(
    1,
    Number(page) || 1,
  );
  const parsedPageSize = Number(pageSize);

  const currentPageSize = PAGE_SIZE_OPTIONS.includes(
    parsedPageSize as (typeof PAGE_SIZE_OPTIONS)[number],
  )
    ? parsedPageSize
    : DEFAULT_PAGE_SIZE;

  const filteredListings = mockListings.filter(
    (listing) => {
      const matchesQuery =
        !q ||
        listing.title
          .toLowerCase()
          .includes(q.toLowerCase());

      const matchesCountry =
        !country || listing.country === String(country);

      const matchesCategory =
        !category || listing.category === String(category);

      const matchesLocation =
        !location ||
        listing.location
          .toLowerCase()
          .includes(String(location).toLowerCase());

      const matchesMinPrice =
        !minPrice ||
        listing.price >= Number(minPrice);

      const matchesMaxPrice =
        !maxPrice ||
        listing.price <= Number(maxPrice);

      return (
        matchesQuery &&
        matchesCountry &&
        matchesCategory &&
        matchesLocation &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    },
  );

  const totalItems = filteredListings.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / currentPageSize),
  );

  const currentPage = Math.min(
    requestedPage,
    totalPages,
  );

  const startIndex =
    (currentPage - 1) * currentPageSize;

  const listings = filteredListings.slice(
    startIndex,
    startIndex + currentPageSize,
  );

  return {
    listings,
    totalItems,
    totalPages,
    currentPage,
    pageSize: currentPageSize,
  };
}