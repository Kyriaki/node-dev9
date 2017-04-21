const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

var {Todo} = require('./models/Todo');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var app = express();
app.use(bodyParser.json()); // for parsing application/json


// GET /todos
app.get('/todos', (req, res) => {
  Todo.find().then((docs) => {
    res.status(200).send(docs);
  }, (err) => {
    res.status(400);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  // exercice : renvoyer la réponse au client
  var id = req.params.id;
  Todo.findById(id).then((doc) => {
    res.status(200).send(doc);
  }, (err) => {
    res.status(400);
  });
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
 var id = req.params.id;
 Todo.findByIdAndRemove(id).then((doc) => {
   res.status(200).send(doc);
 }, (err) => {
   res.status(400);
 });
});

// POST /todos
app.post('/todos', (req, res) => {

  var todo = new Todo(req.body);
  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (err) => {
    res.status(400);
  });

});

// PATCH /todos/:id
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Ressource non valide');
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({
    _id: id
  }, {$set: body}, {$new: true}).then((doc) => {

    if (!doc) return res.status(404).send();
    res.send(doc);

  }, (err) => {
    res.status(400).send();
  });


});



app.listen(3000, () => {
  console.log('Serveur sur port 3000');
})
