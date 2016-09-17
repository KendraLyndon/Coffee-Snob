var knex = require('../db/knex');

module.exports = {
  find: function(input){
    console.log(input.userName);
    return knex('users').where({'user_name':input.user_name,
                                'password':input.password
                              }).first();
  },
  add: function(input){
    return knex('users').insert({
      'user_name':input.user_name,
      'email':input.email,
      'password':input.password
    });
  }
}
