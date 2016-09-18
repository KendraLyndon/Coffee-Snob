function addCafeToPage(place){
  console.log(place);
  updateDetails(place);
  addHours(place);
  addReviews(place);
  addCafeToForm(place);
}

function updateDetails(place){
  //if results came with photos, add one photo to the page
  if(place.photos){
    var src = place.photos[0].getUrl({'maxWidth': 390, 'maxHeight': 200})
    $('#selected-photo').attr('src',src);
  };

  $('#selected-name').text(place.name);
  $('#selected-phone').text(place.formatted_phone_number);
  $('#selected-address').text(place.formatted_address);
  $('#selected-web').text(place.website);
  $('#selected-price').text('price level: '+place.price_level);
  $('#selected-rating').text('rating: '+place.rating);
}

function addHours(place){
  $('#selected-hours').empty();
  place.opening_hours.weekday_text.forEach(function(day){
    var open = document.createElement('li');
    $(open).text(day);
    $('#selected-hours').append(open);
  });
}

function addReviews(place){
  $('#selected-reviews').empty();
  for(var i=0; i<3; i++){
    var review = document.createElement('p');
    $(review).text('"'+place.reviews[i].text+'"');
    $('#selected-reviews').append(review);
  }
}

function addCafeToForm(place){
  $("#cafe-name").val(place.name);
  $("#cafe-address").val(place.formatted_address);
  $("#cafe-phone").val(place.formatted_phone_number);
  $("#cafe-web").val(place.website);
  $("#cafe-price").val(place.price_level);
  $("#cafe-rating").val(place.rating);
  $("#cafe-monday").val(place.opening_hours.weekday_text[0]);
  $("#cafe-tuesday").val(place.opening_hours.weekday_text[1]);
  $("#cafe-wednesday").val(place.opening_hours.weekday_text[2]);
  $("#cafe-thursday").val(place.opening_hours.weekday_text[3]);
  $("#cafe-friday").val(place.opening_hours.weekday_text[4]);
  $("#cafe-saturday").val(place.opening_hours.weekday_text[5]);
  $("#cafe-sunday").val(place.opening_hours.weekday_text[6]);
}
