export default class WeatherForecast {
    // Date property
    /**
     * @return {Date}
     */
    get date() {
        return this._date;
    }
    /**
     * @param {Date} date
     */
    set date(value) {
        this._date = value;
    }
    // TemperatureC property
    /**
     * @return {number}
     */
    get temperatureC() {
        return this._temperatureC;
    }
    /**
     * @param {number} date
     */
    set temperatureC(value) {
        this._temperatureC = value;
    }
    // Summary property
    /**
     * @return {string}
     */
    get summary() {
        return this._summary;
    }
    /**
     * @param {string} summary
     */
    set summary(value) {
        this._summary = value;
    }

    // Constructor
    /**
     * @param {Date} date Date of the forecast
     * @param {number} temperatureC Temperature in Celsius
     * @param {string} summary Summary of the forecast
     */
    constructor(date,temperatureC,summary) {
        this._date = date;
        this._temperatureC = temperatureC;
        this._summary = summary;
    }

}
