import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({keys: ['fragraegr']}))
app.use(router);

app.listen(3030, ()=>{
    console.log(`Lisining on port 3030`);
});

// Do Not Write

// class Server {
//     app: express.Express = express();

//     constructor() {
//         this.app.use(bodyParser.urlencoded({ extended: true }));
//         this.app.use(cookieSession({ keys: ['fragraegr'] }))
//         this.app.use(router);
//     }

//     start(): void {
//         app.listen(3030, () => {
//             console.log(`Lisining on port 3030`);
//         });
//     }
// }

// new Server().start();