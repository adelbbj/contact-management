import type { ComponentBase } from "@/types/component-base.type";
import type { ButtonHTMLAttributes } from "react";

type LoadingBehavior = {
  isLoading?: boolean;
  loadingText?: string;
  loadingType?: "spinner" | "ring";
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isOutline?: boolean;
    isLink?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
