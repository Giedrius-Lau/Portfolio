//Configuration file

var mongoose = require('mongoose');

//adding promise
mongoose.Promise = global.Promise;
//connecting mongoose to db
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exoprts = {mongoose}