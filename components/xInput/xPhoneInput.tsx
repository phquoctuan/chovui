import React, { useRef, useState, useEffect } from "react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";
import { X } from "lucide-react";

interface XPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  floatingLabel?: string;
  required?: boolean;
  error?: RHFFieldError;
  registration?: UseFormRegisterReturn;
  isBusy?: boolean;
  onClear?: () => void;
  maxLength?: number;
  onValueChange?: (value: string) => void;
}

export const XPhoneInput: React.FC<XPhoneInputProps> = ({
  id,
  label,
  floatingLabel,
  required = false,
  error,
  registration,
  disabled,
  className = "",
  onClear,
  value,
  defaultValue,
  onChange,
  onBlur,
  onKeyDown,
  maxLength,
  onValueChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const [hasValue, setHasValue] = useState<boolean>(false);
  const [charCount, setCharCount] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const currentFloatingLabel = floatingLabel || label;

  const updateStateFromValue = (val: string) => {
    setHasValue(val.length > 0);
    setCharCount(val.length);
  };

  useEffect(() => {
    if (inputRef.current) {
      updateStateFromValue(inputRef.current.value);
    }
  }, [value, defaultValue]);

  // Regex kiểm tra các ký tự cho phép: số 0-9, dấu chấm (.), dấu cộng (+), dấu trừ (-)
  const isValidPhoneChar = (char: string) => /^[0-9.+\-]$/.test(char);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    // Lọc sạch chuỗi, chỉ giữ lại các ký tự hợp lệ
    const filteredValue = rawValue.split("").filter(isValidPhoneChar).join("");

    // Nếu giá trị bị thay đổi do lọc, cập nhật lại giá trị hiển thị của input
    if (filteredValue !== rawValue) {
      e.target.value = filteredValue;
    }

    updateStateFromValue(filteredValue);
    
    // Gọi các hàm callback gốc
    if (onChange) onChange(e);
    if (registration?.onChange) registration.onChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Cho phép các phím điều hướng, xóa, tab, enter,...
    const allowedKeys = [
      "Backspace", "Delete", "Tab", "Escape", "Enter",
      "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"
    ];

    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      if (e.key === "Enter") {
        if (onValueChange) {
          onValueChange((e.target as HTMLInputElement).value);
        }
        inputRef.current?.blur();
      }
      if (onKeyDown) onKeyDown(e);
      return;
    }

    // Chặn nếu ký tự nhập vào không nằm trong tập cho phép
    if (!isValidPhoneChar(e.key)) {
      e.preventDefault();
    }

    if (onKeyDown) onKeyDown(e);
  };

  // Xử lý trường hợp người dùng Paste dữ liệu vào
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    const filteredData = pasteData.split("").filter(isValidPhoneChar).join("");

    const inputEl = inputRef.current;
    if (inputEl) {
      const start = inputEl.selectionStart || 0;
      const end = inputEl.selectionEnd || 0;
      const currentValue = inputEl.value;
      
      const newValue = currentValue.slice(0, start) + filteredData + currentValue.slice(end);
      
      // Kiểm tra maxLength nếu có
      const finalValue = maxLength ? newValue.slice(0, maxLength) : newValue;

      inputEl.value = finalValue;
      updateStateFromValue(finalValue);

      // Kích hoạt sự kiện onChange giả lập để React Hook Form nhận giá trị mới
      const syntheticEvent = {
        ...e,
        target: inputEl,
        currentTarget: inputEl,
      } as unknown as React.ChangeEvent<HTMLInputElement>;

      if (onChange) onChange(syntheticEvent);
      if (registration?.onChange) registration.onChange(syntheticEvent);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
    if (registration?.onBlur) registration.onBlur(e);

    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "";
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
        className={`relative flex items-center rounded-lg border px-3 pt-4.5 pb-1.5 transition-all duration-300 ease-in-out bg-white
          data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          ${className}`}
      >
        {/* 1. Label thu nhỏ bên trên */}
        <label
          htmlFor={id}
          className={`absolute left-3 right-3 flex items-center justify-between pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left
            ${
              isFloating
                ? "top-1.5 text-xs text-gray-600 font-semibold opacity-100 scale-100"
                : "top-1/2 -translate-y-1/2 text-sm text-gray-400 font-normal opacity-0 scale-95 pointer-events-none"
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

        {/* 2. Label hiển thị chính giữa khi chưa nhập liệu */}
        <label
          htmlFor={id}
          className={`absolute left-3 flex items-center gap-0.5 pointer-events-none select-none transition-all duration-300 ease-in-out transform origin-left
            ${
              !isFloating
                ? "top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium opacity-100 scale-100"
                : "top-2 text-xs text-transparent opacity-0 scale-95 pointer-events-none"
            }`}
        >
          {label}
          {required && <span className="font-bold">*</span>}
        </label>

        {/* Input chính */}
        <input
          id={id}
          type="tel" // Gợi ý bàn phím số trên thiết bị di động
          disabled={disabled}
          placeholder=""
          defaultValue={defaultValue}
          value={value}
          maxLength={maxLength}
          {...registration}
          {...props}
          ref={(e) => {
            inputRef.current = e;
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
          onPaste={handlePaste}
          onChange={handleChange}
          className="w-full bg-transparent text-sm text-gray-900 focus:outline-none pt-1.5 pr-6"
        />

        {/* Nút X xóa nội dung */}
        {hasValue && !disabled && (
          <button
            type="button"
            onClick={handleClearClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            tabIndex={-1}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}
    </div>
  );
};