var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/search', function(req, res, next) {
  if(req.query.city){
    res.render('search',{city:req.query.city});
  } else{
    res.render('search');
  }
});

router.post('/search', function(req, res, next) {
  res.render('search');
});

module.exports = router;
