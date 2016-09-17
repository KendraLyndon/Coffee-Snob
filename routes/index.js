var express = require('express');
var router = express.Router();
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
      cafes.bestCafeDetails(location[0]).then(results => {
        var bestCafes = results.map(function(cafe){
          return JSON.parse(cafe).result;
        });
        var schedules = bestCafes.map(function(cafe){
          return cafe.opening_hours;
        });
        console.log(schedules);
        res.render('search',{
          city:city,
          bestCafes:bestCafes,
          schedules:schedules,
          loggedIn: true,
          userName: 'Kendra'
        })
      }, reason => {
        console.log(reason)
      });
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

module.exports = router;
