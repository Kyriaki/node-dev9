const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Erreur de connextion', err);
  console.log('Connexion réussie');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Erreur', err);
  // });

  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Erreur', err);
  // });

  // var id = '58f9d6a3e4ede2c730170f0e';
  // db.collection('Todos').find({_id: new ObjectID(id)}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Erreur', err);
  // });

  db.collection('Todos').find({completed: false}).count().then((count) => {
    console.log('Nombre de documents trouvés: ', count);
  }, (err) => {
    console.log('Erreur', err);
  });

  db.close();
});
