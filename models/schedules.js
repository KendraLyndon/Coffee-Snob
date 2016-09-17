var knex = require('../db/knex');

module.exports = {
  all: function(input){
    return knex('schedules').select();
  },
  find: function(id){
    return knex('schedules').where({'id':id}).first();
  },
  add: function(input){
    return knex('schedules').insert({
      'monday':input.monday,
      'tuesday':input.tuesday,
      'wednesday':input.wednesday,
      'wednesday':input.wednesday,
      'thursday':input.thursday,
      'friday':input.friday,
      'saturday':input.saturday,
      'sunday':input.sunday
    });
  },
  delete: function(id){
    return knex('schedules').where({'id':id}).del();
  }
}
