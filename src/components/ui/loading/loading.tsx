import classNames from "classnames";
import type { Size } from "@/types/size.type";
import type { LoadingProps } from "./loading.types";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<Omit<LoadingProps, "variant">> = ({
  type = "spinner",
  size = "normal",
  className,
}) => {
  const classes = classNames("loading", className, {
    [`loading-${type}`]: type,
    [`${sizeClasses[size]}`]: size,
  });

  return <span className={classes} />;
};
