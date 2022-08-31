import { Router } from "express";
import * as operacoesController from "../Controllers/operacoesController";

const routes = Router();

routes.get("/battle", operacoesController.CompareUser);

export default routes;
