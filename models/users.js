var knex = require('../db/knex');

module.exports = {
  all: function(input){
    return knex('users').select();
  },

  find: function(input){
    return knex('users').where({'user_name':input.user_name,
                                'password':input.password
                              }).first();
  },

  findByEmail: function(email){
    return knex('users').where({'email':email}).first();
  },

  findById: function(id){
    return knex('users').where({'id':id}).first();
  },

  add: function(input){
    return knex('users').insert({
      'user_name':input.user_name,
      'email':input.email,
      'password':input.password
    });
  },

  delete: function(id){
    return knex('users').where({'id':id}).del();
  }
}
