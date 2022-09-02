import { Router } from "express";
import * as operacoesController from "../Controllers/operacoesController";
import { validateSchema } from "../Middlewares/validateSchemas";
import userSchema from "../Schemas/figterUsers";

const routes = Router();

routes.post(
  "/battle",
  validateSchema(userSchema),
  operacoesController.CompareUser
);
routes.get("/ranking", operacoesController.RankingUser);

export default routes;
