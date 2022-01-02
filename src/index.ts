import express, { Request, Response, NextFunction } from 'express';
const app = express();
import * as router from './router/router';
// const router = require('./router/router');
app.use('/',router.router);

app.listen(9090, () => {
    console.log(`OPEN`);
});