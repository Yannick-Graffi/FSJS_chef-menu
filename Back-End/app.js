var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const toConnect = require('./config/connexion')
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const restoRouter = require('./routes/restos');
const tableRouter = require('./routes/tables');
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders');


toConnect()

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/restaurant', restoRouter);
app.use('/table', tableRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter)

module.exports = app;
