$(document).ready(function(){
  var link = $('a'),
  button = $('.btn'),
  headerButton = $('.header-btn')
  link.on('mouseenter',function(){
    $(this).css('color','#B2417A');
    $(this).css('border-color','#B2417A');
  });
  link.on('mouseleave',function(){
    $(this).css('color','#eeeeee');
    $(this).css('border-color','#F2F2F2');
  })
  headerButton.on('mouseenter',function(){
    $(this).css('color','#B2417A');
  });
  headerButton.on('mouseleave',function(){
    $(this).css('color','#F2F2F2');
  })
  button.on('mouseenter',function(){
    $(this).css('background-color','#B2417A');
  });
  button.on('mouseleave',function(){
    $(this).css('background-color','#F2F2F2');
  })
})
