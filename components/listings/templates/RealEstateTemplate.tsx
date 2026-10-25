// components/listings/templates/RealEstateTemplate.tsx
export function RealEstateTemplate({ listing }: { listing: any }) {
  const attrs = listing.attributes; // { bedrooms: 2, toilets: 2, area: 80, legal: 'Sổ hồng' }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      {/* Hiển thị thông số đặc thù Bất động sản */}
      <div className="grid grid-cols-3 gap-4 bg-muted p-4 rounded-lg">
        <div>
          Diện tích: <b>{attrs.area} m²</b>
        </div>
        <div>
          Phòng ngủ: <b>{attrs.bedrooms}</b>
        </div>
        <div>
          Pháp lý: <b>{attrs.legal}</b>
        </div>
      </div>
      <p>{listing.description}</p>
    </div>
  );
}
