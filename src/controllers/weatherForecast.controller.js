import { request, response } from 'express'
import weatherForecastService from '../services/weatherForecast.service.js'
/**
 * @param {request} req 
 * @param {response} res 
 * @returns {void}
 */
function get(req, res) {
    res.end(JSON.stringify(weatherForecastService.getWeatherForecast()))
}
export default {get}