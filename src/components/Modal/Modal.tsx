import React from "react";
import { Button } from "../Button";
import "./Modal.css";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: "primary" | "destructive";
  };
  secondaryAction?: { label: string; onClick: () => void };
  open?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose,
  primaryAction,
  secondaryAction,
  open = true,
}) => {
  if (!open) return null;

  return (
    <div
      className="modal__backdrop"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      <div
        className="modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          {onClose && (
            <button
              className="modal__close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          )}
        </div>

        <div className="modal__divider" />

        <div className="modal__body">{children}</div>

        {(secondaryAction || primaryAction) && (
          <>
            <div className="modal__divider" />
            <div className="modal__footer">
              {secondaryAction && (
                <Button
                  label={secondaryAction.label}
                  variant="secondary"
                  onClick={secondaryAction.onClick}
                />
              )}
              {primaryAction && (
                <Button
                  label={primaryAction.label}
                  variant={primaryAction.variant ?? "primary"}
                  onClick={primaryAction.onClick}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
