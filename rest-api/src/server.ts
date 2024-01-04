import * as dotenv from "dotenv";
import * as express from 'express';
import { root } from './routes/root';
import { isInteger } from './utils';

const result = dotenv.config();

if (result.error) {
    console.log(`Error loading enviroment variables, aborting!`);
    process.exit(1);
}

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
        console.log(`v2 TTP REST Server is now running at http://localhost:${port}/`);

    })
}

setupExpress();

startServer();
