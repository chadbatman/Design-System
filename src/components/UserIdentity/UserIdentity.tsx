import React from "react";
import { Avatar } from "../Avatar";
import "./UserIdentity.css";

export interface UserIdentityProps {
  name: string;
  role: string;
  initials?: string;
  size?: "md" | "lg";
}

export const UserIdentity: React.FC<UserIdentityProps> = ({
  name,
  role,
  initials,
  size = "md",
}) => {
  const avatarSize = size === "lg" ? "lg" : "md";

  return (
    <div className={`user-identity user-identity--${size}`}>
      <Avatar initials={initials} size={avatarSize} />
      <div className="user-identity__info">
        <span className={`user-identity__name user-identity__name--${size}`}>
          {name}
        </span>
        <span className="user-identity__role">{role}</span>
      </div>
    </div>
  );
};
