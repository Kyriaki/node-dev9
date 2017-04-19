const fs = require('fs');

var fetchNotes = () => {
  // bloc try pour éviter l'erreur du JSON.parse sur un fichier vide
  try {
    var notes = fs.readFileSync('notes-data.json');
    return JSON.parse(notes); // transformation du string (json) en objets
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };

  //ne pas enregistrer deux fois le même titre
  var duplicatedNotes = notes.filter((elem) => elem.title === note.title);

  // si la tableau des doublons est vide, je peux enregistrer la note
  if (duplicatedNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    return undefined;
  }

};

var listNotes = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((item) => item.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var originalNotes = fetchNotes();
  var notes = originalNotes.filter(note => note.title !== title);
  saveNotes(notes);
  return originalNotes.length !== notes.length;
};

var logNote = (note) => {
  console.log('----------');
  console.log(`Titre: ${note.title}`);
  console.log(`Contenu: ${note.body}`);
  console.log('----------');
};

module.exports = {
  addNote,
  listNotes,
  getNote,
  removeNote,
  logNote
};
