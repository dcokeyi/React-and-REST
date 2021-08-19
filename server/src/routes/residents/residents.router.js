const express = require('express');

const {httpGetResidents} = require('./residents.controller');

const residentsRouter = express.Router();

residentsRouter.get('/', httpGetResidents);

module.exports = residentsRouter;




