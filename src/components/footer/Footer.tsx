import React from "react";
import { FbIcon, InIcon, TwIcon, InsIcon } from "components/icon";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-main bg-gradient-to-r from-cs-primary-100 to-cs-primary-200 ">
      <div className="h-118px w-1152px flex justify-between items-center">
        <p
          data-testid="desc"
          className="w-584px text-white font-pop text-14px leading-18px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div className="flex justify-end items-center">
          <div
            data-testid="copyright"
            className="text-white  font-pop text-14px leading-21px"
          >
            Copyright @ Snapmoviehub 2022
          </div>
          <div className="flex justify-end items-center ml-52px">
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
