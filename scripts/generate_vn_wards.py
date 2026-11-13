import urllib.request
import json

# API chính thức cung cấp toàn bộ danh sách Tỉnh/Thành -> Quận/Huyện -> Xã/Phường (depth=3)
url = "https://provinces.open-api.vn/api/?depth=3"

print("📥 Đang tải toàn bộ dữ liệu hành chính cấp Phường/Xã từ API chính thức...")
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        provinces_data = json.loads(response.read().decode('utf-8'))
    
    wards_seed = []

    for province in provinces_data:
        province_code = province.get("code") # Dùng làm định danh hoặc ánh xạ sang regionCode của bạn
        province_name = province.get("name")
        districts = province.get("districts", [])

        for district in districts:
            district_code = str(district.get("code"))
            district_name = district.get("name")
            wards = district.get("wards", [])

            for ward in wards:
                wards_seed.append({
                    "name": ward.get("name"),
                    "code": str(ward.get("code")),
                    "regionCode": str(province_code),  # Hoặc map sang mã chữ (VD: 'HP', 'HN'...) tùy theo bảng regions của bạn
                    "countyCode": district_code        # Mã quận/huyện để tra cứu countyId tương ứng
                })

    output_filename = "wards_vn_data.json"
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(wards_seed, f, ensure_ascii=False, indent=2)

    print(f"🎉 Thành công! Đã tạo file '{output_filename}' chứa đầy đủ {len(wards_seed)} Phường/Xã/Thị trấn.")

except Exception as e:
    print("❌ Lỗi khi tải dữ liệu:", e)