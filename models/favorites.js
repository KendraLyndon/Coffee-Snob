var knex = require('../db/knex');

module.exports = {
  all: function(input){
    return knex('favorites').select();
  },
  find: function(id){
    return knex('favorites').where({'id':id}).first();
  },
  add: function(input){
    return knex('favorites').insert({
      'schedule_id':input.schedule_id,
      'name':input.name,
      'address':input.address,
      'phone':input.phone,
      'website':input.website,
      'price_level':input.price_level,
      'rating':input.rating
    });
  },
  delete: function(id){
    return knex('favorites').where({'id':id}).del();
  }
}
