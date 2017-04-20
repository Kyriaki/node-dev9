const expect = require('expect'); // bibliothèque d'assertions
const utils = require('./utils');

it('Doit renvoyer la somme de deux nombres', () => {
  var res = utils.add(4, 3);
  expect(res).toBe(7).toBeA('number');
});

it('Doit renvoyer de manière async la somme de deux nombres', (done) => {
  utils.addAsync(4, 3, () => {
    expect(res).toBe(7).toBeA('number');
  });
  done();
});

it('Doit renvoyer le carré d\'un nombre', () => {
  var res = utils.square(4);
  expect(res).toBe(16);
});
