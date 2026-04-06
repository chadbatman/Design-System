import React from "react";
import "./Avatar.css";

export interface AvatarProps {
  initials?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Avatar: React.FC<AvatarProps> = ({ initials = "", size = "md" }) => {
  return (
    <span className={`avatar avatar--${size}`}>
      {initials}
    </span>
  );
};
