import type { FC } from "react";

type RootLayoutHeaderProps = {
  title: string;
};

const RootLayoutHeader: FC<RootLayoutHeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>
    </header>
  );
};

export default RootLayoutHeader;
