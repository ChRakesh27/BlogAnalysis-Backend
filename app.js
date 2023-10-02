const express = require('express')
const logger = require('morgan')

const globalErrorHandler = require('./middlewares/globalErrorHandler')

const blogRouter = require('./routes/blogs')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', blogRouter)
// catch 404 and forward to error handler
app.all('*', function (req, res) {
  res.status(404).json({
    error: "API not found",
  })
});

// error handler
app.use(globalErrorHandler);


module.exports = app