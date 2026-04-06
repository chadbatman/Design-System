import React from "react";
import "./Toast.css";

export interface ToastProps {
  message: string;
  type?: "success" | "warning" | "error" | "info";
  onDismiss?: () => void;
}

const ICON_MAP: Record<NonNullable<ToastProps["type"]>, string> = {
  success: "✓",
  warning: "⚠",
  error: "✕",
  info: "i",
};

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  onDismiss,
}) => {
  return (
    <div className={`toast toast--${type}`}>
      <span className="toast__icon" aria-hidden="true">
        {ICON_MAP[type]}
      </span>
      <span className="toast__message">{message}</span>
      {onDismiss && (
        <button
          className="toast__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
};
