require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const path = require('path');


const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login')
const usersRouter = require('./routes/users');
const restoRouter = require('./routes/restos');
const tableRouter = require('./routes/tables');
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders');

require('./config/connexion')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/connexion', loginRouter)
app.use('/users', usersRouter);
app.use('/restaurant', restoRouter);
app.use('/table', tableRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter)

module.exports = app;
