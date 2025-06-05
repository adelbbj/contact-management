import type { ComponentBase } from "../../../types/component-base.type";

export type ContainerProps = {
  children: React.ReactNode;
} & Pick<ComponentBase, "className">;
