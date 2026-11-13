// types/seed.ts hoặc file seed tương ứng
import { db } from "@/db"; // Thay thế bằng đường dẫn kết nối database của bạn
import { regions, counties } from "@/db/schema"; // Thay thế bằng đường dẫn schema của bạn
import { and, eq } from "drizzle-orm";


export interface CountySeedItem {
  name: string;
  code: string;
  regionCode: string;
  hasWard: boolean;
}

export const rawCountiesSeed: CountySeedItem[] = [
  // --- HÀ NỘI (HN) ---
  { name: 'Quận Ba Đình', code: 'BD', regionCode: 'HN', hasWard: true },
  { name: 'Quận Hoàn Kiếm', code: 'HK', regionCode: 'HN', hasWard: true },
  { name: 'Quận Tây Hồ', code: 'THO', regionCode: 'HN', hasWard: true },
  { name: 'Quận Long Biên', code: 'LB', regionCode: 'HN', hasWard: true },
  { name: 'Quận Cầu Giấy', code: 'CG', regionCode: 'HN', hasWard: true },
  { name: 'Quận Đống Đa', code: 'DD', regionCode: 'HN', hasWard: true },
  { name: 'Quận Hai Bà Trưng', code: 'HBT', regionCode: 'HN', hasWard: true },
  { name: 'Quận Hoàng Mai', code: 'HM', regionCode: 'HN', hasWard: true },
  { name: 'Quận Thanh Xuân', code: 'TX', regionCode: 'HN', hasWard: true },
  { name: 'Quận Sóc Sơn', code: 'SS', regionCode: 'HN', hasWard: true },
  { name: 'Huyện Đông Anh', code: 'DA', regionCode: 'HN', hasWard: true },
  { name: 'Huyện Gia Lâm', code: 'GL', regionCode: 'HN', hasWard: true },
  { name: 'Quận Nam Từ Liêm', code: 'NTL', regionCode: 'HN', hasWard: true },
  { name: 'Huyện Thanh Trì', code: 'TT', regionCode: 'HN', hasWard: true },
  { name: 'Quận Bắc Từ Liêm', code: 'BTL', regionCode: 'HN', hasWard: true },

  // --- HÀ TÂY (CŨ - GỘP THUỘC HTY TRONG REGION SEED) ---
  { name: 'Quận Hà Đông', code: 'HD', regionCode: 'HTY', hasWard: true },
  { name: 'Thị xã Sơn Tây', code: 'ST', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Ba Vì', code: 'BV', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Phúc Thọ', code: 'PT', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Đan Phượng', code: 'DP', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Hoài Đức', code: 'HDUOC', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Quốc Oai', code: 'QO', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Thạch Thất', code: 'TTHAT', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Chương Mỹ', code: 'CM', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Thanh Oai', code: 'TO', regionCode: 'HTY', hasWard: true },
  { name: "Huyện Thường Tín", code: "TTIN", regionCode: "HTY", hasWard: true },
  { name: 'Huyện Phú Xuyên', code: 'PX', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Ứng Hòa', code: 'UH', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Mỹ Đức', code: 'MD', regionCode: 'HTY', hasWard: true },
  { name: 'Huyện Mê Linh', code: 'ML', regionCode: 'HTY', hasWard: true },

  // --- HỒ CHÍ MINH (SGN) ---
  { name: 'Quận 1', code: 'Q1', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 12', code: 'Q12', regionCode: 'SGN', hasWard: true },
  { name: 'Quận Gò Vấp', code: 'GV', regionCode: 'SGN', hasWard: true },
  { name: 'Quận Bình Thạnh', code: 'BTH', regionCode: 'SGN', hasWard: true },
  { name: 'Quận Tân Bình', code: 'TB', regionCode: 'SGN', hasWard: true },
  { name: 'Quận Tân Phú', code: 'TP', regionCode: 'SGN', hasWard: true },
  { name: 'Quận Phú Nhuận', code: 'PN', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 3', code: 'Q3', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 10', code: 'Q10', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 11', code: 'Q11', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 4', code: 'Q4', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 5', code: 'Q5', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 6', code: 'Q6', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 8', code: 'Q8', regionCode: 'SGN', hasWard: true },
  { name: 'Quận Bình Tân', code: 'BTA', regionCode: 'SGN', hasWard: true },
  { name: 'Quận 7', code: 'Q7', regionCode: 'SGN', hasWard: true },
  { name: 'Thành phố Thủ Đức', code: 'TDC', regionCode: 'SGN', hasWard: true },
  { name: 'Huyện Củ Chi', code: 'CC', regionCode: 'SGN', hasWard: true },
  { name: 'Huyện Hóc Môn', code: 'HMON', regionCode: 'SGN', hasWard: true },
  { name: 'Huyện Bình Chánh', code: 'BC', regionCode: 'SGN', hasWard: true },
  { name: 'Huyện Nhà Bè', code: 'NBE', regionCode: 'SGN', hasWard: true },
  { name: 'Huyện Cần Giờ', code: 'CG', regionCode: 'SGN', hasWard: true },

  // --- HẢI PHÒNG (HP) ---
  { name: 'Quận Hồng Bàng', code: 'HB', regionCode: 'HP', hasWard: true },
  { name: 'Quận Ngô Quyền', code: 'NQ', regionCode: 'HP', hasWard: true },
  { name: 'Quận Lê Chân', code: 'LC', regionCode: 'HP', hasWard: true },
  { name: 'Quận Hải An', code: 'HA', regionCode: 'HP', hasWard: true },
  { name: 'Quận Kiến An', code: 'KA', regionCode: 'HP', hasWard: true },
  { name: 'Quận Đồ Sơn', code: 'DS', regionCode: 'HP', hasWard: true },
  { name: 'Quận Dương Kinh', code: 'DK', regionCode: 'HP', hasWard: true },
  { name: 'Huyện Thuỷ Nguyên', code: 'TN', regionCode: 'HP', hasWard: true },
  { name: 'Huyện An Dương', code: 'AD', regionCode: 'HP', hasWard: true },
  { name: 'Huyện An Lão', code: 'AL', regionCode: 'HP', hasWard: true },
  { name: 'Huyện Kiến Thuỵ', code: 'KT', regionCode: 'HP', hasWard: true },
  { name: 'Huyện Tiên Lãng', code: 'TL', regionCode: 'HP', hasWard: true },
  { name: 'Huyện Vĩnh Bảo', code: 'VB', regionCode: 'HP', hasWard: true },
  { name: 'Huyện Cát Hải', code: 'CH', regionCode: 'HP', hasWard: true },
  { name: 'Huyện Bạch Long Vĩ', code: 'BLV', regionCode: 'HP', hasWard: false },

  // --- ĐÀ NẴNG (DN) ---
  { name: 'Quận Liên Chiểu', code: 'LCH', regionCode: 'DN', hasWard: true },
  { name: 'Quận Thanh Khê', code: 'TK', regionCode: 'DN', hasWard: true },
  { name: 'Quận Hải Châu', code: 'HC', regionCode: 'DN', hasWard: true },
  { name: 'Quận Sơn Trà', code: 'STR', regionCode: 'DN', hasWard: true },
  { name: 'Quận Ngũ Hành Sơn', code: 'NHS', regionCode: 'DN', hasWard: true },
  { name: 'Quận Cẩm Lệ', code: 'CLE', regionCode: 'DN', hasWard: true },
  { name: 'Huyện Hòa Vang', code: 'HV', regionCode: 'DN', hasWard: true },
  { name: 'Huyện Hoàng Sa', code: 'HSA', regionCode: 'DN', hasWard: false },

  // --- CẦN THƠ (CT) ---
  { name: 'Quận Ninh Kiều', code: 'NK', regionCode: 'CT', hasWard: true },
  { name: 'Quận Bình Thủy', code: 'BTHU', regionCode: 'CT', hasWard: true },
  { name: 'Quận Cái Răng', code: 'CR', regionCode: 'CT', hasWard: true },
  { name: 'Quận Ô Môn', code: 'OM', regionCode: 'CT', hasWard: true },
  { name: 'Quận Thốt Nốt', code: 'TN', regionCode: 'CT', hasWard: true },
  { name: 'Huyện Phong Điền', code: 'PDIEN', regionCode: 'CT', hasWard: true },
  { name: 'Huyện Thới Lai', code: 'TL', regionCode: 'CT', hasWard: true },
  { name: 'Huyện Cờ Đỏ', code: 'CD', regionCode: 'CT', hasWard: true },
  { name: 'Huyện Vĩnh Thạnh', code: 'VTH', regionCode: 'CT', hasWard: true },

  // --- HÀ GIANG (HG) ---
  { name: 'Thành phố Hà Giang', code: 'TPHG', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Đồng Văn', code: 'DV', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Mèo Vạc', code: 'MV', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Yên Minh', code: 'YM', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Quản Bạ', code: 'QB', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Vị Xuyên', code: 'VX', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Bắc Mê', code: 'BM', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Hoàng Su Phì', code: 'HSP', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Xín Mần', code: 'XM', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Bắc Quang', code: 'BQ', regionCode: 'HG', hasWard: true },
  { name: 'Huyện Quang Bình', code: 'QBI', regionCode: 'HG', hasWard: true },

  // --- TUYÊN QUANG (TQ) ---
  { name: 'Thành phố Tuyên Quang', code: 'TPTQ', regionCode: 'TQ', hasWard: true },
  { name: 'Huyện Lâm Bình', code: 'LB', regionCode: 'TQ', hasWard: true },
  { name: 'Huyện Nà Hang', code: 'NH', regionCode: 'TQ', hasWard: true },
  { name: 'Huyện Chiêm Hóa', code: 'CH', regionCode: 'TQ', hasWard: true },
  { name: 'Huyện Hàm Yên', code: 'HY', regionCode: 'TQ', hasWard: true },
  { name: 'Huyện Yên Sơn', code: 'YS', regionCode: 'TQ', hasWard: true },
  { name: 'Huyện Sơn Dương', code: 'SD', regionCode: 'TQ', hasWard: true },

  // --- CAO BẰNG (CB) ---
  { name: 'Thành phố Cao Bằng', code: 'TPCB', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Bảo Lạc', code: 'BL', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Bảo Lâm', code: 'BLAM', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Hà Quảng', code: 'HQ', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Trùng Khánh', code: 'TK', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Hạ Lang', code: 'HL', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Quảng Hòa', code: 'QH', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Hoà An', code: 'HA', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Nguyên Bình', code: 'NB', regionCode: 'CB', hasWard: true },
  { name: 'Huyện Thạch An', code: 'TA', regionCode: 'CB', hasWard: true },

  // --- BẮC KẠN (BK) ---
  { name: 'Thành phố Bắc Kạn', code: 'TPBK', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Pác Nặm', code: 'PN', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Ba Bể', code: 'BB', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Ngân Sơn', code: 'NS', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Bạch Thông', code: 'BT', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Chợ Đồn', code: 'CD', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Chợ Mới', code: 'CM', regionCode: 'BK', hasWard: true },
  { name: 'Huyện Na Rì', code: 'NR', regionCode: 'BK', hasWard: true },

  // --- THÁI NGUYÊN (TN) ---
  { name: 'Thành phố Thái Nguyên', code: 'TPTN', regionCode: 'TN', hasWard: true },
  { name: 'Thành phố Sông Công', code: 'SC', regionCode: 'TN', hasWard: true },
  { name: 'Thành phố Phổ Yên', code: 'PY', regionCode: 'TN', hasWard: true },
  { name: 'Huyện Định Hóa', code: 'DH', regionCode: 'TN', hasWard: true },
  { name: 'Huyện Phú Lương', code: 'PL', regionCode: 'TN', hasWard: true },
  { name: 'Huyện Đồng Hỷ', code: 'DH', regionCode: 'TN', hasWard: true },
  { name: 'Huyện Võ Nhai', code: 'VN', regionCode: 'TN', hasWard: true },
  { name: 'Huyện Đại Từ', code: 'DT', regionCode: 'TN', hasWard: true },
  { name: 'Huyện Phú Bình', code: 'PB', regionCode: 'TN', hasWard: true },

  // --- LÀO CAI (LC) ---
  { name: 'Thành phố Lào Cai', code: 'TPLC', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Bát Xát', code: 'BX', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Mường Khương', code: 'MK', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Si Ma Cai', code: 'SMC', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Bắc Hà', code: 'BH', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Bảo Thắng', code: 'BT', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Bảo Yên', code: 'BY', regionCode: 'LC', hasWard: true },
  { name: 'Thị xã Sa Pa', code: 'SP', regionCode: 'LC', hasWard: true },
  { name: 'Huyện Văn Bàn', code: 'VB', regionCode: 'LC', hasWard: true },

  // --- YÊN BÁI (YB) ---
  { name: 'Thành phố Yên Bái', code: 'TPYB', regionCode: 'YB', hasWard: true },
  { name: 'Thị xã Nghĩa Lộ', code: 'NL', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Lục Yên', code: 'LY', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Văn Yên', code: 'VY', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Mù Căng Chải', code: 'MCC', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Trấn Yên', code: 'TY', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Trạm Tấu', code: 'TT', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Văn Chấn', code: 'VC', regionCode: 'YB', hasWard: true },
  { name: 'Huyện Yên Bình', code: 'YB', regionCode: 'YB', hasWard: true },

  // --- LẠNG SƠN (LS) ---
  { name: 'Thành phố Lạng Sơn', code: 'TPLS', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Tràng Định', code: 'TD', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Bình Gia', code: 'BG', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Văn Lãng', code: 'VL', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Cao Lộc', code: 'CL', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Văn Quan', code: 'VQ', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Bắc Sơn', code: 'BS', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Hữu Lũng', code: 'HL', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Chi Lăng', code: 'CBI', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Lộc Bình', code: 'LB', regionCode: 'LS', hasWard: true },
  { name: 'Huyện Đình Lập', code: 'DL', regionCode: 'LS', hasWard: true },

  // --- ĐIỆN BIÊN (DB) ---
  { name: 'Thành phố Điện Biên Phủ', code: 'DBP', regionCode: 'DB', hasWard: true },
  { name: 'Thị xã Mường Lay', code: 'ML', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Mường Nhé', code: 'MN', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Mường Chà', code: 'MC', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Tủa Chùa', code: 'TC', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Tuần Giáo', code: 'TG', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Điện Biên', code: 'HDB', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Điện Biên Đông', code: 'DBD', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Mường Ang', code: 'MA', regionCode: 'DB', hasWard: true },
  { name: 'Huyện Nậm Pồ', code: 'NP', regionCode: 'DB', hasWard: true },

  // --- LAI CHÂU (LCH) ---
  { name: 'Thành phố Lai Châu', code: 'TPLC', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Tam Đường', code: 'TD', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Mường Tè', code: 'MT', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Sìn Hồ', code: 'SH', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Phong Thổ', code: 'PT', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Than Uyên', code: 'TU', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Tân Uyên', code: 'TANU', regionCode: 'LCH', hasWard: true },
  { name: 'Huyện Nậm Nhùn', code: 'NN', regionCode: 'LCH', hasWard: true },

  // --- SƠN LA (SL) ---
  { name: 'Thành phố Sơn La', code: 'TPSL', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Quỳnh Nhai', code: 'QN', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Thuận Châu', code: 'TC', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Mường La', code: 'ML', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Bắc Yên', code: 'BY', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Phù Yên', code: 'PY', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Mộc Châu', code: 'MC', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Yên Châu', code: 'YC', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Sông Mã', code: 'SM', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Sốp Cộp', code: 'SC', regionCode: 'SL', hasWard: true },
  { name: 'Huyện Vân Hồ', code: 'VH', regionCode: 'SL', hasWard: true },

  // --- PHÚ THỌ (PT) ---
  { name: 'Thành phố Việt Trì', code: 'VT', regionCode: 'PT', hasWard: true },
  { name: 'Thị xã Phú Thọ', code: 'TXPT', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Đoan Hùng', code: 'DH', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Hạ Hoà', code: 'HH', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Thanh Ba', code: 'TB', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Phù Ninh', code: 'PN', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Yên Lập', code: 'YL', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Cẩm Khê', code: 'CK', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Tam Nông', code: 'TN', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Lâm Thao', code: 'LT', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Thanh Sơn', code: 'TS', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Thanh Thủy', code: 'TT', regionCode: 'PT', hasWard: true },
  { name: 'Huyện Tân Sơn', code: 'TSON', regionCode: 'PT', hasWard: true },

  // --- VĨNH PHÚC (VP) ---
  { name: 'Thành phố Vĩnh Yên', code: 'VY', regionCode: 'VP', hasWard: true },
  { name: 'Thành phố Phúc Yên', code: 'PY', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Lập Thạch', code: 'LT', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Tam Dương', code: 'TD', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Tam Đảo', code: 'TDAO', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Bình Xuyên', code: 'BX', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Yên Lạc', code: 'YL', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Vĩnh Tường', code: 'VT', regionCode: 'VP', hasWard: true },
  { name: 'Huyện Sông Lô', code: 'SL', regionCode: 'VP', hasWard: true },

  // --- HÒA BÌNH (HB) ---
  { name: 'Thành phố Hòa Bình', code: 'TPHB', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Đà Bắc', code: 'DB', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Lương Sơn', code: 'LS', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Kim Bôi', code: 'KB', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Cao Phong', code: 'CP', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Tân Lạc', code: 'TL', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Mai Châu', code: 'MC', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Lạc Sơn', code: 'LSON', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Yên Thủy', code: 'YT', regionCode: 'HB', hasWard: true },
  { name: 'Huyện Lạc Thủy', code: 'LT', regionCode: 'HB', hasWard: true },

  // --- BẮC GIANG (BG) ---
  { name: 'Thành phố Bắc Giang', code: 'TPBG', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Yên Thế', code: 'YT', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Tân Yên', code: 'TY', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Lạng Giang', code: 'LG', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Lục Nam', code: 'LN', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Lục Ngạn', code: 'LNG', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Sơn Động', code: 'SD', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Yên Dũng', code: 'YD', regionCode: 'BG', hasWard: true },
  { name: 'Thị xã Việt Yên', code: 'VY', regionCode: 'BG', hasWard: true },
  { name: 'Huyện Hiệp Hòa', code: 'HH', regionCode: 'BG', hasWard: true },

  // --- BẮC NINH (BN) ---
  { name: 'Thành phố Bắc Ninh', code: 'TPBN', regionCode: 'BN', hasWard: true },
  { name: 'Huyện Yên Phong', code: 'YP', regionCode: 'BN', hasWard: true },
  { name: 'Thị xã Quế Võ', code: 'QV', regionCode: 'BN', hasWard: true },
  { name: 'Huyện Tiên Du', code: 'TD', regionCode: 'BN', hasWard: true },
  { name: 'Thị xã Từ Sơn', code: 'TS', regionCode: 'BN', hasWard: true },
  { name: 'Thị xã Thuận Thành', code: 'TT', regionCode: 'BN', hasWard: true },
  { name: 'Huyện Gia Bình', code: 'GB', regionCode: 'BN', hasWard: true },
  { name: 'Huyện Lương Tài', code: 'LT', regionCode: 'BN', hasWard: true },

  // --- QUẢNG NINH (QNI) ---
  { name: 'Thành phố Hạ Long', code: 'HL', regionCode: 'QNI', hasWard: true },
  { name: 'Thành phố Móng Cái', code: 'MC', regionCode: 'QNI', hasWard: true },
  { name: 'Thành phố Cẩm Phả', code: 'CP', regionCode: 'QNI', hasWard: true },
  { name: 'Thành phố Uông Bí', code: 'UB', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Bình Liêu', code: 'BL', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Tiên Yên', code: 'TY', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Đầm Hà', code: 'DH', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Hải Hà', code: 'HH', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Ba Chẽ', code: 'BC', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Vân Đồn', code: 'VD', regionCode: 'QNI', hasWard: true },
  { name: 'Thị xã Đông Triều', code: 'DT', regionCode: 'QNI', hasWard: true },
  { name: 'Thị xã Quảng Yên', code: 'QY', regionCode: 'QNI', hasWard: true },
  { name: 'Huyện Cô Tô', code: 'CT', regionCode: 'QNI', hasWard: true },

  // --- HẢI DƯƠNG (HD) ---
  { name: 'Thành phố Hải Dương', code: 'TPHD', regionCode: 'HD', hasWard: true },
  { name: 'Thành phố Chí Linh', code: 'CL', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Nam Sách', code: 'NS', regionCode: 'HD', hasWard: true },
  { name: 'Thị xã Kinh Môn', code: 'KM', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Kim Thành', code: 'KT', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Thanh Hà', code: 'TH', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Cẩm Giàng', code: 'CG', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Bình Giang', code: 'BG', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Gia Lộc', code: 'GL', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Tứ Kỳ', code: 'TK', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Ninh Giang', code: 'NG', regionCode: 'HD', hasWard: true },
  { name: 'Huyện Thanh Miện', code: 'TM', regionCode: 'HD', hasWard: true },

  // --- HƯNG YÊN (HY) ---
  { name: 'Thành phố Hưng Yên', code: 'TPHY', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Văn Lâm', code: 'VL', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Văn Giang', code: 'VG', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Yên Mỹ', code: 'YM', regionCode: 'HY', hasWard: true },
  { name: 'Thị xã Mỹ Hào', code: 'MH', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Ân Thi', code: 'AT', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Khoái Châu', code: 'KC', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Kim Động', code: 'KD', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Tiên Lữ', code: 'TL', regionCode: 'HY', hasWard: true },
  { name: 'Huyện Phù Cừ', code: 'PC', regionCode: 'HY', hasWard: true },

  // --- THÁI BÌNH (TB) ---
  { name: 'Thành phố Thái Bình', code: 'TPTB', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Quỳnh Phụ', code: 'QP', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Hưng Hà', code: 'HH', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Đông Hưng', code: 'DH', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Thái Thụy', code: 'TT', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Tiền Hải', code: 'TH', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Kiến Xương', code: 'KX', regionCode: 'TB', hasWard: true },
  { name: 'Huyện Vũ Thư', code: 'VT', regionCode: 'TB', hasWard: true },

  // --- HÀ NAM (HNA) ---
  { name: 'Thành phố Phủ Lý', code: 'PL', regionCode: 'HNA', hasWard: true },
  { name: 'Thị xã Duy Tiên', code: 'DT', regionCode: 'HNA', hasWard: true },
  { name: 'Huyện Kim Bảng', code: 'KB', regionCode: 'HNA', hasWard: true },
  { name: 'Huyện Thanh Liêm', code: 'TL', regionCode: 'HNA', hasWard: true },
  { name: 'Huyện Bình Lục', code: 'BL', regionCode: 'HNA', hasWard: true },
  { name: 'Huyện Lý Nhân', code: 'LN', regionCode: 'HNA', hasWard: true },

  // --- NAM ĐỊNH (ND) ---
  { name: 'Thành phố Nam Định', code: 'TPND', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Mỹ Lộc', code: 'ML', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Vụ Bản', code: 'VB', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Ý Yên', code: 'YY', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Nghĩa Hưng', code: 'NH', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Nam Trực', code: 'NT', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Trực Ninh', code: 'TN', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Xuân Trường', code: 'XT', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Giao Thủy', code: 'GT', regionCode: 'ND', hasWard: true },
  { name: 'Huyện Hải Hậu', code: 'HH', regionCode: 'ND', hasWard: true },

  // --- NINH BÌNH (NB) ---
  { name: 'Thành phố Ninh Bình', code: 'TPNB', regionCode: 'NB', hasWard: true },
  { name: 'Thành phố Tam Điệp', code: 'TD', regionCode: 'NB', hasWard: true },
  { name: 'Huyện Nho Quan', code: 'NQ', regionCode: 'NB', hasWard: true },
  { name: 'Huyện Gia Viễn', code: 'GV', regionCode: 'NB', hasWard: true },
  { name: 'Huyện Hoa Lư', code: 'HL', regionCode: 'NB', hasWard: true },
  { name: 'Huyện Yên Khánh', code: 'YK', regionCode: 'NB', hasWard: true },
  { name: 'Huyện Kim Sơn', code: 'KS', regionCode: 'NB', hasWard: true },
  { name: 'Huyện Yên Mô', code: 'YM', regionCode: 'NB', hasWard: true },

  // --- THANH HÓA (TH) ---
  { name: 'Thành phố Thanh Hóa', code: 'TPTH', regionCode: 'TH', hasWard: true },
  { name: 'Thị xã Bỉm Sơn', code: 'BS', regionCode: 'TH', hasWard: true },
  { name: 'Thành phố Sầm Sơn', code: 'SS', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Mường Lát', code: 'ML', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Quan Hóa', code: 'QH', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Quan Sơn', code: 'QS', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Bá Thước', code: 'BT', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Cẩm Thủy', code: 'CT', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Ngọc Lặc', code: 'NL', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Thường Xuân', code: 'TX', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Như Xuân', code: 'NX', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Như Thanh', code: 'NTH', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Lang Chánh', code: 'LC', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Thạch Thành', code: 'TT', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Hà Trung', code: 'HT', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Vĩnh Lộc', code: 'VL', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Yên Định', code: 'YD', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Thọ Xuân', code: 'TXU', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Thường Xuân', code: 'TX', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Triệu Sơn', code: 'TS', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Thiệu Hóa', code: 'THO', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Hoằng Hóa', code: 'HH', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Hậu Lộc', code: 'HL', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Nga Sơn', code: 'NS', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Quảng Xương', code: 'QX', regionCode: 'TH', hasWard: true },
  { name: 'Thị xã Nghi Sơn', code: 'NSO', regionCode: 'TH', hasWard: true },
  { name: 'Huyện Nông Cống', code: 'NC', regionCode: 'TH', hasWard: true },

  // --- NGHỆ AN (NA) ---
  { name: 'Thành phố Vinh', code: 'TPV', regionCode: 'NA', hasWard: true },
  { name: 'Thị xã Cửa Lò', code: 'CL', regionCode: 'NA', hasWard: true },
  { name: 'Thị xã Thái Hoà', code: 'TH', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Quế Phong', code: 'QP', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Quỳ Châu', code: 'QC', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Kỳ Sơn', code: 'KS', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Tương Dương', code: 'TD', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Nghĩa Đàn', code: 'ND', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Quỳ Hợp', code: 'QH', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Quỳnh Lưu', code: 'QL', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Con Cuông', code: 'CC', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Tân Kỳ', code: 'TK', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Anh Sơn', code: 'AS', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Diễn Châu', code: 'DC', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Yên Thành', code: 'YT', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Đô Lương', code: 'DL', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Thanh Chương', code: 'TC', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Nghi Lộc', code: 'NL', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Nam Đàn', code: 'NDAN', regionCode: 'NA', hasWard: true },
  { name: 'Huyện Hưng Nguyên', code: 'HN', regionCode: 'NA', hasWard: true },
  { name: 'Thị xã Hoàng Mai', code: 'HM', regionCode: 'NA', hasWard: true },

  // --- HÀ TĨNH (HTT) ---
  { name: 'Thành phố Hà Tĩnh', code: 'TPHT', regionCode: 'HTT', hasWard: true },
  { name: 'Thị xã Hồng Lĩnh', code: 'HL', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Hương Sơn', code: 'HS', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Đức Thọ', code: 'DT', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Vũ Quang', code: 'VQ', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Nghi Xuân', code: 'NX', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Can Lộc', code: 'CL', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Hương Khê', code: 'HK', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Thạch Hà', code: 'TH', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Cẩm Xuyên', code: 'CX', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Kỳ Anh', code: 'KA', regionCode: 'HTT', hasWard: true },
  { name: 'Huyện Lộc Hà', code: 'LH', regionCode: 'HTT', hasWard: true },
  { name: 'Thị xã Kỳ Anh', code: 'TXKA', regionCode: 'HTT', hasWard: true },

  // --- QUẢNG BÌNH (QB) ---
  { name: 'Thành Phố Đồng Hới', code: 'DH', regionCode: 'QB', hasWard: true },
  { name: 'Huyện Minh Hóa', code: 'MH', regionCode: 'QB', hasWard: true },
  { name: 'Huyện Tuyên Hóa', code: 'TH', regionCode: 'QB', hasWard: true },
  { name: 'Huyện Quảng Trạch', code: 'QT', regionCode: 'QB', hasWard: true },
  { name: 'Huyện Bố Trạch', code: 'BT', regionCode: 'QB', hasWard: true },
  { name: 'Huyện Quảng Ninh', code: 'QN', regionCode: 'QB', hasWard: true },
  { name: 'Huyện Lệ Thủy', code: 'LT', regionCode: 'QB', hasWard: true },
  { name: 'Thị xã Ba Đồn', code: 'BD', regionCode: 'QB', hasWard: true },

  // --- QUẢNG TRỊ (QT) ---
  { name: 'Thành phố Đông Hà', code: 'DH', regionCode: 'QT', hasWard: true },
  { name: 'Thị xã Quảng Trị', code: 'TXQT', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Vĩnh Linh', code: 'VL', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Hướng Hóa', code: 'HH', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Gio Linh', code: 'GL', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Đa Krông', code: 'DK', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Cam Lộ', code: 'CL', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Triệu Phong', code: 'TP', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Hải Lăng', code: 'HL', regionCode: 'QT', hasWard: true },
  { name: 'Huyện Cồn Cỏ', code: 'CC', regionCode: 'QT', hasWard: false },

  // --- THỪA THIÊN HUẾ (TTH) ---
  { name: 'Thành phố Huế', code: 'TPH', regionCode: 'TTH', hasWard: true },
  { name: 'Huyện Phong Điền', code: 'PD', regionCode: 'TTH', hasWard: true },
  { name: 'Huyện Quảng Điền', code: 'QD', regionCode: 'TTH', hasWard: true },
  { name: 'Huyện Phú Vang', code: 'PV', regionCode: 'TTH', hasWard: true },
  { name: 'Thị xã Hương Thủy', code: 'HT', regionCode: 'TTH', hasWard: true },
  { name: 'Thị xã Hương Trà', code: 'HTR', regionCode: 'TTH', hasWard: true },
  { name: 'Huyện A Lưới', code: 'AL', regionCode: 'TTH', hasWard: true },
  { name: 'Huyện Phú Lộc', code: 'PL', regionCode: 'TTH', hasWard: true },
  { name: 'Huyện Nam Đông', code: 'ND', regionCode: 'TTH', hasWard: true },

  // --- QUẢNG NAM (QNA) ---
  { name: 'Thành phố Tam Kỳ', code: 'TK', regionCode: 'QNA', hasWard: true },
  { name: 'Thành phố Hội An', code: 'HA', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Tây Giang', code: 'TG', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Đông Giang', code: 'DG', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Đại Lộc', code: 'DL', regionCode: 'QNA', hasWard: true },
  { name: 'Thị xã Điện Bàn', code: 'DB', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Duy Xuyên', code: 'DX', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Quế Sơn', code: 'QS', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Nam Giang', code: 'NG', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Phước Sơn', code: 'PS', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Hiệp Đức', code: 'HD', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Thăng Bình', code: 'TB', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Tiên Phước', code: 'TP', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Bắc Trà My', code: 'BTM', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Nam Trà My', code: 'NTM', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Núi Thành', code: 'NT', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Phú Ninh', code: 'PN', regionCode: 'QNA', hasWard: true },
  { name: 'Huyện Nông Sơn', code: 'NS', regionCode: 'QNA', hasWard: true },

  // --- QUẢNG NGÃI (QNG) ---
  { name: 'Thành phố Quảng Ngãi', code: 'TPQN', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Bình Sơn', code: 'BS', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Trà Bồng', code: 'TB', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Sơn Tịnh', code: 'ST', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Tư Nghĩa', code: 'TN', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Sơn Hà', code: 'SH', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Sơn Tây', code: 'STAY', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Minh Long', code: 'ML', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Nghĩa Hành', code: 'NH', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Mộ Đức', code: 'MD', regionCode: 'QNG', hasWard: true },
  { name: 'Thị xã Đức Phổ', code: 'DP', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Ba Tơ', code: 'BT', regionCode: 'QNG', hasWard: true },
  { name: 'Huyện Lý Sơn', code: 'LS', regionCode: 'QNG', hasWard: false },

  // --- KON TUM (KT) ---
  { name: 'Thành phố Kon Tum', code: 'TPKT', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Đắk Glei', code: 'DG', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Ngọc Hồi', code: 'NH', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Đắk Tô', code: 'DT', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Kon Plông', code: 'KP', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Kon Rẫy', code: 'KR', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Đắk Hà', code: 'DH', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Sa Thầy', code: 'ST', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Tu Mơ Rông', code: 'TMR', regionCode: 'KT', hasWard: true },
  { name: 'Huyện Ia H\' Drai', code: 'IHD', regionCode: 'KT', hasWard: true },

  // --- BÌNH ĐỊNH (BDH) ---
  { name: 'Thành phố Quy Nhơn', code: 'QN', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện An Lão', code: 'AL', regionCode: 'BDH', hasWard: true },
  { name: 'Thị xã Hoài Nhơn', code: 'HN', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Hoài Ân', code: 'HA', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Phù Mỹ', code: 'PM', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Vĩnh Thạnh', code: 'VT', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Tây Sơn', code: 'TS', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Phù Cát', code: 'PC', regionCode: 'BDH', hasWard: true },
  { name: 'Thị xã An Nhơn', code: 'AN', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Tuy Phước', code: 'TP', regionCode: 'BDH', hasWard: true },
  { name: 'Huyện Vân Canh', code: 'VC', regionCode: 'BDH', hasWard: true },

  // --- GIA LAI (GL) ---
  { name: 'Thành phố Pleiku', code: 'PK', regionCode: 'GL', hasWard: true },
  { name: 'Thị xã An Khê', code: 'AK', regionCode: 'GL', hasWard: true },
  { name: 'Thị xã Ayun Pa', code: 'AP', regionCode: 'GL', hasWard: true },
  { name: 'Huyện KBang', code: 'KB', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Đăk Đoa', code: 'DD', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Chư Păh', code: 'CP', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Ia Grai', code: 'IG', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Mang Yang', code: 'MY', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Kông Chro', code: 'KC', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Đức Cơ', code: 'DC', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Chư Prông', code: 'CPR', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Chư Sê', code: 'CS', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Đăk Pơ', code: 'DP', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Ia Pa', code: 'IP', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Krông Pa', code: 'KP', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Phú Thiện', code: 'PT', regionCode: 'GL', hasWard: true },
  { name: 'Huyện Chư Pưh', code: 'CPU', regionCode: 'GL', hasWard: true },

  // --- PHÚ YÊN (PY) ---
  { name: 'Thành phố Tuy Hoà', code: 'TH', regionCode: 'PY', hasWard: true },
  { name: 'Thị xã Sông Cầu', code: 'SC', regionCode: 'PY', hasWard: true },
  { name: 'Huyện Đồng Xuân', code: 'DX', regionCode: 'PY', hasWard: true },
  { name: 'Huyện Tuy An', code: 'TA', regionCode: 'PY', hasWard: true },
  { name: 'Huyện Sơn Hòa', code: 'SH', regionCode: 'PY', hasWard: true },
  { name: 'Huyện Sông Hinh', code: 'SHI', regionCode: 'PY', hasWard: true },
  { name: 'Huyện Tây Hòa', code: 'THO', regionCode: 'PY', hasWard: true },
  { name: 'Thị xã Đông Hòa', code: 'DH', regionCode: 'PY', hasWard: true },
  { name: 'Huyện Phú Hoà', code: 'PH', regionCode: 'PY', hasWard: true },

  // --- ĐẮK LẮK (DL) ---
  { name: 'Thành phố Buôn Ma Thuột', code: 'BMT', regionCode: 'DL', hasWard: true },
  { name: 'Thị Xã Buôn Hồ', code: 'BH', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Ea H\'leo', code: 'EH', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Ea Súp', code: 'ES', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Krông Năng', code: 'KN', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Krông Búk', code: 'KB', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Krông Định', code: 'KD', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Cư M\'gar', code: 'CMG', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Ea Kar', code: 'EK', regionCode: 'DL', hasWard: true },
  { name: 'Huyện M\'Đrắk', code: 'MDR', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Krông Pắc', code: 'KP', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Krông Bông', code: 'KBO', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Krông Ana', code: 'KA', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Lắk', code: 'LAK', regionCode: 'DL', hasWard: true },
  { name: 'Huyện Cư Kuin', code: 'CK', regionCode: 'DL', hasWard: true },

  // --- KHÁNH HÒA (KH) ---
  { name: 'Thành phố Nha Trang', code: 'NT', regionCode: 'KH', hasWard: true },
  { name: 'Thành phố Cam Ranh', code: 'CR', regionCode: 'KH', hasWard: true },
  { name: 'Huyện Cam Lâm', code: 'CL', regionCode: 'KH', hasWard: true },
  { name: 'Huyện Vạn Ninh', code: 'VN', regionCode: 'KH', hasWard: true },
  { name: 'Thị xã Ninh Hòa', code: 'NH', regionCode: 'KH', hasWard: true },
  { name: 'Huyện Khánh Vĩnh', code: 'KV', regionCode: 'KH', hasWard: true },
  { name: 'Huyện Diên Khánh', code: 'DK', regionCode: 'KH', hasWard: true },
  { name: 'Huyện Khánh Sơn', code: 'KS', regionCode: 'KH', hasWard: true },
  { name: 'Huyện Trường Sa', code: 'TS', regionCode: 'KH', hasWard: false },

  // --- NINH THUẬN (NT) ---
  { name: 'Thành phố Phan Rang-Tháp Chàm', code: 'PRTC', regionCode: 'NT', hasWard: true },
  { name: 'Huyện Bác Ái', code: 'BA', regionCode: 'NT', hasWard: true },
  { name: 'Huyện Ninh Sơn', code: 'NS', regionCode: 'NT', hasWard: true },
  { name: 'Huyện Ninh Hải', code: 'NH', regionCode: 'NT', hasWard: true },
  { name: 'Huyện Ninh Phước', code: 'NP', regionCode: 'NT', hasWard: true },
  { name: 'Huyện Thuận Bắc', code: 'TB', regionCode: 'NT', hasWard: true },
  { name: 'Huyện Thuận Nam', code: 'TN', regionCode: 'NT', hasWard: true },

  // --- ĐẮK NÔNG (DNO) ---
  { name: 'Thành phố Gia Nghĩa', code: 'GN', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Đăk Glong', code: 'DG', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Cư Jút', code: 'CJ', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Đắk Mil', code: 'DM', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Krông Nô', code: 'KN', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Đắk Song', code: 'DS', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Đắk R\'Lấp', code: 'DR', regionCode: 'DNO', hasWard: true },
  { name: 'Huyện Tuy Đức', code: 'TD', regionCode: 'DNO', hasWard: true },

  // --- LÂM ĐỒNG (LD) ---
  { name: 'Thành phố Đà Lạt', code: 'DL', regionCode: 'LD', hasWard: true },
  { name: 'Thành phố Bảo Lộc', code: 'BL', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Đam Rông', code: 'DR', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Lạc Dương', code: 'LD', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Lâm Hà', code: 'LH', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Đơn Dương', code: 'DD', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Đức Trọng', code: 'DT', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Di Linh', code: 'DLIN', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Bảo Lâm', code: 'BLAM', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Đạ Huoai', code: 'DH', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Đạ Tẻh', code: 'DT', regionCode: 'LD', hasWard: true },
  { name: 'Huyện Cát Tiên', code: 'CT', regionCode: 'LD', hasWard: true },

  // --- BÌNH THUẬN (BTH) ---
  { name: 'Thành phố Phan Thiết', code: 'PT', regionCode: 'BTH', hasWard: true },
  { name: 'Thị xã La Gi', code: 'LG', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Tuy Phong', code: 'TP', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Bắc Bình', code: 'BB', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Hàm Thuận Bắc', code: 'HTB', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Hàm Thuận Nam', code: 'HTN', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Tánh Linh', code: 'TL', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Đức Linh', code: 'DL', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Hàm Tân', code: 'HT', regionCode: 'BTH', hasWard: true },
  { name: 'Huyện Phú Quý', code: 'PQ', regionCode: 'BTH', hasWard: false },

  // --- BÌNH PHƯỚC (BP) ---
  { name: 'Thành phố Đồng Xoài', code: 'DX', regionCode: 'BP', hasWard: true },
  { name: 'Thị xã Bình Long', code: 'BL', regionCode: 'BP', hasWard: true },
  { name: 'Thị xã Phước Long', code: 'PL', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Bù Đăng', code: 'BD', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Bù Đốp', code: 'BDO', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Bù Gia Mập', code: 'BGM', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Chơn Thành', code: 'CT', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Đồng Phú', code: 'DP', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Hớn Quản', code: 'HQ', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Lộc Ninh', code: 'LN', regionCode: 'BP', hasWard: true },
  { name: 'Huyện Phú Riềng', code: 'PR', regionCode: 'BP', hasWard: true },

  // --- ĐỒNG NAI (DNI) ---
  { name: 'Thành phố Biên Hòa', code: 'BH', regionCode: 'DNI', hasWard: true },
  { name: 'Thành phố Long Khánh', code: 'LK', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Tân Phú', code: 'TP', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Vĩnh Cửu', code: 'VC', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Định Quán', code: 'DQ', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Trảng Bom', code: 'TB', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Thống Nhất', code: 'TN', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Cẩm Mỹ', code: 'CM', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Long Thành', code: 'LT', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Xuân Lộc', code: 'XL', regionCode: 'DNI', hasWard: true },
  { name: 'Huyện Nhơn Trạch', code: 'NT', regionCode: 'DNI', hasWard: true },

  // --- TÂY NINH (TNINH) ---
  { name: 'Thành phố Tây Ninh', code: 'TN', regionCode: 'TNINH', hasWard: true },
  { name: 'Huyện Tân Biên', code: 'TB', regionCode: 'TNINH', hasWard: true },
  { name: 'Huyện Tân Châu', code: 'TC', regionCode: 'TNINH', hasWard: true },
  { name: 'Huyện Dương Minh Châu', code: 'DMC', regionCode: 'TNINH', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'TNINH', hasWard: true },
  { name: 'Thị xã Hòa Thành', code: 'HT', regionCode: 'TNINH', hasWard: true },
  { name: 'Huyện Gò Dầu', code: 'GD', regionCode: 'TNINH', hasWard: true },
  { name: 'Huyện Bến Cầu', code: 'BC', regionCode: 'TNINH', hasWard: true },
  { name: 'Thị xã Trảng Bàng', code: 'TBANG', regionCode: 'TNINH', hasWard: true },

  // --- BÌNH DƯƠNG (BD) ---
  { name: 'Thành phố Thủ Dầu Một', code: 'TDM', regionCode: 'BD', hasWard: true },
  { name: 'Thành phố Bến Cát', code: 'BC', regionCode: 'BD', hasWard: true },
  { name: 'Thành phố Dĩ An', code: 'DA', regionCode: 'BD', hasWard: true },
  { name: 'Thành phố Tân Uyên', code: 'TU', regionCode: 'BD', hasWard: true },
  { name: 'Thành phố Thuận An', code: 'TA', regionCode: 'BD', hasWard: true },
  { name: 'Huyện Bàu Bàng', code: 'BB', regionCode: 'BD', hasWard: true },
  { name: 'Huyện Dầu Tiếng', code: 'DT', regionCode: 'BD', hasWard: true },
  { name: 'Huyện Phú Giáo', code: 'PG', regionCode: 'BD', hasWard: true },
  { name: 'Huyện Bắc Tân Uyên', code: 'BTU', regionCode: 'BD', hasWard: true },

  // --- BÀ RỊA - VŨNG TÀU (BRVT) ---
  { name: 'Thành phố Vũng Tàu', code: 'VT', regionCode: 'BRVT', hasWard: true },
  { name: 'Thành phố Bà Rịa', code: 'BR', regionCode: 'BRVT', hasWard: true },
  { name: 'Thị xã Phú Mỹ', code: 'PM', regionCode: 'BRVT', hasWard: true },
  { name: 'Huyện Châu Đức', code: 'CD', regionCode: 'BRVT', hasWard: true },
  { name: 'Huyện Xuyên Mộc', code: 'XM', regionCode: 'BRVT', hasWard: true },
  { name: 'Huyện Long Điền', code: 'LD', regionCode: 'BRVT', hasWard: true },
  { name: 'Huyện Đất Đỏ', code: 'DD', regionCode: 'BRVT', hasWard: true },
  { name: 'Huyện Côn Đảo', code: 'CDO', regionCode: 'BRVT', hasWard: false },

  // --- LONG AN (LA) ---
  { name: 'Thành phố Tân An', code: 'TA', regionCode: 'LA', hasWard: true },
  { name: 'Thị xã Kiến Tường', code: 'KT', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Tân Hưng', code: 'TH', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Vĩnh Hưng', code: 'VH', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Mộc Hóa', code: 'MH', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Tân Thạnh', code: 'TT', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Thạnh Hóa', code: 'THOA', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Đức Huệ', code: 'DH', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Đức Hòa', code: 'DHOA', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Bến Lức', code: 'BL', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Thủ Thừa', code: 'TTU', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Tân Trụ', code: 'TTRU', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Cần Đước', code: 'CD', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Cần Giuộc', code: 'CG', regionCode: 'LA', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'LA', hasWard: true },

  // --- ĐỒNG THÁP (DT) ---
  { name: 'Thành phố Cao Lãnh', code: 'CL', regionCode: 'DT', hasWard: true },
  { name: 'Thành phố Sa Đéc', code: 'SD', regionCode: 'DT', hasWard: true },
  { name: 'Thành phố Hồng Ngự', code: 'HN', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Tân Hồng', code: 'TH', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Hồng Ngự', code: 'HNGU', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Tam Nông', code: 'TN', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Tháp Mười', code: 'TM', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Cao Lãnh', code: 'CLA', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Thanh Bình', code: 'TB', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Lấp Vò', code: 'LV', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Lai Vung', code: 'LVU', regionCode: 'DT', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'DT', hasWard: true },

  // --- TIỀN GIANG (TG) ---
  { name: 'Thành phố Mỹ Tho', code: 'MT', regionCode: 'TG', hasWard: true },
  { name: 'Thị xã Gò Công', code: 'GC', regionCode: 'TG', hasWard: true },
  { name: 'Thị xã Cai Lậy', code: 'CL', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Tân Phước', code: 'TP', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Chợ Gạo', code: 'CG', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Gò Công Tây', code: 'GCT', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Gò Công Đông', code: 'GCD', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Tân Phú Đông', code: 'TPD', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Cai Lậy', code: 'CLAY', regionCode: 'TG', hasWard: true },
  { name: 'Huyện Cái Bè', code: 'CB', regionCode: 'TG', hasWard: true },

  // --- AN GIANG (AG) ---
  { name: 'Thành phố Long Xuyên', code: 'LX', regionCode: 'AG', hasWard: true },
  { name: 'Thành phố Châu Đốc', code: 'CD', regionCode: 'AG', hasWard: true },
  { name: 'Huyện An Phú', code: 'AP', regionCode: 'AG', hasWard: true },
  { name: 'Thị xã Tân Châu', code: 'TC', regionCode: 'AG', hasWard: true },
  { name: 'Huyện Phú Tân', code: 'PT', regionCode: 'AG', hasWard: true },
  { name: 'Huyện Châu Phú', code: 'CP', regionCode: 'AG', hasWard: true },
  { name: 'Thị xã Tịnh Biên', code: 'TB', regionCode: 'AG', hasWard: true },
  { name: 'Huyện Tri Tôn', code: 'TT', regionCode: 'AG', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'AG', hasWard: true },
  { name: 'Huyện Chợ Mới', code: 'CM', regionCode: 'AG', hasWard: true },
  { name: 'Huyện Thoại Sơn', code: 'TS', regionCode: 'AG', hasWard: true },

  // --- KIÊN GIANG (KG) ---
  { name: 'Thành phố Rạch Giá', code: 'RG', regionCode: 'KG', hasWard: true },
  { name: 'Thành phố Hà Tiên', code: 'HT', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Kiên Lương', code: 'KL', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Hòn Đất', code: 'HD', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Tân Hiệp', code: 'TH', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Giồng Riềng', code: 'GR', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Gò Quao', code: 'GQ', regionCode: 'KG', hasWard: true },
  { name: 'Huyện An Biên', code: 'AB', regionCode: 'KG', hasWard: true },
  { name: 'Huyện An Minh', code: 'AM', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Vĩnh Thuận', code: 'VT', regionCode: 'KG', hasWard: true },
  { name: 'Thành phố Phú Quốc', code: 'PQ', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Kiên Hải', code: 'KH', regionCode: 'KG', hasWard: true },
  { name: 'Huyện U Minh Thượng', code: 'UMT', regionCode: 'KG', hasWard: true },
  { name: 'Huyện Giang Thành', code: 'GT', regionCode: 'KG', hasWard: true },

  // --- BẾN TRE (BT) ---
  { name: 'Thành phố Bến Tre', code: 'TPBT', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Chợ Lách', code: 'CL', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Mỏ Cày Nam', code: 'MCN', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Giồng Trôm', code: 'GT', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Bình Đại', code: 'BD', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Ba Tri', code: 'BTR', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Thạnh Phú', code: 'TPH', regionCode: 'BT', hasWard: true },
  { name: 'Huyện Mỏ Cày Bắc', code: 'MCB', regionCode: 'BT', hasWard: true },

  // --- VĨNH LONG (VL) ---
  { name: 'Thành phố Vĩnh Long', code: 'TPVL', regionCode: 'VL', hasWard: true },
  { name: 'Huyện Long Hồ', code: 'LH', regionCode: 'VL', hasWard: true },
  { name: 'Huyện Mang Thít', code: 'MT', regionCode: 'VL', hasWard: true },
  { name: 'Huyện Vũng Liêm', code: 'VL', regionCode: 'VL', hasWard: true },
  { name: 'Huyện Tam Bình', code: 'TB', regionCode: 'VL', hasWard: true },
  { name: 'Thị xã Bình Minh', code: 'BM', regionCode: 'VL', hasWard: true },
  { name: 'Huyện Trà Ôn', code: 'TO', regionCode: 'VL', hasWard: true },
  { name: 'Huyện Bình Tân', code: 'BT', regionCode: 'VL', hasWard: true },

  // --- TRÀ VINH (TV) ---
  { name: 'Thành phố Trà Vinh', code: 'TPTV', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Càng Long', code: 'CL', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Cầu Kè', code: 'CK', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Tiểu Cần', code: 'TC', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Cầu Ngang', code: 'CN', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Trà Cú', code: 'TCU', regionCode: 'TV', hasWard: true },
  { name: 'Thị xã Duyên Hải', code: 'DH', regionCode: 'TV', hasWard: true },
  { name: 'Huyện Duyên Hải', code: 'DHAI', regionCode: 'TV', hasWard: true },

  // --- HẬU GIANG (HGZ) ---
  { name: 'Thành phố Vị Thanh', code: 'VT', regionCode: 'HGZ', hasWard: true },
  { name: 'Thành phố Ngã Bảy', code: 'NB', regionCode: 'HGZ', hasWard: true },
  { name: 'Huyện Châu Thành A', code: 'CTA', regionCode: 'HGZ', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'HGZ', hasWard: true },
  { name: 'Huyện Phụng Hiệp', code: 'PH', regionCode: 'HGZ', hasWard: true },
  { name: 'Huyện Vị Thủy', code: 'VTH', regionCode: 'HGZ', hasWard: true },
  { name: 'Huyện Long Mỹ', code: 'LM', regionCode: 'HGZ', hasWard: true },
  { name: 'Thị xã Long Mỹ', code: 'TXLM', regionCode: 'HGZ', hasWard: true },

  // --- SÓC TRĂNG (ST) ---
  { name: 'Thành phố Sóc Trăng', code: 'TPST', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Châu Thành', code: 'CT', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Kế Sách', code: 'KS', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Mỹ Tú', code: 'MT', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Cù Lao Dung', code: 'CLD', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Long Phú', code: 'LP', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Mỹ Xuyên', code: 'MX', regionCode: 'ST', hasWard: true },
  { name: 'Thị xã Ngã Năm', code: 'NN', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Thạnh Trị', code: 'TT', regionCode: 'ST', hasWard: true },
  { name: 'Thị xã Vĩnh Châu', code: 'VC', regionCode: 'ST', hasWard: true },
  { name: 'Huyện Trần Đề', code: 'TD', regionCode: 'ST', hasWard: true },

  // --- BẠC LIÊU (BL) ---
  { name: 'Thành phố Bạc Liêu', code: 'TPBL', regionCode: 'BL', hasWard: true },
  { name: 'Huyện Hồng Dân', code: 'HD', regionCode: 'BL', hasWard: true },
  { name: 'Huyện Phước Long', code: 'PL', regionCode: 'BL', hasWard: true },
  { name: 'Huyện Vĩnh Lợi', code: 'VL', regionCode: 'BL', hasWard: true },
  { name: 'Thị xã Giá Rai', code: 'GR', regionCode: 'BL', hasWard: true },
  { name: 'Huyện Đông Hải', code: 'DH', regionCode: 'BL', hasWard: true },
  { name: 'Huyện Hoà Bình', code: 'HB', regionCode: 'BL', hasWard: true },

  // --- CÀ MAU (CM) ---
  { name: 'Thành phố Cà Mau', code: 'TPCM', regionCode: 'CM', hasWard: true },
  { name: 'Huyện U Minh', code: 'UM', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Thới Bình', code: 'TB', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Trần Văn Thời', code: 'TVT', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Cái Nước', code: 'CN', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Đầm Dơi', code: 'DD', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Năm Căn', code: 'NC', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Phú Tân', code: 'PT', regionCode: 'CM', hasWard: true },
  { name: 'Huyện Ngọc Hiển', code: 'NH', regionCode: 'CM', hasWard: true },
];

async function seedCounties() {
  console.log("🌱 Bắt đầu seed dữ liệu Quận/Huyện...");
  let count = 0;
  for (const item of rawCountiesSeed) {
    try {
      // 1. Truy vấn bảng regions để lấy id dựa trên regionCode
      const [region] = await db
        .select({ id: regions.id })
        .from(regions)
        .where(
          and(
            eq(regions.code, item.regionCode),
            eq(regions.countryCode, "VN")
          )
        )
        .limit(1);

      if (!region) {
        console.warn(`⚠️ Không tìm thấy region với code: "${item.regionCode}" cho quận/huyện "${item.name}"`);
        continue;
      }

      // 2. Insert vào bảng counties
      await db.insert(counties).values({
        regionId: region.id,
        name: item.name,
        code: item.code,
        hasWard: item.hasWard,
      });

      console.log(`✅ Đã thêm: ${item.name} (Thuộc region code: ${item.regionCode})`);
      count++;
    } catch (error) {
      console.error(`❌ Lỗi khi thêm quận/huyện ${item.name}:`, error);
    }
  }
  console.log("Đã thêm: ", count, " Quận/Huyện");
  console.log("🎉 Hoàn tất quá trình seed dữ liệu Quận/Huyện! cho Viet Nam");
}

async function main() {
  seedCounties();
}

main()
  .catch((error) => {
    console.error("Seed failed:");
    console.error(error);
    process.exit(1);
  });