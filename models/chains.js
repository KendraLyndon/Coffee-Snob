var knex = require('../db/knex');

module.exports = {
  all: function(){
    return knex('chains').select('name');
  },
  find: function(id){
    return knex('chains').where({'id':id}).first();
  },
  findByName: function(name){
    return knex('chains').where({'name':name}).first();
  }
  add: function(input){
    return knex('chains').insert({'name':input});
  },
  delete: function(id){
    return knex('chains').where({'id',id}).del();
  }
}
