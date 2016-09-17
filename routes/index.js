var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
var geocoder = require('../helpers/geocoder');
var cafes = require('../helpers/cafes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {loggedIn: false, userName: null});
});

router.get('/search', function(req, res, next) {

  var city = req.query.city;

  geocoder.geocode(city)
    .then(function(location) {
      cafes.getCafes(location[0])
      .then(function(places) {
        var cafes = JSON.parse(places).results;

        res.render('search',{
                    city:city,
                    topCafes:getTopCafes(cafes),
                    loggedIn: true,
                    userName: 'Kendra'
        })
      })
      .catch(function(err){
        console.log(err);
      })
    })
    .catch(function(err) {
      console.log(err);
    });

});

router.post('/search', function(req, res, next) {
  res.render('search');
});

router.get('/favorites', function(req, res, next) {
  res.render('favorites');
});

// router.get('/topCities', function(req, res, next) {
//   res.render('favorites');
// });

module.exports = router;

function getTopCafes(cafes){
  return cafes.sort(function(a, b){
    return b.rating - a.rating;
  }).splice(0,3)
}
