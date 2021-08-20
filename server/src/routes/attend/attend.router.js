const express = require('express');

const {httpAttendProgram} = require('./attend.controller');

const attendRouter = express.Router();

attendRouter.post('/', httpAttendProgram);

module.exports = attendRouter;