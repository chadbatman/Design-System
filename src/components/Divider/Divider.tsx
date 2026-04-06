import React from "react";
import "./Divider.css";

export interface DividerProps {
  direction?: "horizontal" | "vertical";
}

export const Divider: React.FC<DividerProps> = ({ direction = "horizontal" }) => {
  return (
    <span className={`divider divider--${direction}`} />
  );
};
