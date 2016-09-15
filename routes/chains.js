var express = require('express');
var router = express.Router();
var Chains = require('../models/chains')

/* GET home page. */
router.get('/', function(req, res, next) {
  Chains.all().then(function(results){
    res.json(results);
  })
});

module.exports = router;
