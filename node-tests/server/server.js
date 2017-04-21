const express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('coucou');
});

app.get('/users', (req, res) => {
  res.send([
    {id: 1, name: 'Leonardo'},
    {id: 2, name: 'Giorgio'},
    {id: 3, name: 'Gianluigi'}
  ]);
});

app.listen(3000, () => {
  console.log('Serveur sur port 3000');
});

module.exports.app = app;
