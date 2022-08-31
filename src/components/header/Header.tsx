import React from "react";
import Link from "next/link";
import { Logo } from "components/icon";

const Header: React.FC<{ isHavingSearchBox?: boolean }> = ({
  isHavingSearchBox,
}) => {
  return (
    <div className="flex justify-center items-center bg-gradient-main bg-gradient-to-r from-cs-primary-100 to-cs-primary-200 ">
      <div className="h-118px w-1152px flex justify-between items-center">
        <Link href="/">
          <a data-testid="logo">
            <Logo />
          </a>
        </Link>

        {isHavingSearchBox && <div data-testid="search">SearchBox</div>}
      </div>
    </div>
  );
};

export default Header;
