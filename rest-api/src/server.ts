import * as dotenv from "dotenv";
import * as express from "express";

const result = dotenv.config();

if (result.error) {
  console.log(`Error loading enviroment variables, aborting!`);
  process.exit(1);
}

import { root } from "./routes/root";
import { isInteger } from "./utils";
import { logger } from "./logger";
import { AppDataSource } from "./data-source";

const app = express();

function setupExpress() {
  app.route("/").get(root);
}

function startServer() {
  let port: number;

  const portEnv = process.env.PORT,
    portArg = process.argv[2];

  if (isInteger(portEnv)) {
    port = parseInt(portEnv);
  }

  if (!port && isInteger(portArg)) {
    port = parseInt(portArg);
  }

  if (!port) {
    port = 9000;
  }

  app.listen(port, () => {
    logger.info(
      `v2 TTP REST Server is now running at http://localhost:${port}/`
    );
  });
}

setupExpress();

startServer();

AppDataSource.initialize()
  .then(() => {
    logger.info(`The datasource has been initialize successfully.`)
    setupExpress();
    startServer();
  })
  .catch((err) => {});
