const express = require('express');

const {httpGetPrograms} = require('./program.controller');

const programRouter = express.Router();

programRouter.get('/', httpGetPrograms);

module.exports = programRouter;