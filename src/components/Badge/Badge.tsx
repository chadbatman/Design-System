import React from "react";
import "./Badge.css";

export interface BadgeProps {
  label: string;
  type?: "default" | "primary" | "success" | "warning" | "error";
}

export const Badge: React.FC<BadgeProps> = ({ label, type = "default" }) => {
  return (
    <span className={`badge badge--${type}`}>
      {label}
    </span>
  );
};
