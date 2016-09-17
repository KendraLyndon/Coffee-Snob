var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: 'AIzaSyB7YK-CrY9fCRFg7GhYoX-WpRO97zoOAYQ',
  formatter: null
};

var geocoder = NodeGeocoder(options);

module.exports = geocoder;
