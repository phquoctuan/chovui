import React from "react";

export interface ButtonGroupOption {
  label: string;
  value: string | number;
}

interface XButtonGroupInputProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  options: ButtonGroupOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  error?: { message?: string } | string;
  className?: string;
}

export const XButtonGroupInput: React.FC<XButtonGroupInputProps> = ({
  label,
  required,
  disabled = false,
  options = [],
  value,
  onChange,
  error,
  className = "", //col-span-full
}) => {
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div
      className={`${className} rounded-lg border px-2 pt-0.5 pb-1 ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${!disabled && "hover:border-black"}`}
    >
      {label && (
        <label className="text-xs font-medium leading-none mb-1.5 mt-0.5 block">
          {label} {required && <span className="font-bold">*</span>}
        </label>
      )}

      <div className="flex flex-wrap gap-2 mt-1">
        {options.map((opt) => {
          const isSelected = value === opt.value;
          return (
            <button
              key={String(opt.value)}
              type="button"
              disabled={disabled}
              onClick={() => {
                if (!disabled) {
                  onChange?.(opt.value);
                }
              }}
              className={`px-2 py-1 text-sm rounded-md border transition-all shadow-sm ${
                disabled ? "cursor-not-allowed" : ""
              } ${
                isSelected
                  ? "bg-foreground/90 text-background border-foreground/50 font-semibold"
                  : `bg-background border-input text-foreground ${disabled ? "" : "hover:bg-muted"}`
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {errorMessage && <p className="text-xs text-destructive mt-1.5">{errorMessage}</p>}
    </div>
  );
};
