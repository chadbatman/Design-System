import React, { useId, useState } from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: checkedProp = false,
  disabled = false,
  onChange,
}) => {
  const id = useId();
  const [checked, setChecked] = useState(checkedProp);

  const handleChange = (value: boolean) => {
    setChecked(value);
    onChange?.(value);
  };

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
          onChange={(e) => handleChange(e.target.checked)}
        />
        <span
          className={`checkbox__box${checked ? " checkbox__box--checked" : ""}${disabled && !checked ? " checkbox__box--disabled" : ""}${disabled && checked ? " checkbox__box--checked checkbox__box--disabled" : ""}`}
        >
          <span className="checkbox__checkmark">✓</span>
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
