import type { FC } from "react";
import { Outlet } from "react-router-dom";
import RootLayoutHeader from "./root-layout-header";

const RootLayout: FC = () => {
  return (
    <main>
      <RootLayoutHeader title="Contacts App" />
      <Outlet />
    </main>
  );
};

export default RootLayout;
