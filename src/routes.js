const express = require('express');

// const Enquete = require('./models/Enquete')
// const authMiddleware = require('./middlewares/auth')
// const AuthController = require('./controllers/AuthController');
// const CellController = require('./controllers/CellController');
//const FunctionController = require('./controllers/FunctionUserController');
//const UserController = require('./controllers/UserController');
const ConversionController = require('./controllers/ConversionController');

const routes = express.Router();

/* ROTAS SEM TOKEN */
// routes.post('/signin', AuthController.store);
routes.post('/conversion', ConversionController.store);
routes.get('/teste', ConversionController.teste);

/* ROTAS COM TOKEN */
// routes.use(authMiddleware)
//routes.post('/users', UserController.store);
// routes.post('/cells', CellController.store);

// routes.get('/cells', CellController.index);



module.exports =  routes;