import express = require('express');
import { Town } from "./server/modules/Town"

const app: express.Application = express();

const town = new Town();
town.init();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('We ride on Port: 3000')
});