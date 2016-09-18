$(document).ready(function(){
  var link = $('a'),
      button = $('.btn'),
      headerButton = $('.header-btn'),
      loginForm = $('#login-form'),
      logIn = $('.log-in-btn'),
      signupForm = $('#signup-form'),
      signUp = $('.signup-btn'),
      title = $('.main-title');

  $(loginForm).hide();
  $(signupForm).hide();

  $(logIn).click(function(){
    $(signupForm).hide();
    $(loginForm).toggle();
    // $(loginForm).toggleClass('hidden');
    $(loginForm).addClass('user-form');
  })

  $(signUp).click(function(){
    $(loginForm).hide();
    $(signupForm).toggle();
    // $(signupForm).toggleClass('hidden');
    $(signupForm).addClass('user-form');
  })

  $(title).click(function(){
    window.location.href='/';
  })

  title.on('mouseenter',function(){
    $(this).css('color','#B2417A');
    $(this).css('border-color','#B2417A');
  });
  title.on('mouseleave',function(){
    $(this).css('color','#eeeeee');
    $(this).css('border-color','#F2F2F2');
  });

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
    $(this).css('background-color','#8C5A67');
  });
  button.on('mouseleave',function(){
    $(this).css('background-color','#59261B');
  })
})
