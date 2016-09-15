var knex = require('../db/knex');

module.exports = {
  all: function(){
    return knex('chains').select('name');
  }
}
