$(document).ready(function(){
  var selectedCafe = $('#selected-cafe-container');
  var reviews = $('.reviews');
  var hours = $('.cafe-hours');
  var hoursButton = $('.expand');

  $(selectedCafe).hide();
  $(reviews).hide();
  $(hours).hide();

  $(hoursButton).click(function(){
    $(this).next().slideToggle();
  })
})
