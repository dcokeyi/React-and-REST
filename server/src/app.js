const express = require('express');

const cors = require('cors');
const morgan = require('morgan');

const tokenRouter = require('./routes/token/token.router');
const residentsRouter = require('./routes/residents/residents.router');
const programRouter = require('./routes/programs/program.router');
const attendRouter = require('./routes/attend/attend.router')
const submitRouter = require('./routes/Submit/submit.router')

const app = express();


app.use(cors());

app.use(morgan('combined'));

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/token',tokenRouter);
app.use('/residents', residentsRouter)
app.use('/programs', programRouter)
app.use('/attend', attendRouter)
app.use('/submit', submitRouter)

module.exports = app