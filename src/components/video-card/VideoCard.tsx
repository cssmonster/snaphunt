import React from "react";

const VideoCard: React.FC<{
  bannerUrl?: string;
  title?: string;
  desc?: string;
}> = ({
  bannerUrl = "https://tieudung.kinhtedothi.vn/upload_images/images/2018/05/19/Deadpool-2.jpg",
  title = "Deadpool",
  desc = "In my opinion there is an issue around this line. It should get the modules of the original config as well.",
}) => {
  return (
    <div className="w-full bg-white pt-32px pl-24px pr-24px pb-32px rounded-10px shadow-card">
      {bannerUrl && (
        <div
          data-testid="banner"
          className="h-200px bg-center bg-no-repeat bg-cover w-full mb-24px"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        ></div>
      )}
      {title && (
        <h2
          data-testid="title"
          className="font-pop text-cs-primary-300 text-left text-24px leading-24px font-semibold mb-16px"
        >
          {title}
        </h2>
      )}
      {desc && (
        <h2
          data-testid="desc"
          className="font-pop text-cs-primary-300 text-left text-14px leading-14px "
        >
          {desc}
        </h2>
      )}
    </div>
  );
};

export default VideoCard;
