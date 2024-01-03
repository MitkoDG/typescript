import * as express from 'express';
import { root } from './routes/root';
import { isInteger } from './utils';

const app = express();

function setupExpress() {


    app.route("/").get(root);
}

function startServer() {

    let port: number;

    const portArg = process.argv[2];

    if (isInteger(portArg)) {
        port = parseInt(portArg);
    }

    if (!port) {
        port = 9000;
    }
    
    
    app.listen(port, ()=> {
        console.log(`v2 TTP REST Server is now running at http://localhost:${port}/`);
        
    })
}

setupExpress();

startServer();
