import React from "react";
import Link from "next/link";
import axios from "axios";
import DefaultLayout from "layouts/default-layout/DefaultLayout";
import Banner from "components/__pages/home/banner/Banner";
import VideoCard from "components/video-card/VideoCard";
import { IMovie } from "type";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [list, setList] = React.useState<IMovie[]>([]);

  React.useEffect(() => {
    _getTopList();
  }, []);

  const _getTopList = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/top-movie");
      setList(result.data);
    } catch (error: any) {}
    setLoading(false);
  };

  return (
    <DefaultLayout>
      <div className="mb-30px">
        <Banner />
      </div>
      <div className="flex justify-center items-start">
        {loading && (
          <div className="mb-32px">
            <img className="w-70px" src="/images/spinner.gif" alt="" />
          </div>
        )}
        {!loading && (
          <div className="w-1552px mb-64 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
            <div className="flex flex-wrap justify-between items-start">
              {list.map((movie: IMovie) => (
                <div
                  key={movie.id}
                  className="mobile-645px:w-full 2xl:w-half w-486px mb-30px"
                >
                  <Link href={`/detail/${movie.id}`}>
                    <a>
                      <VideoCard
                        bannerUrl={movie.url}
                        title={movie.name}
                        desc={movie.desc}
                      />
                    </a>
                  </Link>
                </div>
              ))}
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
        )}
      </div>
    </DefaultLayout>
  );
}
