import urllib.request
import csv
import json
import io

# Nguồn dữ liệu CSV chuẩn trực tiếp từ GitHub kjhealy/fips-codes
# python generate_us_counties.py
url = "https://raw.githubusercontent.com/kjhealy/fips-codes/master/state_and_county_fips_master.csv"

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

print("📥 Đang tải bộ dữ liệu FIPS chuẩn từ GitHub...")
try:
    with urllib.request.urlopen(req) as response:
        lines = [line.decode('utf-8') for line in response.readlines()]

    reader = csv.DictReader(lines)
    counties_seed = []

    for row in reader:
        fips_str = row['fips']
        state_abbr = row['state']
        name = row['name']

        # Bỏ qua dòng tổng cấp quốc gia (0) và cấp tiểu bang (VD: 1000, 2000, 6000...)
        if not fips_str or fips_str == '0' or fips_str.endswith('000') or not state_abbr or state_abbr == 'NA':
            continue

        # Định dạng mã FIPS chuẩn 5 chữ số (VD: '1001' -> '01001')
        formatted_fips = fips_str.zfill(5)

        counties_seed.append({
            "name": name,
            "code": formatted_fips,
            "regionCode": state_abbr,
            "hasWard": False
        })

    output_filename = "us_counties_full_seed.json"
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(counties_seed, f, ensure_ascii=False, indent=2)

    print(f"🎉 Thành công! Đã tạo file '{output_filename}' chứa đầy đủ {len(counties_seed)} bản ghi Hạt (Counties) Hoa Kỳ.")

except Exception as e:
    print("❌ Lỗi khi tải hoặc xử lý dữ liệu:", e)