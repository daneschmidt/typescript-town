import express = require('express');
import { Town } from "./server/modules/Town"

const app: express.Application = express();

const town = new Town();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Example app listening on port: 3000')
});