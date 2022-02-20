import WeatherForecast from '../models/weatherForecast.js';

let summaries = [
  "Freezing",
  "Bracing",
  "Chilly",
  "Cool",
  "Mild",
  "Warm",
  "Balmy",
  "Hot",
  "Sweltering",
  "Scorching",
];

/**
 * @returns {WeatherForecast[]}
 */
function getWeatherForecast() {
  return summaries.map((summary, index) => {
    return {
      date: new Date(new Date().getTime() + index * 86400000),
      temperatureC: Math.round(Math.random() * 20) + 10,
      summary,
    };
  });
}

export default { getWeatherForecast };