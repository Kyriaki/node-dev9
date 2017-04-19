const request = require('request');

var geocodeAddress = (address, callback) => {
  // problèmes avec accents, etc., si pas encodée
  var addressEncoded = encodeURIComponent(address);

  request(
    {
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('Connexion au serveur impossible', null);
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Aucun résultat pour l\'adresse fournie', null);
      } else if(body.status === 'OK') {
        callback(null, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    }
  );
}

module.exports = {
  geocodeAddress
};
