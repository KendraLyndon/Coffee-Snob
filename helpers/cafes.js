var http = require('http');
var request = require('request');
var Promise = require('promise');
// var Chains = require('../models/chains')
var chains = ['Starbucks','Tully','Peet','Dunkin','Caribou','McCafe',
'Costa Coffee', 'Tim Horton', 'Top Pot','The Coffee Bean & Tea Leaf',
'Dunn Bros', "Seattle's Best", 'Coffee Beanery', 'Biggby', 'Gloria Jean',
'McDonalds', 'Dutch Bros', 'Au Bon Pain', 'Second Cup', 'Gimme!', 'Lavazza',
'White Castle', 'DRNK', 'Bridgehead', 'Krispy Kreme', 'BeaverTails', 'Mister Donut',
'Panera Bread', 'Arby', 'Chick-fil-A', 'Pizza Hut', 'KFC', 'Applebee', 'Sonic',
'Olive Garden', "Chili's", 'Dairy Queen', 'IHOP', 'Denny', 'Outback Steakhouse',
'Red Lobster', "T.G.I. Friday's", '7-Eleven', 'Popeyes', 'Golden Corral', 'Cheesecake Factory',
'Panda Express', 'Little Caesars', "Carl's Jr", 'Ruby Tuesday', 'Whataburger', 'Mariott',
'Red Robin', 'Hilton', 'LongHorn Steakhouse', "Jimmy John's", 'Waffle House',
'Bob Evans', 'Five Guys', 'Sheraton', "Church's Chicken", 'Hooters', 'Holiday Inn',
'Quiznos', "Zaxby's", "Culver's", 'Bojangles', 'Papa Murphy', 'Carrabba',
'California Pizza Kitchen', 'In-N-Out', 'Hyatt', 'Costco', 'Wawa', 'Qdoba',
"CiCi's Pizza", "Friendly's Ice Cream", 'Baskin-Robbins', "Famous Dave's",
"Jason's Deli", 'El Pollo Loco', 'Del Taco', 'Target', 'Einstein Bros', 'Sbarro',
'Krystal', "Chuck E. Cheese's", "Cheddar's", 'Jamba Juice', 'Westin', 'Bonefish Grill',
'Alpine Bagels', 'Bagel Oasis', 'Barry Bagels', 'Cinnabon', 'Mrs. Fields',
"Wetzel's Pretzels", 'Corner Bakery', 'Perkins', 'Great Harvest', 'Atlanta Bread Company',
'La Brea', 'Big Apple Bagels', 'Yum-Yum Donuts', "LaMar's Donuts", "Noah's Bagels",
'House of Bread','Teavana','Argo','Barnes and Noble',"Specialty's Cafe & Bakery"];

module.exports = {
  bestCafeDetails: function(loc){
    return findNearbyCafes(loc)
    .then(function(places){
      var cafes = JSON.parse(places).results;
      console.log(cafes);
      var localCafes = filterChains(cafes);
      var bestCafes = getBestCafeIds(localCafes);

      return Promise.all([
        cafeDetails(bestCafes[0]),
        cafeDetails(bestCafes[1]),
        cafeDetails(bestCafes[2])
      ])
    }).catch(function(err){
      console.log(err);
    })
  }
}

function filterChains(cafes){
  return cafes.filter(function(cafe){
    return !chains.includes(cafe.name)
  })
}

function findNearbyCafes(loc){
  var parameters = {
    location:loc.latitude+','+loc.longitude,
    radius:500,
    type:'cafe',
    key:'AIzaSyB7YK-CrY9fCRFg7GhYoX-WpRO97zoOAYQ'
  };
  var options = {
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
    qs: parameters,
    headers: {
      'User-Agent': 'request'
    }
  };

  return new Promise(function (fulfill, reject){
    request(options, cb);
    function cb(err, res, body) {
      if (!err && res.statusCode == 200) {
        fulfill(body);
      } else {
        reject(err);
      }
    }
  });
}

function cafeDetails(id){
  var parameters = {
    placeid: id,
    key:'AIzaSyB7YK-CrY9fCRFg7GhYoX-WpRO97zoOAYQ'
  };
  var options = {
    url: 'https://maps.googleapis.com/maps/api/place/details/json',
    qs: parameters,
    headers: {
      'User-Agent': 'request'
    }
  };

  return new Promise(function (fulfill, reject){
    request(options, cb);
    function cb(err, res, body) {
      if (!err && res.statusCode == 200) {
        fulfill(body);
      } else {
        reject(err);
      }
    }
  });
}

function getBestCafeIds (cafes){
  var bestCafes = cafes.sort(function(a, b){
    return b.rating - a.rating;
  }).splice(0,3);

  return bestCafes.reduce(function(a,b){
    return a.concat(b.place_id)
  },[])
}

// function filterChains(cafes){
//   return new Promise(function (fulfill, reject){
//   Chains.all().then(
//
//       function cb(err, res, body) {
//         if (!err && res.statusCode == 200) {
//           fulfill(body);
//         } else {
//           reject(err);
//         }
//       }
//     });
//     function(chains){
//     var chainsArray = chains.map(function(chain){
//       return chain.name;
//     })
//     var localCafes = cafes.filter(function(cafe){
//       return !chainsArray.includes(cafe.name)
//     })
//     // console.log(cafes[0].name);
//
//   }).catch(function(err){
//     console.log(err);
//   })
// }
