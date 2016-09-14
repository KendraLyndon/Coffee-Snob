$(document).ready(function(){
  var link = $('a'),
  button = $('.btn');
  link.on('mouseenter',function(){
    $(this).css('color','#B2417A');
    $(this).css('border-color','#B2417A');
  });
  link.on('mouseleave',function(){
    $(this).css('color','#eeeeee');
    $(this).css('border-color','#eeeeee');
  })
  button.on('mouseenter',function(){
    $(this).css('background-color','#B2417A');
  });
  button.on('mouseleave',function(){
    $(this).css('background-color','#eeeeee');
  })
})
