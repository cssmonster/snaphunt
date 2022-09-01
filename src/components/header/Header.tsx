import React from "react";
import Link from "next/link";
import { Logo } from "components/icon";
import SearchBox from "components/search-box/SearchBox";

const Header: React.FC<{ isHavingSearchBox?: boolean }> = ({
  isHavingSearchBox = true,
}) => {
  return (
    <div className="flex justify-center items-center bg-gradient-main bg-gradient-to-r from-cs-primary-100 to-cs-primary-200 ">
      <div className="mobile-645px:h-auto mobile-645px:pt-16px mobile-645px:pb-16px mobile-645px:block 2xl:w-full 2xl:pl-16px 2xl:pr-16px h-70px w-1152px flex justify-between items-center">
        <Link href="/">
          <a data-testid="logo">
            <Logo />
          </a>
        </Link>

        {isHavingSearchBox && (
          <div
            className="mobile-645px:mt-16px mobile-500px:h-auto"
            data-testid="search"
          >
            <div className="w-384px mobile-645px:w-full">
              <SearchBox />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
