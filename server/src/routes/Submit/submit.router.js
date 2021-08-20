const express = require('express');

const {
    httpPostGit
} = require('./submit.controller');

const submitRouter = express.Router();

submitRouter.post('/', httpPostGit);

module.exports = submitRouter;