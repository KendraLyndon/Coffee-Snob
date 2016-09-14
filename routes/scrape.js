var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {

  //All the web scraping magic will happen here

  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function(error, response, html){
      // Check to make sure no errors occurred when making the request
    if(!error){
      // Then utilize cheerio library on the returned html which gives
      //us jQuery functionality
      var $ = cheerio.load(html);

      var json = {title: ""};

      $('.title_wrapper').filter(function() {
        var data = $(this);
        var title = data.children().first().text();
        json.title = title;
      })

    }
    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })
    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('check your console!')
  }) ;
});

module.exports = router;
