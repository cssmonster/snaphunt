import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: "url(/images/banner-home.png)" }}
      className="bg-center bg-no-repeat bg-cover  h-banner mobile-645px:h-200px bg-cyan-400 flex flex-col justify-center items-center mobile-950px:pl-16px mobile-950px:pr-16px"
    >
      <div className="mobile-950px:text-25px mobile-950px:mb-16px font-bold font-pop text-cs-secondary-200 text-48px leading-72 text-center mb-52px">
        Movie information hub
      </div>
      <p className="mobile-950px:text-14px mobile-700px:w-full w-700px text-white font-pop text-20px leading-30px text-center">
        We provide a list of your favourite movies and information about the
        cast.
      </p>
    </div>
  );
};

export default Banner;
