var selectedCafe = $('#selected-cafe-container'),
    reviews = $('.reviews'),
    hours = $('.cafe-hours'),
    expandButton = $('.expand');

//show the hours or the reviews if corresponding button is clicked
$(expandButton).click(function(){
  $(this).next().slideToggle();
})

function toggleCafe(place){
  if(place.name !== $('#selected-name').text()){
    $(selectedCafe).slideDown();
  } else if(place.name === $('#selected-name').text()){
    $(selectedCafe).slideToggle();
  }
};
