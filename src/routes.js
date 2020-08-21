const express =require('express');
const routes = express.Router();

const CityController = require('./controllers/CityController');

routes
    // .get('/test', CityController.test)
    .post('/name', CityController.getByName)
    .post('/coordinates', CityController.getByCoord);

module.exports = routes;