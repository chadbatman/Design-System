import React, { useId } from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const id = useId();

  return (
    <label
      className={`checkbox${disabled ? " checkbox--disabled" : ""}`}
      htmlFor={id}
    >
      <span className="checkbox__control">
        <input
          id={id}
          className="checkbox__input"
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span
          className={`checkbox__box${checked ? " checkbox__box--checked" : ""}${disabled ? " checkbox__box--disabled" : ""}`}
        >
          {checked && <span className="checkbox__checkmark">✓</span>}
        </span>
      </span>
      {label && (
        <span
          className={`checkbox__label${disabled ? " checkbox__label--disabled" : ""}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
