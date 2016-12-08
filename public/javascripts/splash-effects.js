$(document).ready(function(){
  var loginForm = $('#login-form'),
      signupForm = $('#signup-form'),
      logIn = $('.log-in-btn'),
      signUp = $('.signup-btn');

//when login button is clicked, show login form and make sure
//signup form is hidden
  $(logIn).click(function(){
    $(signupForm).css("display","none");
    if($(loginForm).css("display")==="none"){
      $(loginForm).css("display", "flex");
    } else {
      $(loginForm).css("display", "none");
    }
  })

//when login button is clicked, show login form and make sure
//signup form is hidden
  $(signUp).click(function(){
    $(loginForm).css("display","none");
    if($(signupForm).css("display")==="none"){
      $(signupForm).css("display", "flex");
    } else {
      $(signupForm).css("display", "none");
    }
  })

})
