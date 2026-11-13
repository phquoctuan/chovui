import React, { useRef, useState, useEffect } from "react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";
import { X } from "lucide-react";

interface XTextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;                  // Label chính hiển thị ở giữa khi chưa nhập
  floatingLabel?: string;         // Label rút gọn hiển thị phía trên khi đã nhập
  required?: boolean;
  error?: RHFFieldError;
  registration?: UseFormRegisterReturn;
  isBusy?: boolean;
  onClear?: () => void;
  maxLength?: number;
  onValueChange?: (value: string) => void;
  description?: string;           // Hỗ trợ thêm mô tả phụ bên dưới (nếu cần)
}

export const XTextareaInput: React.FC<XTextareaInputProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  disabled,
  placeholder,
  className = "",
  onClear,
  value,
  defaultValue,
  onChange,
  onBlur,
  onKeyDown,
  maxLength,
  onValueChange,
  rows = 4,                       // Mặc định số dòng là 4 hoặc truyền vào từ props
  description,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [charCount, setCharCount] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const currentFloatingLabel = floatingLabel || label;

  const updateStateFromValue = (val: string) => {
    setHasValue(val.length > 0);
    setCharCount(val.length);
  };

  useEffect(() => {
    if (textareaRef.current) {
      updateStateFromValue(textareaRef.current.value);
    }
  }, [value, defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateStateFromValue(e.target.value);
    if (onChange) onChange(e);
    if (registration?.onChange) registration.onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
    if (registration?.onBlur) registration.onBlur(e);

    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Với textarea, thông thường phím Enter dùng để xuống dòng, 
    // nên ta không bắt sự kiện Enter submit/blur mà để người dùng nhập thoải mái.
    if (onKeyDown) onKeyDown(e);
  };

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
    updateStateFromValue("");
    
    if (onValueChange) {
      onValueChange("");
    }
    if (onClear) {
      onClear();
    }
  };

  const isFloating = isFocused || hasValue;

  return (
    <div className="w-full flex flex-col gap-1">
      <div
        data-invalid={!!error}
        className={`relative flex flex-col rounded-lg border px-3 pt-6 pb-2 transition-all duration-300 ease-in-out bg-white
          data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          ${className}`}
      >
        {/* 1. Label thu nhỏ bên trên */}
        <label
          htmlFor={id}
          className={`absolute left-3 right-3 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left z-10
            ${
              isFloating
                ? "top-2 text-xs text-gray-600 font-semibold opacity-100 scale-100"
                : "top-4 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none"
            }`}
        >
          <span className="flex items-center gap-0.5 truncate">
            {currentFloatingLabel}
            {required && <span className="font-bold">*</span>}
          </span>

          {maxLength && (
            <span className="text-[11px] text-gray-400 font-normal select-none pr-6">
              {charCount}/{maxLength}
            </span>
          )}
        </label>

        {/* 2. Label hiển thị chính giữa khi chưa nhập liệu (đặt vị trí cao hơn một chút cho textarea nhiều dòng) */}
        <label
          htmlFor={id}
          className={`absolute left-3 flex items-center gap-0.5 pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left z-10
            ${
              !isFloating
                ? "top-4 text-sm text-gray-500 font-medium opacity-100 scale-100"
                : "top-2 text-xs text-transparent opacity-0 scale-95 pointer-events-none"
            }`}
        >
          {label}
          {required && <span className="font-bold">*</span>}
        </label>

        {/* Textarea chính */}
        <textarea
          id={id}
          disabled={disabled}
          placeholder=""
          rows={rows}
          defaultValue={defaultValue}
          value={value}
          maxLength={maxLength}
          {...registration}
          {...props}
          ref={(e) => {
            textareaRef.current = e;
            if (registration?.ref) {
              registration.ref(e);
            }
            if (e) {
              updateStateFromValue(e.value);
            }
          }}
          onFocus={(e) => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className="w-full bg-transparent text-sm text-gray-900 focus:outline-none pt-2 pr-6 resize-y"
        />

        {/* Nút X xóa nội dung (đặt ở góc trên bên phải của khung textarea cho dễ bấm) */}
        {hasValue && !disabled && (
          <button
            type="button"
            onClick={handleClearClick}
            className="absolute right-3 top-3 p-0.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
            tabIndex={-1}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Hiển thị Field Description phụ (nếu có) và Error */}
      {/* {description && !error && (
        <span className="text-xs text-gray-500 mt-0.5">{description}</span>
      )} */}
      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}
    </div>
  );
};