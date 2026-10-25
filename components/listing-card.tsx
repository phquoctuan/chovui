import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

type ListingCardProps = {
  id: string,
  title: string;
  price: string|null;
  location: string|null;
};

export function ListingCard({
  id,
  title,
  price,
  location,
}: ListingCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="font-semibold">
          <Link
            href={`/listing/${id}`}
            className="hover:underline"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-2 font-medium">
          {price} ₫
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {location}
        </p>
      </CardContent>
    </Card>
  );
}