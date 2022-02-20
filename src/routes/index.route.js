import express from "express";


const router = express.Router();

import weatherForecast from './weatherForecast.route.js';
router.use('/weatherForecast', weatherForecast);

export default router
