// components/listings/templates/VehicleTemplate.tsx
export function VehicleTemplate({ listing }: { listing: any }) {
  const attrs = listing.attributes; // { brand: 'Honda', year: 2023, km: 5000 }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      {/* Hiển thị thông số đặc thù Xe cộ */}
      <div className="grid grid-cols-3 gap-4 bg-muted p-4 rounded-lg">
        <div>
          Hãng xe: <b>{attrs.brand}</b>
        </div>
        <div>
          Năm sản xuất: <b>{attrs.year}</b>
        </div>
        <div>
          Số km đã đi: <b>{attrs.km} km</b>
        </div>
      </div>
      <p>{listing.description}</p>
    </div>
  );
}