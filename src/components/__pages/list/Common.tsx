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
  const [searchKeyword, setSearchkeyword] = React.useState("");
  const debounceRef = React.useRef<any>(null);

  React.useEffect(() => {
    const keyword = window.location.href.split("=")[1];
    const pageNumber = window.location.href.split("?")[0].split("/").pop();
    const isSearchUrl = window.location.href.indexOf("search=") !== -1;

    if (isSearchUrl) {
      _getSearchList(keyword, Number(pageNumber) ? Number(pageNumber) : 1);
      setCurrentPage(Number(pageNumber) ? Number(pageNumber) : 1);
      setSearchkeyword(keyword);
    } else {
      _getPageList(current);
      setCurrentPage(current);
    }
  }, [current]);

  React.useEffect(() => {
    return () => window.clearTimeout(debounceRef.current);
  }, []);

  const onHandleClickFirstPage = () => {
    setCurrentPage(1);
    _getPageList(1);
    router.push(`/list/1`);
  };

  const onHandleClickLastPage = () => {
    if (searchKeyword === "") {
      setCurrentPage(totalPage);
      _getPageList(totalPage);
      router.push(`/list/${totalPage}`);
    } else {
      setCurrentPage(totalPage);
      _getSearchList(searchKeyword, totalPage);
      router.push(`/list/${totalPage}?search=${searchKeyword}`);
    }
  };

  const onHandleClickPage = (page: number) => {
    if (searchKeyword === "") {
      setCurrentPage(page);
      _getPageList(page);
      router.push(`/list/${page}`);
    } else {
      setCurrentPage(page);
      _getSearchList(searchKeyword, page);
      router.push(`/list/${page}?search=${searchKeyword}`);
    }
  };

  const onHandleMovePrevious = () =>
    setCurrentPage((prev) => {
      if (prev <= 1) {
        if (searchKeyword === "") {
          _getPageList(1);
          router.push(`/list/1`);
        } else {
          _getSearchList(searchKeyword, 1);
          router.push(`/list/${1}?search=${searchKeyword}`);
        }
        return 1;
      } else {
        if (searchKeyword === "") {
          _getPageList(prev - 1);
          router.push(`/list/${prev - 1}`);
        } else {
          _getSearchList(searchKeyword, prev - 1);
          router.push(`/list/${prev - 1}?search=${searchKeyword}`);
        }
        return prev - 1;
      }
    });

  const onHandleMoveNext = () =>
    setCurrentPage((prev) => {
      if (prev >= totalPage) {
        if (searchKeyword === "") {
          _getPageList(totalPage);
          router.push(`/list/${totalPage}`);
        } else {
          _getSearchList(searchKeyword, totalPage);
          router.push(`/list/${totalPage}?search=${searchKeyword}`);
        }
        return totalPage;
      } else {
        if (searchKeyword === "") {
          _getPageList(prev + 1);
          router.push(`/list/${prev + 1}`);
        } else {
          _getSearchList(searchKeyword, prev + 1);
          router.push(`/list/${prev + 1}?search=${searchKeyword}`);
        }

        return prev + 1;
      }
    });

  const onHandleGetSearchKeyword = (val: string) => {
    setSearchkeyword(val);
    if (val === "") _handleListWithEmptySearchkeyword();
    else _handleListWithSearchkeyword(val);
  };
  const _handleListWithEmptySearchkeyword = () => {
    _getPageList(1);
    _handleUpdateURL("");
  };

  const _handleListWithSearchkeyword = (val: string) => {
    _handleUpdateURL(val);
    window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(async () => {
      _getSearchList(val, 1);
    }, 500);
  };

  const _handleUpdateURL = (val: string) => {
    if (val === "") {
      window.history.pushState(
        { path: window.location.href },
        "",
        window.location.href.split("?")[0]
      );
    } else {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        `?search=${val}`;
      window.history.pushState({ path: newurl }, "", newurl);
    }
  };

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

  const _getSearchList = async (keyword: string, pageNumber: number) => {
    setLoading(true);
    try {
      const result = await axios.post("/api/search-movie", {
        keyword: keyword,
        pageNumber: pageNumber,
      });
      setList(result.data.list);
      setTotalPage(result.data.totalPage);
    } catch (err: any) {}
    setLoading(false);
  };

  return (
    <DefaultLayout
      isHavingSearchBox
      onHandleGetSearchKeyword={onHandleGetSearchKeyword}
      initSearchKeyword={searchKeyword}
    >
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
              {list.length === 0 && (
                <div className="w-full text-center pt-16px pb-16px font-bold">
                  NO RESULTS
                </div>
              )}
              {list.length !== 0 && (
                <>
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
                            actors={movie.actors.slice(0, 2)}
                          />
                        </a>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          {!loading && list.length !== 0 && (
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
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CommonList;
