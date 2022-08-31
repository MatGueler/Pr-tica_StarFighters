import { Request, Response } from "express";
import joi from "joi";
import axios from "axios";

export async function CompareUser(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;

  const userSchema = joi.object({
    firstUser: joi.string().required(),
    secondUser: joi.string().required(),
  });

  let value: object[];

  await axios
    .get(`https://api.github.com/users/${firstUser}/repos`)
    .then((response) => {
      value = response.data;
    });
}
