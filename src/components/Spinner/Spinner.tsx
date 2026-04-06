import React from "react";
import "./Spinner.css";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

export const Spinner: React.FC<SpinnerProps> = ({ size = "md" }) => {
  return (
    <span className={`spinner spinner--${size}`} role="status" aria-label="Loading">
      <span className="spinner__arc" />
    </span>
  );
};
