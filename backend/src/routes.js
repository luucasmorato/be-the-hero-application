const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//login
routes.post('/sessions', SessionController.create);

//create ong
routes.post('/ongs', OngController.create);

//list ongs
routes.get('/ongs', OngController.index);

//create incident
routes.post('/incidents', IncidentsController.create);

//list
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);

//delete incident
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;