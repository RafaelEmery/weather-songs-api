const axios = require('axios');

const api = axios.create({
    baseURL: 'api.openweathermap.org/data/2.5'
});

module.exports = api;