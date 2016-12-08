$(document).ready(function(){
  var loginForm = $('#login-form'),
      signupForm = $('#signup-form'),
      logIn = $('.log-in-btn'),
      signUp = $('.signup-btn');

//when login button is clicked, toggle show login form and make sure
//signup form is hidden
  $(logIn).click(function(){
    $(signupForm).addClass("hidden");
    $(loginForm).toggleClass("hidden");
  })

//when signup button is clicked, toggle show signup form and make sure
//login form is hidden
  $(signUp).click(function(){
    $(loginForm).addClass("hidden");
    $(signupForm).toggleClass("hidden");
  })

})
