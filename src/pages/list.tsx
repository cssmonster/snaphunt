import DefaultLayout from "layouts/default-layout/DefaultLayout";
import Banner from "components/__pages/home/banner/Banner";
import VideoCard from "components/video-card/VideoCard";

export default function List() {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-start">
        <div className="w-1552px mb-64 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
          <div className="pt-60px pb-60px text-center font-pop font-bold cs-secondary-300 text-48px leading-72px text-cs-secondary-300">
            Movie information hub
          </div>
          <div className="flex flex-wrap justify-between items-start">
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <VideoCard />
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <VideoCard />
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <VideoCard />
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <VideoCard />
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <VideoCard />
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <VideoCard />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="h-45px w-286px bg-cs-secondary-100 rounded-5px text-black font-pop text-18px leading-24px">
              View all
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
