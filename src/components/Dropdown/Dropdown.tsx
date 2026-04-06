import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export interface DropdownProps {
  options: string[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value: valueProp,
  placeholder = "Select an option",
  disabled = false,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(valueProp ?? "");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange?.(option);
    setOpen(false);
  };

  const triggerClass = [
    "dropdown__trigger",
    open ? "dropdown__trigger--open" : "",
    disabled ? "dropdown__trigger--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        type="button"
        className={triggerClass}
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`dropdown__value${!selectedValue ? " dropdown__value--placeholder" : ""}`}>
          {selectedValue || placeholder}
        </span>
        <span className="dropdown__caret">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <ul className="dropdown__menu" role="listbox">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown__option${selectedValue === option ? " dropdown__option--selected" : ""}`}
              role="option"
              aria-selected={selectedValue === option}
              onMouseDown={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
