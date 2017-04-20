var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('Les arguments doivent être des nombres');
      }
    });
  });
};

// asyncAdd(4, '9').then((res) => {
//   //console.log(res);
//   return asyncAdd(res, 12);
// }, (err) => {
//   console.log(err);
// }).then((res) => {
//   console.log(res); // 25
// }, (err) => {
//   console.log(err);
// });

// catch 'attrape' l'erreur dans la chaîne et stoppe l'éxécution en chaîne
// per me : Yassine mixeur
asyncAdd(4, '9').then((res) => {
  return asyncAdd(res, 12);
}).then((res) => {
  console.log(res); // 25
}).catch((err) => {
  console.log(err);
});

// var calcul = asyncAdd(45, 78);
// calcul.then((res) => {
//   console.log(res);
// });


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promesse remplie');
//     resolve('Promesse remplie 2');
//     //reject('Promesse non tenue');
//   }, 1500)
// });
//
// somePromise.then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// });
