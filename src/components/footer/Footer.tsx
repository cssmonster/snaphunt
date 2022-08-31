import React from "react";
import { FbIcon, InIcon, TwIcon, InsIcon } from "components/icon";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-main bg-gradient-to-r from-cs-primary-100 to-cs-primary-200 pt-60px pb-60px footer-1103px:pt-32px footer-1103px:pb-32px">
      <div className="footer-1103px:block 2xl:w-full 2xl:pl-16px 2xl:pr-16px w-1152px flex justify-between items-center">
        <p
          data-testid="desc"
          className="footer-1103px:w-full w-584px text-white font-pop text-14px leading-18px footer-1103px:mb-16px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div className="footer-1103px:justify-between mobile-500px:block flex justify-end items-center">
          <div
            data-testid="copyright"
            className="text-white  font-pop text-14px leading-21px mobile-500px:mb-16px"
          >
            Copyright @ Snapmoviehub 2022
          </div>
          <div className="mobile-500px:justify-start mobile-500px:ml-0 flex justify-end items-center ml-52px">
            <div
              className="flex flex-col justify-center items-center"
              data-testid="fb"
            >
              <FbIcon />
            </div>
            <div
              className="flex flex-col justify-center items-center ml-30px"
              data-testid="linkin"
            >
              <InIcon />
            </div>
            <div
              className="flex flex-col justify-center items-center ml-30px"
              data-testid="twitter"
            >
              <TwIcon />
            </div>
            <div
              className="flex flex-col justify-center items-center ml-30px"
              data-testid="instagram"
            >
              <InsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
