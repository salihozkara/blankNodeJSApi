import express from "express";

import weatherForecastController from "../controllers/weatherForecast.controller.js";
const router = express.Router();

router.route('/').get(weatherForecastController.get);

export default router