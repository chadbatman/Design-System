import React from "react";
import { Button } from "../Button";
import "./EmptyState.css";

export interface EmptyStateProps {
  icon?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = "📭",
  title,
  description,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="empty-state">
      <span className="empty-state__icon">{icon}</span>
      {title && <h3 className="empty-state__title">{title}</h3>}
      {description && <p className="empty-state__description">{description}</p>}
      {actionLabel && (
        <Button label={actionLabel} variant="primary" size="md" onClick={onAction} />
      )}
    </div>
  );
};
