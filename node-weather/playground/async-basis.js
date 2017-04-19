console.log('Démarrage de l\'application');

setTimeout(() => {
  console.log('Premier setTimeout');
}, 2000);

setTimeout(() => {
  console.log('Deuxième setTimeout');
}, 0);

console.log('Fin de l\'application');
