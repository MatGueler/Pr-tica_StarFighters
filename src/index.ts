import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// func
import compareRouter from "./Routers/compareRouter";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

const PORT: any = process.env.PORT;

server.use(compareRouter);

server.listen(PORT, () => {
  console.log(`It's alive on port ${PORT}`);
});
