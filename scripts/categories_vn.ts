import { db } from '@/db';
import { categories, categoryTranslations } from "@/db/schema"; // Import schema bạn vừa gửi
export const viCategoryData = [
  {
    name: "Bất động sản",
    template: "real-estate",
    children: ["Mua bán", "Cho thuê", "Dự án"]
  },
  {
    name: "Xe cộ",
    template: "vehicles",
    children: [
      "Ô tô", "Xe máy", "Xe tải, Xe ben", 
      "Xe đạp", "Phương tiện khác", "Phụ tùng xe"
    ]
  },
  {
    name: "Đồ điện tử",
    template: "electronics",
    children: [
      "Điện thoại", "Máy tính bảng", "Laptop", "Máy tính để bàn",
      "Máy ảnh, Máy quay", "Tivi, Âm thanh", "Thiết bị đeo thông minh",
      "Phụ kiện (Màn hình, Chuột,...)", "Linh kiện (Ram, Card, ...)"
    ]
  },
  {
    name: "Việc làm",
    template: "jobs",
    children: [
      "Bán hàng", "Kế toán", "Xây dựng", "Thu ngân", "Lễ tân",
      "Giáo viên", "Gia sư", "Thiết kế", "Bảo mẫu", "Nhân viên phục vụ",
      "Nhân viên kinh doanh", "Nhân viên văn phòng", "Nhân viên kho vận",
      "Kỹ thuật viên máy tính", "Chăm sóc khách hàng", "Công nhân", "Bảo vệ",
      "Thư ký", "Y tế", "Tài xế", "Tạp vụ", "Pha chế", "Đầu bếp", "Phụ bếp",
      "Thợ điện", "Thợ cơ khí", "Thợ sửa xe", "Thợ hàn", "Thợ tiện", "Thợ xây",
      "Thợ may", "Thợ cắt tóc", "Thợ mộc", "Thợ làm nail", "Giúp việc",
      "Kỹ thuật viên spa", "PG", "Telesales", "Công việc khác"
    ]
  },
  {
    name: "Dịch vụ chăm sóc nhà cửa",
    template: "services",
    children: [
      "Dịch vụ dọn dẹp nhà", "Dịch vụ chuyển nhà", 
      "Dịch vụ sửa chữa & Bảo dưỡng điện máy", "Dịch vụ nhà cửa khác"
    ]
  },
  {
    name: "Thú cưng",
    template: "pets",
    children: [
      "Gà", "Chó", "Chim", "Mèo", 
      "Thú cưng khác", "Phụ kiện, Thức ăn, Dịch vụ"
    ]
  },
  {
    name: "Đồ ăn, Thực phẩm",
    template: "food",
    children: [
      "Bánh kẹo, Đồ ăn vặt", "Bơ, Sữa, Trứng", 
      "Đồ khô, Mắm, Gia vị", "Đồ uống - giải khát", 
      "Rau, Củ, Trái cây", "Thịt, Cá", 
      "Thực phẩm chế biến sẵn", "Hải sản", "Thực phẩm khác"
    ]
  },
  {
    name: "Tủ lạnh, Máy lạnh, Máy giặt",
    template: "appliances",
    children: ["Tủ lạnh", "Máy lạnh, Điều hòa", "Máy giặt"]
  },
  {
    name: "Đồ gia dụng, Nội thất, Cây cảnh",
    template: "home-garden",
    children: [
      "Bàn ghế", "Tủ, Kệ gia đình", "Giường, Chăn ga gối nệm",
      "Bếp, Lò, Đồ điện nhà bếp", "Dụng cụ nhà bếp", "Quạt",
      "Đèn", "Cây cảnh, Đồ trang trí", "Thiết bị vệ sinh, Nhà tắm", 
      "Nội thất - đồ gia dụng khác"
    ]
  },
  {
    name: "Mẹ và bé",
    template: "baby-kids",
    children: ["Đồ dùng cho mẹ", "Đồ chơi cho bé"]
  },
  {
    name: "Thời trang, Đồ dùng cá nhân",
    template: "fashion",
    children: [
      "Quần áo", "Đồng hồ", "Giày dép", 
      "Túi xách", "Nước hoa", "Phụ kiện thời trang khác"
    ]
  },
  {
    name: "Giải trí, Thể thao, Sở thích",
    template: "hobbies",
    children: [
      "Nhạc cụ", "Sách", "Đồ thể thao, Dã ngoại", 
      "Đồ sưu tầm, Đồ cổ", "Thiết bị chơi game", "Sở thích khác"
    ]
  },
  {
    name: "Công cụ, Trang thiết bị",
    template: "tools",
    children: [
      "Đồ dùng văn phòng", "Trang thiết bị lao động", "Máy móc công nông",
      "Đồ dùng chuyên dụng", "Giống nuôi trồng", "Máy móc - Trang thiết bị khác"
    ]
  },
  {
    name: "Dịch vụ, Du lịch",
    template: "services",
    children: ["Dịch vụ", "Du lịch"]
  }
];

// Hàm hỗ trợ chuyển đổi tiếng Việt sang slug chuẩn URL
function slugifyVietnamese(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Xóa dấu tiếng Việt
    .replace(/[đĐ]/g, "d")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .trim();
}