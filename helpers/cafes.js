var http = require('http');
var request = require('request');
var Promise = require('promise');

module.exports = {
  getCafes: function(loc){
    var parameters = {
      location:loc.latitude+','+loc.longitude,
      radius:500,
      type:'cafe',
      key:'AIzaSyB7YK-CrY9fCRFg7GhYoX-WpRO97zoOAYQ'
    };
    var options = {
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      qs: parameters,
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise(function (fulfill, reject){
      request(options, cb);
      function cb(err, res, body) {
        if (!err && res.statusCode == 200) {
          fulfill(body);
        } else {
          reject(err);
        }
      }
    });
  },
  returnTopCafes: function(cafes){
    console.log(cafes);
  }
}
