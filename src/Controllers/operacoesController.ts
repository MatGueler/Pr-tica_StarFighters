import { Request, Response } from "express";
import * as services from "../Services/figtersService";

export async function RankingUser(req: Request, res: Response) {
  const result = await services.getAllFigters();
  res.status(200).send(result);
}

export async function CompareUser(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;

  const result = await services.compareStars(firstUser, secondUser);

  // const result = await services.getAllFigters();
  res.status(200).send(result);
}
