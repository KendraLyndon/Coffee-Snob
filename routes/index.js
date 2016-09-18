var express = require('express');
var router = express.Router();
var geocoder = require('../helpers/geocoder');
var cafes = require('../helpers/cafes');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.user_id){
    res.render('index', {loggedIn: true, userName: req.cookies.user_name});
  } else {
    res.render('index', {loggedIn: false, userName: null});
  }
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
        res.cookie('city',city);
        if(req.cookies.user_id){
          res.render('search',{
            city:city,
            bestCafes:bestCafes,
            schedules:schedules,
            loggedIn: true,
            userName: req.cookies.user_name
          })
        } else {
          res.render('search',{
            city:city,
            bestCafes:bestCafes,
            schedules:schedules,
            loggedIn: false,
            userName: null
          })
        }
      }, reason => {
        console.log(reason)
      });
    })
    .catch(function(err) {
      console.log(err);
    });
});

router.get('/logout', function(req, res, next) {
  res.clearCookie("user_id");
  res.clearCookie("user_name")
  res.redirect('/');
});

router.get('/about', function(req, res, next) {
  if(req.cookies.user_id){
    res.render('about', {loggedIn: true, userName: req.cookies.user_name});
  } else {
    res.render('about', {loggedIn: false, userName: null});
  }
});

router.get('/contact', function(req, res, next) {
  if(req.cookies.user_id){
    res.render('contact', {loggedIn: true, userName: req.cookies.user_name});
  } else {
    res.render('contact', {loggedIn: false, userName: null});
  }
});

module.exports = router;
