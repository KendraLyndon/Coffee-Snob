var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {loggedIn: false, userName: null});
});

router.get('/search', function(req, res, next) {
  if(req.query.city){
    res.render('search',{city:req.query.city,
                        loggedIn: true,
                        userName: 'Kendra'});
  } else{
    res.render('search');
  }
});

router.post('/search', function(req, res, next) {
  res.render('search');
});

router.get('/favorites', function(req, res, next) {
  res.render('favorites');
});

module.exports = router;
