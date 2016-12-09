module.exports = {
  validateUser: function(user){
    if(validateEmail(user.email)){
      return true;
    }
    return false;
  },
  validateEmail: function(email){
    if(!email.includes('@')){
      return false;
    }
  },
  validateUserName: function(name){

  },
  validatePassword: function(password){

  }
}
