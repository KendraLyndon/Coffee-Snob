var express = require('express');
var session = require('express-session');
var router = express.Router();
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  Users.find(req.body).then(function(user){
    if(user){
      req.session.user_id = user.id;
      req.session.user_name = user.user_name;
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  })
});

router.post('/new', function(req, res, next) {
  Users.add(req.body).then(function(){
    Users.find(req.body).then(function(user){
      console.log(user);
      req.session.user_id = user.id;
      req.session.user_name = user.user_name;
      res.redirect('/');
    })
  })
});

module.exports = router;
