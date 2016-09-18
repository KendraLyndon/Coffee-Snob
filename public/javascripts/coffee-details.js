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
  $("input.name").val(place.name);
  $("input.address").val(place.formatted_address);
  $("input.phone").val(place.formatted_phone_number);
  $("input.web").val(place.website);
  $("input.price").val(place.price_level);
  $("input.rating").val(place.rating);
  $("input.monday").val(place.opening_hours.weekday_text[0]);
  $("input.tuesday").val(place.opening_hours.weekday_text[1]);
  $("input.wednesday").val(place.opening_hours.weekday_text[2]);
  $("input.thursday").val(place.opening_hours.weekday_text[3]);
  $("input.friday").val(place.opening_hours.weekday_text[4]);
  $("input.saturday").val(place.opening_hours.weekday_text[5]);
  $("input.sunday").val(place.opening_hours.weekday_text[6]);
}
