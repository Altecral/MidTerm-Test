var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employee'); // Make sure this line is present

var app = express();

// ... (other middleware setup and configuration)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeesRouter); // Use the employeesRouter here

// ... (error handling and other middleware setup)

module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employee'); // Make sure this line is present

var app = express();

// ... (other middleware setup and configuration)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeesRouter); // Use the employeesRouter here

// ... (error handling and other middleware setup)

module.exports = app;
