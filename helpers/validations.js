module.exports = {
  validateUser: function(user){
    return true;
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
