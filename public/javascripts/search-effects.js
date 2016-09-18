$(document).ready(function(){
  var selectedCafe = $('#selected-cafe-container');
  var hours = $('.best-cafe-hours');
  var hoursButton = $('.expand-hours');

  $(selectedCafe).hide();
  $(hours).hide();

  $(hoursButton).click(function(){
    $(this).next().slideToggle();
  })
})
