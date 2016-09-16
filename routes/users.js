var express = require('express');
var session = require('express-session');
var router = express.Router();

var Users = require('../models/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  Users.find(req.body).then(function(user){
    req.session('user_id',user.id);
    // console.log(user.id);
    res.redirect('/search');
  })
});

router.post('/new', function(req, res, next) {
  Users.add(req.body).then(function(){
    Users.find(req.body).then(function(user){
      console.log(user);
      res.redirect('/search');
    })
  })
});

module.exports = router;
