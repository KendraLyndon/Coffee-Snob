var map;
var geocoder;

function addMap(){
  geocoder = new google.maps.Geocoder();
  var cityInput = document.getElementById('city-input').innerHTML;
  var center;
  if(cityInput){
    createMapFromUserSearch(cityInput);
  } else {
    createMapFromGeolocation();
  }
}

function createMapFromUserSearch(cityInput){
  geocoder.geocode( { 'address': cityInput}, function(results, status) {
    if (status == 'OK') {
      createMapWithListeners(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })
}

function createMapFromGeolocation(){
  geoLocation.getLocation().then(function(position) {
    center = {lat: position.coords.latitude, lng: position.coords.longitude};
    createMapWithListeners(center);
    var citySearch = document.getElementById('city-submit');
    citySearch.addEventListener('click',function(){
      codeAddress();
    })
  }).fail(function(err) {
    center = {lat: 47.6104, lng: -122.2007};
    createMapWithListeners(center);
  });
}

function createMapWithListeners(center){
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    scrollwheel: true,
    zoom: 9
  });
  findCoffee(center, 9);
  addMapListeners();
}

var geoLocation = {
  getLocation: function() {
    var deferred = $.Deferred();
    if(navigator.geolocation) {
      // geo location is supported. Call navigator.geolocation.getCurrentPosition and :
      // - resolve the promise with the returned Position object, or
      // - reject the promise with the returned PositionError object, or
      // - time out after 5 seconds
      navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject, { timeout: 5000 });
    } else {
      //geo location isn't supported
      //Reject the promise with a suitable error message
      deferred.reject(new Error('Your browser does not support Geo Location.'));
    }
    return deferred.promise();
  }
}

function addMapListeners(){
  map.addListener('zoom_changed',function(){
    var currentCenter = JSON.parse(JSON.stringify(map.getCenter()));
    var zoom = map.getZoom();
    if(zoom > 8 && zoom < 19){
      findCoffee(currentCenter, zoom);
    }
  });
  map.addListener('dragend',function(){
    var currentCenter = JSON.parse(JSON.stringify(map.getCenter()));
    var zoom = map.getZoom();
    if(zoom > 8 && zoom < 19){
      findCoffee(currentCenter, zoom);
    }
  });
}

function codeAddress(address) {
  if(!address){
    address = document.getElementById('city').value;
  }
  geocoder.geocode( { 'address': address}, changeMapCenter)
}

function changeMapCenter(results, status) {
  if (status == 'OK') {
    map.setCenter(results[0].geometry.location);
    map.setZoom(15);
  }
}

function findCoffee(currentCenter,zoom){
  var radiiByZoom  = {
    9 : '40000', 10 : '30000', 11 : '20000', 12 : '10000', 13 : '6000',
    14 : '5000', 15 : '3500', 16 : '2000', 17 : '1500', 18 : '1000'
  },
  request = {
    location: new google.maps.LatLng(currentCenter.lat, currentCenter.lng),
    radius: radiiByZoom[zoom],
    types: ['cafe']
  },
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, processSearchResults);
}

function processSearchResults(results, status, pagination){
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      var placeId = results[i].place_id;
      addLocalCafe(place,placeId);
      if (pagination.hasNextPage) {
        pagination.nextPage();
      }
    }
  }
}

function addLocalCafe(place,placeId){
  if(!checkIfChain(place.name) && checkIfCafe(place.types)){
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: placeId,
      icon: 'images/coffee-cup.svg'
    });
    addInfoWindow(marker,place);
    addMarkerListeners(marker);
  }
}

function addInfoWindow(marker,place){
  marker.infowindow = new google.maps.InfoWindow({
    content : '<div class="info-window">'+
    '<h4>'+place.name+'</h4>'+
    '<p> rating : '+place.rating+'</p>'+
    '</div>'
  });
}

function addMarkerListeners(marker){
  marker.addListener('mouseover', function() {
    this.infowindow.open(map, this);
  });
  marker.addListener('mouseout', function() {
    this.infowindow.close(map, this);
  });
  marker.addListener('click', function() {
    getCoffeeDetails(this.title);
  });
}

function getCoffeeDetails(id){
  var request = {
    placeId : id
  }
  service = new google.maps.places.PlacesService(map);
  service.getDetails(request, function (place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      addCafeToPage(place);
    }
  })
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}
