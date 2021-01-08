const { Router } =  require('express');
const ClockController = require('./controller/ClockController');


const routes = Router();

routes.get('/api/rest/clock/:hour/:minute?', ClockController.middlewareValidateHourAndMinutes, ClockController.AngleBetweenHourAndMinute)


module.exports = routes;