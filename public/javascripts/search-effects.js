$(document).ready(function(){
  var selectedCafe = $('#selected-cafe-container');
  var selectedReviews = $('#selected-reviews');
  var hours = $('.cafe-hours');
  var hoursButton = $('.expand');

  $(selectedCafe).hide();
  $(selectedReviews).hide();
  $(hours).hide();

  $(hoursButton).click(function(){
    $(this).next().slideToggle();
  })
})
