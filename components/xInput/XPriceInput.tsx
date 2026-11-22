import React, { useRef, useState } from "react";
import { FieldError as RHFFieldError } from "react-hook-form";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export type PriceType = "fixed" | "negotiable" | "contact" | "free";

export interface XPriceInputValue {
  price: string | null;
  priceType: PriceType;
}

export interface XPriceInputProps {
  id?: string;
  label?: string;
  floatingLabel?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  hideClearButton?: boolean;
  currencySymbol?: string | null;
  currencyIconUrl?: string | null;
  helperText?: string;
  decimalSeparator?: "." | ",";
  maxDecimalPlaces?: number; // Số chữ số thập phân tối đa cho phép
  error?: RHFFieldError;
  value?: XPriceInputValue;
  onValueChange: (value: XPriceInputValue) => void;
}

export const XPriceInput: React.FC<XPriceInputProps> = ({
  id = "x-price-input",
  label = "Giá bán",
  floatingLabel,
  required = false,
  disabled = false,
  className = "",
  hideClearButton = false,
  currencySymbol = "đ",
  currencyIconUrl,
  helperText,
  decimalSeparator = ".",
  maxDecimalPlaces = 7,
  error,
  value = { price: null, priceType: "fixed" },
  onValueChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const currentFloatingLabel = floatingLabel || label;
  const { price, priceType } = value;

  // Xác định xem input có đang bị vô hiệu hóa
  const isInputDisabled = disabled || priceType === "free" || priceType === "contact";

  // Kiểm tra xem có giá trị hay không
  const hasValue = price !== null && price !== undefined && price.length > 0;

  // Hàm format giá trị khi không focus (dựa trên giá trị lưu trong form dùng dấu '.')
  const formatDisplayValue = (rawPrice: string | null) => {
    if (!rawPrice) return "";

    // Dấu phân cách hàng nghìn sẽ là ký tự ngược lại với decimalSeparator
    const thousandSeparator = decimalSeparator === "." ? "," : ".";

    // Giá trị lưu trong form luôn dùng dấu '.' làm thập phân
    const parts = rawPrice.split(".");
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? parts[1] : null;

    // Format phần nguyên theo dấu nghìn
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);

    if (decimalPart !== null) {
      return `${formattedInteger}${decimalSeparator}${decimalPart}`;
    }
    return formattedInteger;
  };

  // Giá trị hiển thị trên ô input phụ thuộc vào trạng thái focus
  const displayValue = isFocused
    ? price !== null && price !== undefined
      ? price.replace(".", decimalSeparator)
      : ""
    : formatDisplayValue(price);

  // Xử lý khi nhập số tiền
  const handlePriceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isInputDisabled) return;

    const val = e.target.value;
    const escapedSeparator = decimalSeparator === "." ? "\\." : ",";

    // Giới hạn nhập liệu gồm số và dấu phân cách thập phân hiện tại
    const regex = new RegExp(`[^0-9${escapedSeparator}]`, "g");
    const rawVal = val.replace(regex, "");

    // Ngăn chặn nhập nhiều hơn 1 dấu phân cách thập phân
    const parts = rawVal.split(decimalSeparator);
    let sanitizedVal = rawVal;

    if (parts.length > 2) {
      sanitizedVal = `${parts[0]}${decimalSeparator}${parts.slice(1).join("")}`;
    }

    // Kiểm tra giới hạn số chữ số thập phân (maxDecimalPlaces)
    if (maxDecimalPlaces !== undefined && maxDecimalPlaces >= 0 && parts.length > 1) {
      const integerPart = parts[0];
      const decimalPart = parts[1].slice(0, maxDecimalPlaces); // Cắt bớt nếu vượt quá số lượng cho phép
      sanitizedVal = `${integerPart}${decimalSeparator}${decimalPart}`;
    }

    // Chuẩn hóa dấu thập phân về dấu '.' để trả về cho form validate chuẩn
    const normalizedVal = sanitizedVal.replace(new RegExp(escapedSeparator, "g"), ".");
    const stringValue = normalizedVal !== "" ? normalizedVal : null;

    const currentType: PriceType = ["free", "contact"].includes(priceType) ? "fixed" : priceType;
    // const currentType: PriceType = priceType === "free" || priceType === "contact" ? "fixed" : priceType;

    onValueChange({ price: stringValue, priceType: currentType });
  };

  // Xử lý logic chọn/bỏ chọn checkbox
  const handleTypeSelection = (targetType: "free" | "contact" | "negotiable") => {
    if (disabled) return;

    if (priceType === targetType) {
      onValueChange({ price: price ?? null, priceType: "fixed" });
      return;
    }

    if (targetType === "free" || targetType === "contact") {
      setIsFocused(false);
      onValueChange({ price: null, priceType: targetType });
    } else if (targetType === "negotiable") {
      onValueChange({ price: price ?? null, priceType: "negotiable" });
    }
  };

  // Nút xóa nhanh nội dung
  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isInputDisabled) return;
    onValueChange({ price: null, priceType: "fixed" });
    inputRef.current?.focus();
  };

  // Chỉ cho phép floating label khi priceType là fixed hoặc negotiable VÀ (đang focus hoặc có giá trị)
  const isFloating = (isFocused || hasValue) && (priceType === "fixed" || priceType === "negotiable");

  // Xử lý helperText mặc định
  const defaultHelperTextNode = (
    <span className="inline-flex items-center gap-1">
      Decimal separator:{" "}
      <span className="inline-flex items-center justify-center font-black text-sm text-gray-600 leading-none relative -top-[2px]">
        {decimalSeparator}
      </span>
    </span>
  );

  const combinedHelperText = helperText ? (
    <span>
      {helperText} ({defaultHelperTextNode})
    </span>
  ) : (
    defaultHelperTextNode
  );

  return (
    <div className={`w-full flex flex-col gap-1 ${className}`}>
      {/* Khung input tổng */}
      <div
        data-invalid={!!error}
        className={`relative flex flex-col rounded-lg border transition-all duration-300 ease-in-out bg-white
          data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
          ${disabled ? "bg-gray-100 cursor-not-allowed opacity-75" : "hover:border-black"}`}
      >
        {/* Phần Input phía trên */}
        <div
          className={`relative flex items-center px-3 pt-4.5 pb-1 w-full transition-all duration-200 ${
            isInputDisabled ? "bg-gray-100 opacity-60 cursor-not-allowed rounded-t-lg" : ""
          }`}
        >
          {/* 1. Floating Label */}
          <label
            htmlFor={id}
            className={`absolute left-3 right-10 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left
              ${
                isFloating
                  ? "top-1.5 text-xs text-gray-600 font-semibold opacity-100 scale-100"
                  : "top-1/2 -translate-y-1/2 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none"
              }`}
          >
            <span className="flex items-center gap-1 truncate">
              <span>{currentFloatingLabel}</span>
              {required && <span>*</span>}
              {isFloating && (
                <span className="text-[11px] font-normal text-gray-400 italic">({combinedHelperText})</span>
              )}
            </span>
          </label>

          {/* 2. Label chính giữa */}
          <label
            htmlFor={id}
            className={`absolute left-3 flex items-center gap-1 pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left
              ${
                !isFloating
                  ? "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium opacity-100 scale-100"
                  : "top-1.5 text-xs text-transparent opacity-0 scale-95 pointer-events-none"
              }`}
          >
            <span>{label}</span>
            {required && <span>*</span>}
          </label>

          {/* Ô nhập số tiền */}
          <input
            ref={inputRef}
            id={id}
            type="text"
            disabled={isInputDisabled}
            placeholder=""
            value={displayValue}
            onChange={handlePriceInputChange}
            onFocus={() => !isInputDisabled && setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-transparent text-sm text-gray-900 focus:outline-none pt-1 pr-8 ${
              isInputDisabled ? "cursor-not-allowed text-gray-400 select-none" : ""
            }`}
          />

          {/* Biểu tượng hoặc Ký hiệu tiền tệ */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-gray-500 text-sm">
            {currencyIconUrl ? (
              <img src={currencyIconUrl} alt="currency" className="w-4 h-4 object-contain" />
            ) : (
              <span>{currencySymbol}</span>
            )}
          </div>

          {/* Nút X xóa nhanh */}
          {!hideClearButton && hasValue && !isInputDisabled && (
            <button
              type="button"
              onClick={handleClearClick}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              tabIndex={-1}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Đường gạch ngang phân cách */}
        <div className="border-t border-gray-200 w-full" />

        {/* Phần dưới: Nhóm tùy chọn hình thức giá */}
        <div className="flex items-center gap-6 px-3 py-1 bg-gray-50/50 rounded-b-lg text-xs text-gray-700">
          {/* 1. Tặng miễn phí */}
          <div
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => handleTypeSelection("free")}
          >
            <Checkbox
              disabled={disabled}
              checked={priceType === "free"}
              onCheckedChange={() => handleTypeSelection("free")}
              className="h-4.5 w-4.5 rounded-md cursor-pointer"
            />
            <span className="font-medium text-sm">Tặng miễn phí</span>
          </div>

          {/* 2. Liên hệ */}
          <div
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => handleTypeSelection("contact")}
          >
            <Checkbox
              disabled={disabled}
              checked={priceType === "contact"}
              onCheckedChange={() => handleTypeSelection("contact")}
              className="h-4.5 w-4.5 rounded-md cursor-pointer"
            />
            <span className="font-medium text-sm">Liên hệ</span>
          </div>

          {/* 3. Thương lượng */}
          <div
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => handleTypeSelection("negotiable")}
          >
            <Checkbox
              disabled={disabled}
              checked={priceType === "negotiable"}
              onCheckedChange={() => handleTypeSelection("negotiable")}
              className="h-4.5 w-4.5 rounded-md cursor-pointer"
            />
            <span className="font-medium text-sm">Thương lượng</span>
          </div>
        </div>
      </div>

      {/* Thông báo lỗi từ Form cha */}
      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}
    </div>
  );
};
