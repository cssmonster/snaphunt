// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "database";
import { _getTopSixHighestMovieScore } from "utils/list";
import { fakeDelayTime } from "utils/time";
import { _sortMoviesList, _getPageItems } from "utils/list";

const EACH_PAGE_AMOUNT = 9;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const pageMovieItems = await fakeDelayTime(
      _getPageItems(
        _sortMoviesList(database),
        Number(req.query.page),
        EACH_PAGE_AMOUNT
      )
    );
    res.status(200).json({
      list: pageMovieItems,
      totalPage: Math.round(database.length / EACH_PAGE_AMOUNT),
    });
  }
}
