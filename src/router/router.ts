import express from 'express';
const router = express.Router();
import * as controller from '../controller/controller';
// const controller = require('../controller/controller');

router.get('/switch/:id/:command', controller.cSwitch);
router.get('/switchbot/:id/:command', controller.cSwitchbot);
router.get('/computer/:id/:command', controller.cComputer);
router.get('/done', controller.cDone);

export {router};