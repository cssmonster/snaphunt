import { PageItem } from "type";
import { IMovie } from "type";

export const _getPageList = (total: number) => {
  const result: PageItem[] = [];
  for (let i = 0; i < total; i++) {
    result.push({
      id: i,
      title: "" + (i + 1),
    });
  }
  return result;
};

export const _getTopSixHighestMovieScore = (list: IMovie[]) => {
  return list
    .sort((item1: IMovie, item2: IMovie) => {
      return item2.score - item1.score;
    })
    .slice(0, 6);
};

export const _sortMoviesList = (list: IMovie[]) => {
  return list.sort((item1: IMovie, item2: IMovie) => {
    return item2.score - item1.score;
  });
};

export const _getPageItems = (list: IMovie[], page: number, each: number) => {
  return list.slice((page - 1) * each, page * each);
};
