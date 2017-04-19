const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

// geocode.geocodeAddress(argv.address) // sans callback

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(results.lat, results.lng, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`La température actuelle pour cette adresse est de ${res}`);
      }
    });
  }
});
