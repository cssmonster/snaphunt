// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "database";

import { _getTopSixHighestMovieScore } from "utils/list";
import { fakeDelayTime } from "utils/time";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const topSixHighestMovies = await fakeDelayTime(
      _getTopSixHighestMovieScore(database)
    );
    res.status(200).json(topSixHighestMovies);
  }
}
