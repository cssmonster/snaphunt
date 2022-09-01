import React from "react";
import axios from "axios";
import DefaultLayout from "layouts/default-layout/DefaultLayout";
import { IMovie, ICategory, IActor } from "type";

export default function List() {
  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState<IMovie | null>(null);

  React.useEffect(() => {
    const movieId = Number(window.location.href.split("/").pop());
    _getMovieData(movieId);
  }, []);

  const _getMovieData = async (id: number) => {
    setLoading(true);
    try {
      const result = await axios.post("/api/detail-movie", { id: id });
      setMovie(result.data);
    } catch (err: any) {}
    setLoading(false);
  };

  return (
    <DefaultLayout>
      <div className="flex justify-center items-start">
        {loading && (
          <div className="mb-32px">
            <img className="w-70px" src="/images/spinner.gif" alt="" />
          </div>
        )}

        {!loading && movie && (
          <div className="w-1552px mb-64 pt-32px pb-32px 2xl:w-full 2xl:pl-16px 2xl:pr-16px">
            <div className="mb-52px">
              <img src={movie.url} alt="" className="w-full" />
            </div>
            <div className="text-black font-pop text-48px leading-72px font-bold mb-16px">
              {movie.name}
            </div>

            <div className="flex justify-start items-center mb-24px flex-wrap">
              {movie.category.map((item: ICategory) => (
                <button
                  key={item.id}
                  className="mr-16px mb-16px pt-10px pb-10px pl-4px pr-4px border-2 border-cs-secondary-400 font-pop text-14px leading-14px"
                >
                  {item.title}
                </button>
              ))}
            </div>

            <p className="mb-16px font-pop text-14px leading-21px">
              {movie.desc}
            </p>

            <div className="text-black font-pop text-36px leading-54px font-bold mb-16px">
              Cast
            </div>

            <div className="border-2 border-black pt-50px pb-50px pl-38px pr-38px flex flex-wrap justify-between items-start">
              {movie.actors.map((actor: IActor) => (
                <div
                  key={actor.id}
                  className="mobile-700px:w-full res-1103px:w-half w-tri flex  justify-start items-center mb-32px"
                >
                  <div
                    style={{
                      backgroundImage: `url(${actor.url})`,
                    }}
                    className="mr-16px w-93px h-93px rounded-max  bg-center bg-no-repeat bg-cover"
                  ></div>
                  <div className="font-pop text-24px leading-36px">
                    {actor.name} <br />
                    {actor.characterName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
