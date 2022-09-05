// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "database";
import { IMovie } from "type";
import { _getTopSixHighestMovieScore } from "utils/list";
import { fakeDelayTime } from "utils/time";
import { EACH_PAGE_AMOUNT } from "constants/index";
import { _sortMoviesList, _getPageItems } from "utils/list";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const keyword = req.body.keyword;
    const pageNumber = req.body.pageNumber;
    const filteredWithKeyword = database.filter(
      (movie: IMovie) =>
        movie.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );

    const pageMovieItems = await fakeDelayTime(
      _getPageItems(
        _sortMoviesList(filteredWithKeyword),
        pageNumber,
        EACH_PAGE_AMOUNT
      )
    );
    res.status(200).json({
      list: pageMovieItems,
      totalPage: Math.ceil(filteredWithKeyword.length / EACH_PAGE_AMOUNT),
    });
  }
}
