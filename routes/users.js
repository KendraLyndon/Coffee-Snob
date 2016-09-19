var express = require('express');
var session = require('express-session');
var router = express.Router();
var Users = require('../models/users');

router.post('/', function(req, res, next) {
  Users.find(req.body).then(function(user){
    console.log(req.body);
    if(user){
      res.cookie('user_id',user.id);
      res.cookie('user_name',user.user_name);
      if(req.cookies.city){
        console.log(req.cookies.city);
        res.redirect(`/search?city=${req.cookies.city}`)
      }
      else {
        res.redirect('/');
      }
    } else {
      res.redirect('/');
    }
  })
});

router.post('/new', function(req, res, next) {
  Users.add(req.body).then(function(){
    Users.find(req.body).then(function(user){
      res.cookie('user_id',user.id);
      res.cookie('user_name',user.user_name);
      res.redirect('/');
    })
  })
});

module.exports = router;
