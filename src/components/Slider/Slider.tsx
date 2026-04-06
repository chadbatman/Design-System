import React from "react";
import "./Slider.css";

export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value = 50,
  min = 0,
  max = 100,
  disabled = false,
  onChange,
}) => {
  const percent = max === min ? 0 : ((value - min) / (max - min)) * 100;

  return (
    <div className="slider">
      <input
        className={`slider__input${disabled ? " slider__input--disabled" : ""}`}
        type="range"
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        style={
          {
            "--slider-fill": `${percent}%`,
          } as React.CSSProperties
        }
        onChange={(e) => onChange?.(Number(e.target.value))}
      />
    </div>
  );
};
