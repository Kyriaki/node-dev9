const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//var command = process.argv[2];
var command = yargs.argv._[0];

var titleOptions = {
  describe: 'Titre de la note',
  alias: 't',
  required: true
};

var bodyOptions = {
  describe: 'Contenu de la note',
  alias: 'b',
  required: true
};

// methods yargs (command, help, alias)
const argv = yargs
.command('add', 'Ajoute une note', {
  title: titleOptions,
  body: bodyOptions
})
.command('read', 'Lit une note', {
  title: titleOptions,
})
.command('list', 'Affiche la liste des notes')
.command('remove', 'Supprime une note', {
  title: titleOptions
})
.help()
.argv;


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note ajoutée avec succès: ');
    notes.logNote(note);
  } else {
    console.log('Ce titre existe déjà');
  }
} else if (command === 'list') {
  // afficher la liste des notes
  var list = notes.listNotes();
  if (list.length > 0) {
    console.log('--- Liste des notes ---');
    list.forEach((note) => notes.logNote(note));
  } else {
    console.log('Liste vide');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Aucune note ne correspond à ce titre');
  }
} else if (command === 'remove') {
  var note = notes.removeNote(argv.title);
  var message = (note) ? 'Note supprimé' : 'La note n\'existe pas';
  console.log(message);
} else {
  console.log('Commande inconnue');
}
