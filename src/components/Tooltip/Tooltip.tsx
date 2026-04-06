import React, { useState } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  content: string;
  title?: string;
  variant?: "default" | "dark";
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  title,
  variant = "default",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="tooltip__wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={`tooltip tooltip--${variant}${title ? " tooltip--with-title" : ""}`}>
          {title && <span className="tooltip__title">{title}</span>}
          <span className="tooltip__content">{content}</span>
        </span>
      )}
    </span>
  );
};
