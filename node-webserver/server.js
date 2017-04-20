const fs = require('fs');

const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('maj', (text) => {
  return text.toUpperCase();
});

app.use(express.static(__dirname + '/public'));

// middleware destiné à enregistrer des infos dans une fichier log
// le middleware s'intercale entre la requête et la réponse
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) console.log('Impossible d\écrire dans le fichier');
  });
  next();
});

app.get('/', (req, res) => {
  //res.send('Hello');
  res.send({
    name: 'Paolo',
    age: 21
  });

});

app.get('/about', (req, res) => {
  //res.send('<p><em>About Page</em></p>');
  res.render('about', {
    title: 'Page à propos',
    image: 'loup.jpg',
    users: [
      {name: 'Luigi', number: 3},
      {name: 'Mario', number: 7},
      {name: 'Fabbio', number: 9}
    ]
  });
});

// Exo: Ajouter une route /bad => renvoie un objet contenant un message d'erreur (au choix)
app.get('/bad', (req, res) => {
  //res.send({errorMessage: 'Fausse route'});
  // renvoyer un rendu (template), affichant:
  // un titre de page, une balise H1, un pied de page (partials/footer.hbs)
  res.render('bad', {
    title: 'Mauvaise page',
    h1: 'Très mauvais'
  });
});



app.listen(3000, () => {
  console.log('Serveur écoutant le port 3000');
});
