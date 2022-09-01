import React from "react";

type Actor = {
  id: number;
  name: string;
  avatar: string;
};

const VideoCard: React.FC<{
  bannerUrl?: string;
  title?: string;
  desc?: string;
  actors?: Actor[];
}> = ({
  bannerUrl = "https://tieudung.kinhtedothi.vn/upload_images/images/2018/05/19/Deadpool-2.jpg",
  title = "Deadpool",
  desc = "In my opinion there is an issue around this line. It should get the modules of the original config as well.",
  actors,
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
          className="font-pop text-cs-primary-300 text-left text-14px leading-14px mb-16px"
        >
          {desc}
        </h2>
      )}

      {actors && (
        <div className="flex justify-between items-center">
          {actors.map((actor: Actor) => (
            <div key={actor.id} className="flex justify-start items-center">
              <div
                className="rounded-max bg-center bg-no-repeat bg-cover w-65px h-65px "
                style={{ backgroundImage: `url(${actor.avatar})` }}
              ></div>
              <div className="ml-16px font-pop text-18px leading-27px text-black">
                {actor.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
