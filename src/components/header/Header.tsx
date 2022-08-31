import React from "react";
import Link from "next/link";
import { Logo } from "components/icon";

const Header: React.FC<{ isHavingSearchBox?: boolean }> = ({
  isHavingSearchBox = true,
}) => {
  return (
    <div className="flex justify-center items-center bg-gradient-main bg-gradient-to-r from-cs-primary-100 to-cs-primary-200 ">
      <div className="mobile-500px:h-auto mobile-500px:pt-16px mobile-500px:pb-16px mobile-500px:block 2xl:w-full 2xl:pl-16px 2xl:pr-16px h-118px w-1152px flex justify-between items-center">
        <Link href="/">
          <a data-testid="logo">
            <Logo />
          </a>
        </Link>

        {isHavingSearchBox && (
          <div className="mobile-500px:mt-16px" data-testid="search">
            SearchBox
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
