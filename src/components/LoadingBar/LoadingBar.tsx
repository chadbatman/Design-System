import React from "react";
import "./LoadingBar.css";

export interface LoadingBarProps {
  value?: number;
  indeterminate?: boolean;
  width?: string;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({
  value = 0,
  indeterminate = false,
  width = "400px",
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className="loading-bar"
      style={{ width }}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {indeterminate ? (
        <span className="loading-bar__fill loading-bar__fill--indeterminate" />
      ) : (
        <span
          className="loading-bar__fill"
          style={{ width: `${clampedValue}%` }}
        />
      )}
    </div>
  );
};
