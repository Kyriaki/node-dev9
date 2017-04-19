// pour Démarrer en mode debug
// node debug playground/json.js
// n + entrée => passe à la prochaine instruction
// c + entrée => continue l'execution jusqu'au prochain point
// d'arrêt
// repl + entrée : affiche un prompt node pour l'exploration
// des variables

// Alternative graphique : Node Inspector (chrome)
// en cours de mise à jour (avril 2017)

var o = {
  name: 'Paolo',
  age: 21
};

console.log(o)
console.log(typeof o); // object

var oStringified = JSON.stringify(o);

debugger; // breakpoint

console.log(oStringified)
console.log(typeof oStringified); // string

var oStringifiedParsed = JSON.parse(oStringified);

debugger; // breakpoint

console.log(oStringifiedParsed)
console.log(typeof oStringifiedParsed); // object
