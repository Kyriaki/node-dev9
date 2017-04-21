const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: String,
  completed: Boolean,
  completedAt: Number
});

module.exports = {Todo}; // ES6
// équivaut à module.exports.Todo = Todo
