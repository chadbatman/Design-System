import React, { useId, useState } from "react";
import "./Toggle.css";

export interface ToggleProps {
  label?: string;
  on?: boolean;
  disabled?: boolean;
  onChange?: (on: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  on: onProp = false,
  disabled = false,
  onChange,
}) => {
  const id = useId();
  const [on, setOn] = useState(onProp);

  const handleChange = (checked: boolean) => {
    setOn(checked);
    onChange?.(checked);
  };

  return (
    <label
      className={`toggle${disabled ? " toggle--disabled" : ""}`}
      htmlFor={id}
    >
      <span className="toggle__track-wrapper">
        <input
          id={id}
          className="toggle__input"
          type="checkbox"
          checked={on}
          disabled={disabled}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <span
          className={`toggle__track${on ? " toggle__track--on" : ""}${disabled ? " toggle__track--disabled" : ""}`}
        >
          <span className={`toggle__thumb${on ? " toggle__thumb--on" : ""}`} />
        </span>
      </span>
      {label && (
        <span
          className={`toggle__label${disabled ? " toggle__label--disabled" : ""}`}
        >
          {label} {on ? "On" : "Off"}
        </span>
      )}
    </label>
  );
};
