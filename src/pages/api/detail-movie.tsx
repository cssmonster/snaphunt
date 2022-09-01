// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "database";
import { _getTopSixHighestMovieScore } from "utils/list";
import { fakeDelayTime } from "utils/time";
import { _sortMoviesList, _getPageItems } from "utils/list";
import { IMovie } from "type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result: any = await fakeDelayTime(
      database.filter((movie: IMovie) => movie.id === Number(req.body.id))
    );
    if (result.length === 0) {
      res.status(404).send({ message: "No Movie Found" });
    } else {
      res.status(200).json(result[0]);
    }
  }
}
