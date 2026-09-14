export type MockListing = {
  id: string;
  title: string;
  price: number;
  location: string;
  country: string;
  category: string;
};

export const mockListings: MockListing[] = [
  {
    id: "1",
    title: "iPhone 15 Pro Max",
    price: 20000000,
    location: "TP. Hồ Chí Minh",
    country: "VN",
    category: "phone",
  },
  {
    id: "2",
    title: "iPhone 14 Pro",
    price: 15000000,
    location: "Hà Nội",
    country: "VN",
    category: "phone",
  },
  {
    id: "3",
    title: "MacBook Air M3",
    price: 22000000,
    location: "Đà Nẵng",
    country: "VN",
    category: "computer",
  },
  {
    id: "4",
    title: "Samsung Galaxy S25",
    price: 18000000,
    location: "TP. Hồ Chí Minh",
    country: "VN",
    category: "phone",
  },
  {
    id: "5",
    title: "MacBook Pro M4",
    price: 35000000,
    location: "California",
    country: "US",
    category: "computer",
  },
  {
    id: "6",
    title: "Toyota Camry",
    price: 280000000,
    location: "Tokyo",
    country: "JP",
    category: "vehicle",
  },
];