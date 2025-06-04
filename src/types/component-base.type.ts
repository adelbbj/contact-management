import type { Size } from "./size.type";
import type { Variant } from "./variant.type";

export type ComponentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};
