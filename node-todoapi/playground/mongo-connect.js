const {MongoClient, ObjectID} = require('mongodb'); // ES6 deconstruction d'objet
// équivaut à:
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Erreur de connextion', err);
  console.log('Connexion réussie');

  // db.collection('Todos').insertOne({
  //   text: 'Sortir le chien',
  //   completed: false
  // }, (err, result) => {
  //   if (err) console.log('Erreur dans l\'insertion', err);
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // exercice
  // Ajouter trois utilisateurs dans une collection Users
  // chaque utilisateur aura un nom et un email
  db.collection('Users').insertMany([
    {name: 'luigi', email: 'lugi@test.fr'},
    {name: 'mario'},
    {name: 'antonio', email: 'antonio@test.fr', available: true}
  ], (err, result) => {
    if (err) console.log('Erreur dans l\'insertion', err);
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
