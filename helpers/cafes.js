var http = require('http');
var request = require('request');
var Promise = require('promise');

module.exports = {
  bestCafeDetails: function(loc){
    return findNearbyCafes(loc)
    .then(function(places){
      var bestCafeIds = getBestCafeIds(JSON.parse(places).results);

      return Promise.all([
        cafeDetails(bestCafeIds[0]),
        cafeDetails(bestCafeIds[1]),
        cafeDetails(bestCafeIds[2])])
    })
  }
}

function findNearbyCafes(loc){
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
}

function cafeDetails(id){
  var parameters = {
    placeid: id,
    key:'AIzaSyB7YK-CrY9fCRFg7GhYoX-WpRO97zoOAYQ'
  };
  var options = {
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
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
}

function getBestCafeIds (cafes){
  var bestCafes = cafes.sort(function(a, b){
    return b.rating - a.rating;
  }).splice(0,3);

  return bestCafes.reduce(function(a,b){
    return a.concat(b.place_id)
  },[])
}
