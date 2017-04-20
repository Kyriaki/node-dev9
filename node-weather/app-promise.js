const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
      a: {
        demand: true,
        alias: 'address',
        describe: 'Adresse dont on veut obtenir les coordonnées',
        string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

  // Exercice: afficher la température d'une adresse en chaînant deux promesses (axios)
  var addressEncoded = encodeURIComponent(argv.address);
  var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`;

  axios.get(geocodeUrl).then((res) => {
    var lat =res.data.results[0].geometry.location.lat;
    var lng = res.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/d4b8c0d79d3caaf64908cd0e8acc0ca8/${lat},${lng}`;
    return axios.get(weatherUrl);
  }).then((res) => {
    console.log(`Température pour l'adresse fournie ${res.data.currently.temperature}`);
  }).catch((err) => {
    console.log(err);
  });
