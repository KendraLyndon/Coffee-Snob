function addCafeToPage(place){
  console.log(place);

  var section = $('#selected-cafe-container'),
      name = document.createElement('h3'),
      infoList = document.createElement('ul'),
      hoursList = document.createElement('ul'),
      reviews = document.createElement('div'),
      address = document.createElement('li'),
      phone = document.createElement('li'),
      web = document.createElement('li'),
      price = document.createElement('li'),
      rating = document.createElement('li'),
      photo = document.createElement('img');

  $(section).empty();
  $(name).text(place.name);
  $(section).append(name);

  //if results came with photos, add one photo to the page
  if(place.photos){
    addSrc(place, photo);
    $(section).append(photo);
  }

  addToInfoList(place, address, phone, web, price, rating);

  //add opening hours of cafe
  place.opening_hours.weekday_text.forEach(function(day){
    var open = document.createElement('li');
    $(open).text(day);
    $(hoursList).append(open);
  });

  addReviews(place, reviews);

  $(infoList).append(address, phone, web, price, rating);
  $(section).append(infoList, hoursList, reviews);

  addCafeToForm(place);
}

function addToInfoList(place, address, phone, web, price, rating){
  $(address).text(place.formatted_address);
  $(phone).text(place.formatted_phone_number);
  $(web).text(place.website);
  $(price).text(place.price_level);
  $(rating).text(place.rating);
}

function addSrc(place, photo){
  var src = place.photos[0].getUrl({'maxWidth': 150, 'maxHeight': 150})
  $(photo).attr('src',src);
}

function addReviews(place, reviews){
  for(var i=0; i<3; i++){
    var review = document.createElement('p');
    $(review).text(place.reviews[i].text);
    $(reviews).append(review);
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
