import React, { useId } from "react";
import "./RadioButton.css";

export interface RadioButtonProps {
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected = false,
  disabled = false,
  onChange,
}) => {
  const id = useId();

  return (
    <label
      className={`radio-button${disabled ? " radio-button--disabled" : ""}`}
      htmlFor={id}
    >
      <span className="radio-button__control">
        <input
          id={id}
          className="radio-button__input"
          type="radio"
          checked={selected}
          disabled={disabled}
          onChange={() => onChange?.()}
        />
        <span
          className={`radio-button__circle${selected ? " radio-button__circle--selected" : ""}${disabled ? " radio-button__circle--disabled" : ""}`}
        >
          {selected && <span className="radio-button__dot" />}
        </span>
      </span>
      {label && (
        <span
          className={`radio-button__label${disabled ? " radio-button__label--disabled" : ""}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
