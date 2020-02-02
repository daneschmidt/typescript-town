import express = require('express');
import { Town } from "./server/modules/Town"

const app: express.Application = express();

const town = new Town();
town.init();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.get("/api/log", (req: express.Request, res: express.Response) => {
    res.send(town.getFullHistory());
});

app.listen(3000, () => {
    console.log('We ride on Port: 3000')
});