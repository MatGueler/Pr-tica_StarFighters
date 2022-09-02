import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// func
import figtersRouter from "./Routers/figtersRouter";

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

const PORT: any = process.env.PORT;

server.use(figtersRouter);

server.listen(PORT, () => {
  console.log(`It's alive on port ${PORT}`);
});
