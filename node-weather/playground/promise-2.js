const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var addressEncoded = encodeURIComponent(address);
    request(
      {
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject('Connexion au serveur impossible');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Aucun résultat pour l\'adresse fournie');
        } else if(body.status === 'OK') {
          resolve({
            address: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lng: body.results[0].geometry.location.lng
          });
        }
      }
    );

  });
}

geocodeAddress('153 Boulevard de Bretagne').then((res) => {
  console.log('latitude', res.lat);
  console.log('longitude', res.lng);
}, (err) => console.log(err));
