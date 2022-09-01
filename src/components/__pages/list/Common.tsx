import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import DefaultLayout from "layouts/default-layout/DefaultLayout";
import VideoCard from "components/video-card/VideoCard";
import Pagination from "components/pagination/Pagination";
import { IMovie } from "type";

const CommonList: React.FC<{ current?: number }> = ({ current = 1 }) => {
  const router = useRouter();
  const [list, setList] = React.useState<IMovie[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(current);

  React.useEffect(() => {
    _getPageList(current);
    setCurrentPage(current);
  }, [current]);

  const onHandleClickFirstPage = () => {
    setCurrentPage(1);
    _getPageList(1);
    router.push(`/list/1`);
  };

  const onHandleClickLastPage = () => {
    setCurrentPage(totalPage);
    _getPageList(totalPage);
    router.push(`/list/${totalPage}`);
  };

  const onHandleClickPage = (page: number) => {
    setCurrentPage(page);
    _getPageList(page);
    router.push(`/list/${page}`);
  };

  const onHandleMovePrevious = () =>
    setCurrentPage((prev) => {
      if (prev <= 1) {
        _getPageList(1);
        router.push(`/list/1`);
        return 1;
      } else {
        _getPageList(prev - 1);
        router.push(`/list/${prev - 1}`);
        return prev - 1;
      }
    });

  const onHandleMoveNext = () =>
    setCurrentPage((prev) => {
      if (prev >= totalPage) {
        _getPageList(totalPage);
        router.push(`/list/${totalPage}`);
        return totalPage;
      } else {
        _getPageList(prev + 1);
        router.push(`/list/${prev + 1}`);
        return prev + 1;
      }
    });

  const _getPageList = async (current: number) => {
    setLoading(true);

    try {
      const result = await axios.get("/api/list-movie", {
        params: {
          page: current,
        },
      });
      setList(result.data.list);
      setTotalPage(result.data.totalPage);
    } catch (error: any) {}
    setLoading(false);
  };

  return (
    <DefaultLayout isHavingSearchBox>
      <div className="flex justify-center items-start">
        <div className="w-1552px mb-64 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
          <div className="pt-60px pb-60px text-center font-pop font-bold cs-secondary-300 text-48px leading-72px text-cs-secondary-300">
            Movie information hub
          </div>
          {loading && (
            <div className="mb-32px flex justify-center items-center">
              <img className="w-70px" src="/images/spinner.gif" alt="" />
            </div>
          )}

          {!loading && (
            <div className="flex flex-wrap justify-between items-start">
              {list.map((movie: IMovie) => (
                <div
                  key={movie.id}
                  className="mobile-645px:w-full 2xl:w-half w-486px mb-30px"
                >
                  <Link href="/detail/1">
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
          )}

          <div className="flex justify-center items-center">
            <Pagination
              current={currentPage}
              total={totalPage}
              onFirst={onHandleClickFirstPage}
              onLast={onHandleClickLastPage}
              onClickPage={onHandleClickPage}
              onMoveLeft={onHandleMovePrevious}
              onMoveRight={onHandleMoveNext}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CommonList;
