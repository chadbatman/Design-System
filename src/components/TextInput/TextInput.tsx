import React from "react";
import "./TextInput.css";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
}) => {
  const fieldClass = [
    "text-input__field",
    error ? "text-input__field--error" : "",
    disabled ? "text-input__field--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="text-input">
      {label && (
        <label
          className={`text-input__label${disabled ? " text-input__label--disabled" : ""}`}
        >
          {label}
        </label>
      )}
      <input
        className={fieldClass}
        type="text"
        placeholder={placeholder}
        value={value ?? ""}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {error && <span className="text-input__error">{error}</span>}
    </div>
  );
};
