const express = require('express');

const {httpGetToken} = require('./token.controller');

const tokenRouter = express.Router();

tokenRouter.post('/', httpGetToken);

module.exports = tokenRouter;