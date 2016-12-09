var express = require('express');
var session = require('express-session');
var router = express.Router();
var Users = require('../models/users');
var Validations = require('../helpers/validations');

router.get('/', function(req, res, next) {
  var userInfo = req.query;
  Users.find(userInfo).then(function(user){
    if(user){
      res.cookie('user_id',user.id);
      res.cookie('user_name',user.user_name);
      if(req.cookies.city){
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

router.post('/', function(req, res, next) {
  Users.findByEmail(req.body.email).then(function(user){
    if(user){
      res.redirect('/');
    } else {
      if(Validations.validateUser(user){
        Users.add(req.body).then(function(){
          Users.find(req.body).then(function(user){
            res.cookie('user_id',user.id);
            res.cookie('user_name',user.user_name);
            res.redirect('/');
          })
        })
      })
    }
  })
});

module.exports = router;
