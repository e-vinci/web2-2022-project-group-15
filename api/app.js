const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authsRouter = require('./routes/auths'); // login and register
const gameRouter=require('./routes/game');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auths', authsRouter); // login and register
app.use('/game',gameRouter);
module.exports = app;
