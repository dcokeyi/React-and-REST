const express = require('express');

const {
    httpGetResidents,
    httpPostResidents
} = require('./residents.controller');

const residentsRouter = express.Router();

residentsRouter.get('/', httpGetResidents);
residentsRouter.post('/', httpPostResidents);

module.exports = residentsRouter;




