import classNames from "classnames";
import { Container } from "./container";

import type { FC } from "react";
import type { ContainerProps } from "./container.types";

type PageContainerProps = ContainerProps;

export const PageContainer: FC<PageContainerProps> = ({
  children,
  className,
}) => {
  const classes = classNames(["py-6", className]);

  return (
    <main className={classes}>
      <Container>{children}</Container>
    </main>
  );
};
