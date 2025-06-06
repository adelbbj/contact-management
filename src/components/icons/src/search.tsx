import BaseIcon from "./base-icon";
import type { SvgIcon } from "./icon.types";

export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
    </BaseIcon>
  );
}
