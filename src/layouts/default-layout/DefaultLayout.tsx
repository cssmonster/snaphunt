import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { UpIcon } from "components/icon";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full">
        <Header />
      </div>
      <div className="mobile-645px:mt-140px mt-70px">{children}</div>
      <div className="fixed  right-26px bottom-26px">
        <button className="w-70px h-70px flex flex-col justify-center items-center">
          <UpIcon />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
