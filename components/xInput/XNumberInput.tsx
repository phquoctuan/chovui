//XNumberInput
import React, { useRef, useState, useEffect } from "react";
import { UseFormRegisterReturn, FieldError as RHFFieldError } from "react-hook-form";
import { X, ChevronUp, ChevronDown } from "lucide-react";

interface XNumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
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
  min?: number;
  max?: number;
  step?: number;
  allowNegative?: boolean; // Thêm property allowNegative
}

export const XNumberInput: React.FC<XNumberInputProps> = ({
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
  min,
  max,
  step = 1,
  allowNegative = true, // Mặc định là cho phép số âm
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Nếu không cho phép số âm và giá trị chứa dấu trừ, loại bỏ dấu trừ
    if (!allowNegative && val.includes("-")) {
      val = val.replace(/-/g, "");
      e.target.value = val;
    }

    updateStateFromValue(val);
    if (onChange) onChange(e);
    if (registration?.onChange) registration.onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
    if (registration?.onBlur) registration.onBlur(e);

    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Nếu không cho phép số âm, chặn phím nhập dấu trừ ("-" hoặc "Subtract")
    if (!allowNegative && (e.key === "-" || e.key === "Subtract")) {
      e.preventDefault();
    }

    if (e.key === "Enter") {
      if (onValueChange) {
        onValueChange((e.target as HTMLInputElement).value);
      }
      inputRef.current?.blur();
    }
    if (onKeyDown) onKeyDown(e);
  };

  // Xử lý dán dữ liệu (Paste) để ngăn chặn dán số âm nếu allowNegative = false
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (!allowNegative) {
      const pastedData = e.clipboardData.getData("text");
      if (pastedData.includes("-")) {
        e.preventDefault();
        const cleanedData = pastedData.replace(/-/g, "");
        document.execCommand("insertText", false, cleanedData);
      }
    }
    if (props.onPaste) props.onPaste(e);
  };

  // Xử lý tăng/giảm giá trị số
  const handleStepChange = (direction: "up" | "down") => {
    if (disabled || !inputRef.current) return;

    let currentValue = parseFloat(inputRef.current.value);
    if (isNaN(currentValue)) {
      currentValue = min !== undefined ? min : (allowNegative ? 0 : (min !== undefined && min > 0 ? min : 0));
    }

    const stepValue = step || 1;
    let newValue = direction === "up" ? currentValue + stepValue : currentValue - stepValue;

    // Nếu allowNegative = false, giới hạn giá trị tối thiểu không nhỏ hơn 0 (hoặc min nếu min > 0)
    const effectiveMin = !allowNegative ? Math.max(0, min ?? 0) : min;

    if (max !== undefined && newValue > max) newValue = max;
    if (effectiveMin !== undefined && newValue < effectiveMin) newValue = effectiveMin;

    const stringVal = newValue.toString();
    inputRef.current.value = stringVal;
    updateStateFromValue(stringVal);

    // Kích hoạt sự kiện để React Hook Form nhận giá trị mới
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;

    if (nativeInputValueSetter) {
      nativeInputValueSetter.call(inputRef.current, stringVal);
    }

    const event = new Event("input", { bubbles: true });
    inputRef.current.dispatchEvent(event);

    if (onValueChange) {
      onValueChange(stringVal);
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
        className={`relative flex items-center rounded-lg border px-3 pt-3.5 pb-1.5 transition-all duration-300 ease-in-out bg-white
          data-[invalid=true]:border-red-500 border-gray-300 focus-within:border-black data-[invalid=true]:focus-within:border-red-500
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "hover:border-black"}
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
          <span className="flex items-center gap-0.5 truncate pr-20">
            {currentFloatingLabel}
            {required && <span className="font-bold">*</span>}
          </span>

          {maxLength && (
            <span className="text-[11px] text-gray-400 font-normal select-none pr-20">
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
          type="number"
          disabled={disabled}
          placeholder=""
          defaultValue={defaultValue}
          value={value}
          maxLength={maxLength}
          min={!allowNegative ? Math.max(0, min ?? 0) : min}
          max={max}
          step={step}
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
          className="w-full bg-transparent text-sm text-gray-900 focus:outline-none pt-1.5 pr-20 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
        />

        {/* Cụm điều khiển phía bên phải */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {!disabled && (
            <button
              type="button"
              onClick={handleClearClick}
              className={`p-0.5 rounded-full transition-all duration-200 ${
                hasValue
                  ? "text-gray-400 hover:text-gray-600 hover:bg-gray-100 opacity-100 cursor-pointer pointer-events-auto"
                  : "text-transparent opacity-0 cursor-default pointer-events-none"
              }`}
              tabIndex={-1}
              title="Xóa"
              aria-hidden={!hasValue}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!disabled && (
            <div className="flex flex-col justify-center items-center h-9 border border-gray-200 rounded bg-gray-50 hover:bg-gray-100 ">
              <button
                type="button"
                onClick={() => handleStepChange("up")}
                className="px-1 py-1 text-gray-500 hover:text-black transition-colors focus:outline-none"
                tabIndex={-1}
                title="Tăng"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
              <div className="w-full h-[1px] bg-gray-200" />
              <button
                type="button"
                onClick={() => handleStepChange("down")}
                className="px-1 py-1 text-gray-500 hover:text-black transition-colors focus:outline-none"
                tabIndex={-1}
                title="Giảm"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {error && <span className="text-xs text-red-500 mt-0.5">{error.message}</span>}
    </div>
  );
};