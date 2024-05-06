import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import dotenv from "dotenv";
import server from "./router";
import { connectDB } from "./common/db/init";
import log from "./utils/logger";
import swaggerDocs from "./utils/swagger";
require("dotenv").config()

const bootstrap = async () => {
  await connectDB();

  const app = express();
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/", server);
  // app.use(notFoundMiddleware) ;

  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  const BIND_ADDRESS = process.env.BIND_ADDRESS || "0.0.0.0";
  app.listen(PORT, BIND_ADDRESS, () => {
    log.info(`Server is listening on port ${PORT}`);
  });

  swaggerDocs(app , PORT ) ; 
};


bootstrap().catch((e) => log.error(e))