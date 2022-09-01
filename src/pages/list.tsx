import DefaultLayout from "layouts/default-layout/DefaultLayout";
import VideoCard from "components/video-card/VideoCard";
import Pagination from "components/pagination/Pagination";
import Link from "next/link";

export default function List() {
  return (
    <DefaultLayout isHavingSearchBox>
      <div className="flex justify-center items-start">
        <div className="w-1552px mb-64 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
          <div className="pt-60px pb-60px text-center font-pop font-bold cs-secondary-300 text-48px leading-72px text-cs-secondary-300">
            Movie information hub
          </div>
          <div className="flex flex-wrap justify-between items-start">
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <Link href="/detail/1">
                <a>
                  <VideoCard />
                </a>
              </Link>
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <Link href="/detail/1">
                <a>
                  <VideoCard />
                </a>
              </Link>
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <Link href="/detail/1">
                <a>
                  <VideoCard />
                </a>
              </Link>
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <Link href="/detail/1">
                <a>
                  <VideoCard />
                </a>
              </Link>
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <Link href="/detail/1">
                <a>
                  <VideoCard />
                </a>
              </Link>
            </div>
            <div className="mobile-645px:w-full 2xl:w-half w-486px mb-30px">
              <Link href="/detail/1">
                <a>
                  <VideoCard />
                </a>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Pagination />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
