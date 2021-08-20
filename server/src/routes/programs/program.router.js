const express = require('express');

const {
    httpGetPrograms,
    httpPostPrograms
} = require('./program.controller');

const programRouter = express.Router();

programRouter.get('/', httpGetPrograms);
programRouter.post('/', httpPostPrograms)

module.exports = programRouter;