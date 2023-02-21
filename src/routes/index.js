const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries= require("./routeCountries.js");
const activities= require("./routeActivities.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use ('/countries', countries);




module.exports = router;