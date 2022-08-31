import React from "react";
import Header from "components/header/Header";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full">
        <Header />
      </div>
      <div className="mt-118px">{children}</div>
    </div>
  );
};

export default DefaultLayout;
