import DefaultLayout from "layouts/default-layout/DefaultLayout";
import Banner from "components/__pages/home/banner/Banner";
import VideoCard from "components/video-card/VideoCard";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="mb-30px">
        <Banner />
      </div>
      <div className="flex justify-center items-start">
        <div className="w-1552px mb-64 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
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
            <Link href="/list">
              <a>
                <button className="h-45px w-286px bg-cs-secondary-100 rounded-5px text-black font-pop text-18px leading-24px">
                  View all
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
