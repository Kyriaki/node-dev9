const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Erreur de connextion', err);
  console.log('Connexion réussie');

  var id = '58f9d6a3e4ede2c730170f0e';
  db.collection('Todos')
    .deleteOne({_id: new ObjectID(id)}, (err, result) => {
      if (err) return console.log('Erreur', err);
      console.log(JSON.stringify(result, undefined, 2));
    });

  db.close();
});
