var express = require('express');
var router = express.Router();
var geocoder = require('../helpers/geocoder');
var cafes = require('../helpers/cafes');
var Schedules = require('../models/schedules');
var Favorites = require('../models/favorites');

router.get('/', function(req, res, next) {
  if(req.cookies.user_id){
    var user = Number(req.cookies.user_id);
    Favorites.findByUser(user)
    .then(function(favorites){
      res.render('favorites',{
        loggedIn:true,
        path:'fav',
        userName: req.cookies.user_name,
        favorites: favorites,
        city: req.cookies.city
      })
    })
  } else {
    res.redirect('/')
  }
});

router.post('/', function(req, res, next) {
  var userId = Number(req.cookies.user_id);
  Schedules.add(req.body)
  .then(function(){
    Schedules.findLastestCreated()
    .then(function(schedule){
      var input = req.body;
      input.user_id = userId;
      input.schedule_id = schedule.id;
      input.price_level = Number(req.body.price_level).toFixed(1);
      input.rating = Number(req.body.rating).toFixed(1);
      Favorites.add(input)
      .then(function(){
        res.redirect(`/search?city=${req.cookies.city}`)
      })
    })
  })
})

router.post('/delete', function(req, res, next) {
  var id = Number(req.body.fav_id);
  Favorites.delete(id)
  .then(function(){
    res.redirect('/favorites')
  })
});

module.exports = router;
