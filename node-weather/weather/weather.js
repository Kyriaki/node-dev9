const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/d4b8c0d79d3caaf64908cd0e8acc0ca8/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Erreur de connexion', null);
    } else {
      callback(null, body.currently.temperature);
    }
  });
};

module.exports = {
  getWeather
};
