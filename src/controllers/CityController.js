const apiKey = require('../config/keys.json').OpenWeatherMap;
const api = require('../services/OpenWeatherMaps');

// const city = 'portland';
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey.OpenWeatherMap}`;


module.exports = {

    async getByName(req, res, next) {
        try {
            const { name } = req.body;

            console.log(name);
            console.log(apiKey);

            // const response = await weather.get(`/weather?q=${name}&appid=${apiKey}`);

            const response = await api.get('/weather', {
                params: {
                    q: name, 
                    appid: apiKey
                }
            });

            console.log(response.data);
            return res.json(response.data);
        } catch (error) {
            next(error);
            console.error(error);
        }
    },

    getByCoord(req, res, next) {
        const { lat, long } = req.body;


    }
}