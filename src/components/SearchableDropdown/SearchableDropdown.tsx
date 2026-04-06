import React, { useState, useRef, useEffect } from "react";
import "./SearchableDropdown.css";

export interface SearchableDropdownProps {
  options: string[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  placeholder = "Search...",
  disabled = false,
  onChange,
}) => {
  const [query, setQuery] = useState(value ?? "");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value ?? "");
  }, [value]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery(value ?? "");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [value]);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (option: string) => {
    onChange?.(option);
    setQuery(option);
    setOpen(false);
  };

  const inputClass = [
    "searchable-dropdown__input",
    open ? "searchable-dropdown__input--open" : "",
    disabled ? "searchable-dropdown__input--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="searchable-dropdown" ref={containerRef}>
      <div className={inputClass}>
        <span className="searchable-dropdown__icon">⌕</span>
        <input
          className="searchable-dropdown__field"
          type="text"
          placeholder={placeholder}
          value={query}
          disabled={disabled}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => !disabled && setOpen(true)}
        />
      </div>
      {open && !disabled && (
        <ul className="searchable-dropdown__menu" role="listbox">
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <li
                key={option}
                className={`searchable-dropdown__option${value === option ? " searchable-dropdown__option--selected" : ""}`}
                role="option"
                aria-selected={value === option}
                onMouseDown={() => handleSelect(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="searchable-dropdown__no-results">No results</li>
          )}
        </ul>
      )}
    </div>
  );
};
