import React from "react";
import classNames from "classnames";
import type { Size } from "../../../types/size.type";
import type { AvatarProps } from "./avatar.types";
import { IconUserProfile } from "../../icons";

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant = "primary",
  className,
  size = "normal",
  src,
  alt = "",
}) => {
  const classes = classNames("avatar", className, {
    [`avatar-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });

  return (
    <div
      className={classes}
      style={{ width: sizeClasses[size], height: sizeClasses[size] }}
    >
      {src ? (
        <img
          src={src}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          alt={alt}
        />
      ) : (
        <IconUserProfile
          width={sizeClasses[size] / 2}
          height={sizeClasses[size] / 2}
        />
      )}
    </div>
  );
};
