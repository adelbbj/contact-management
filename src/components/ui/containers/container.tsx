import classNames from "classnames";
import type { ContainerProps } from "./container.types";
import type { FC } from "react";

export const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  const classes = classNames(["container mx-auto px-4 max-w-4xl", className]);

  return <div className={classes}>{children}</div>;
};
