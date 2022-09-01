import DefaultLayout from "layouts/default-layout/DefaultLayout";
import Banner from "components/__pages/home/banner/Banner";
import VideoCard from "components/video-card/VideoCard";

export default function List() {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-start">
        <div className="w-1552px mb-64 pt-32px pb-32px 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
          <div className="mb-52px">
            <img
              src="https://tieudung.kinhtedothi.vn/upload_images/images/2018/05/19/Deadpool-2.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="text-black font-pop text-48px leading-72px font-bold mb-16px">
            Deadpool
          </div>

          <div className="flex justify-start items-center"></div>
        </div>
      </div>
    </DefaultLayout>
  );
}
