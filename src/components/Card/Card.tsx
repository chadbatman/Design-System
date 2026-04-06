import React from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import "./Card.css";

export interface CardProps {
  type?: "default" | "with-image" | "interactive" | "user";
  title?: string;
  description?: string;
  badge?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  userName?: string;
  userRole?: string;
  userInitials?: string;
  loading?: boolean;
}

export const Card: React.FC<CardProps> = ({
  type = "default",
  title,
  description,
  badge,
  buttonLabel,
  onButtonClick,
  userName,
  userRole,
  userInitials,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className={`card card--${type} card--loading`}>
        {type === "with-image" && (
          <div className="card__image-placeholder card__shimmer card__shimmer--image" />
        )}
        <div className="card__body">
          {type === "user" && (
            <div className="card__user-row">
              <div className="card__shimmer card__shimmer--avatar" />
              <div className="card__user-info">
                <div className="card__shimmer card__shimmer--title" />
                <div className="card__shimmer card__shimmer--role" />
              </div>
            </div>
          )}
          {type !== "user" && (
            <div className="card__shimmer card__shimmer--title" />
          )}
          <div className="card__shimmer-lines">
            <div className="card__shimmer card__shimmer--line card__shimmer--line-lg" />
            <div className="card__shimmer card__shimmer--line card__shimmer--line-md" />
            <div className="card__shimmer card__shimmer--line card__shimmer--line-sm" />
          </div>
          <div className="card__shimmer card__shimmer--badge" />
          {type === "interactive" && (
            <div className="card__shimmer card__shimmer--button" />
          )}
        </div>
      </div>
    );
  }

  if (type === "with-image") {
    return (
      <div className="card card--with-image">
        <div className="card__image-placeholder">
          <span className="card__image-text">Image placeholder</span>
        </div>
        <div className="card__body">
          {title && <h3 className="card__title">{title}</h3>}
          {description && <p className="card__description">{description}</p>}
          {badge && <Badge label={badge} type="default" />}
        </div>
      </div>
    );
  }

  if (type === "interactive") {
    return (
      <div className="card card--interactive">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {badge && <Badge label={badge} type="default" />}
        {buttonLabel && (
          <Button label={buttonLabel} variant="primary" size="md" onClick={onButtonClick} />
        )}
      </div>
    );
  }

  if (type === "user") {
    return (
      <div className="card card--user">
        <div className="card__user-row">
          <Avatar size="lg" initials={userInitials} />
          <div className="card__user-info">
            <h3 className="card__title">{userName}</h3>
            <span className="card__user-role">{userRole}</span>
          </div>
        </div>
        <div className="card__divider" />
        {description && <p className="card__description">{description}</p>}
        {badge && <Badge label={badge} type="default" />}
      </div>
    );
  }

  // default
  return (
    <div className="card card--default">
      {title && <h3 className="card__title">{title}</h3>}
      {description && <p className="card__description">{description}</p>}
      {badge && <Badge label={badge} type="default" />}
    </div>
  );
};
