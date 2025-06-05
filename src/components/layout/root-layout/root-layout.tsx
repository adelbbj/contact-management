import type { FC } from "react";
import { Outlet } from "react-router-dom";
import RootLayoutHeader from "./root-layout-header";

const RootLayout: FC = () => {
  return (
    <>
      <RootLayoutHeader title="Contacts App" />
      <Outlet />
    </>
  );
};

export default RootLayout;
