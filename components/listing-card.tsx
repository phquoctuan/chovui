import { Card, CardContent } from "@/components/ui/card";

type ListingCardProps = {
  title: string;
  price: number;
  location: string;
};

export function ListingCard({
  title,
  price,
  location,
}: ListingCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="font-semibold">
          {title}
        </h2>

        <p className="mt-2 font-medium">
          {price.toLocaleString("vi-VN")} ₫
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {location}
        </p>
      </CardContent>
    </Card>
  );
}