import React from "react";
import "./Banner.css";

export interface BannerProps {
  message: string;
  type?: "info" | "success" | "warning" | "error";
}

const ICON_MAP: Record<NonNullable<BannerProps["type"]>, string> = {
  info: "i",
  success: "✓",
  warning: "⚠",
  error: "✕",
};

export const Banner: React.FC<BannerProps> = ({ message, type = "info" }) => {
  return (
    <div className={`banner banner--${type}`}>
      <span className="banner__accent" aria-hidden="true" />
      <span className="banner__icon" aria-hidden="true">
        {ICON_MAP[type]}
      </span>
      <span className="banner__message">{message}</span>
    </div>
  );
};
