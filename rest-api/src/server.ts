import * as express from 'express';
import { root } from './routes/root';

const app = express();

function setupExpress() {


    app.route("/").get(root);
}

function startServer() {

    app.listen(9000, ()=> {
        console.log(`HTTP REST Server is now running at http://localhost:9000/`);
        
    })
}

setupExpress();

startServer();
