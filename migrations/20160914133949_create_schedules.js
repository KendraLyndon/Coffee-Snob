exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedules', function(table){
    table.increments();
    table.string('monday');
    table.string('tuesday');
    table.string('wednesday');
    table.string('thursday');
    table.string('friday');
    table.string('saturday');
    table.string('sunday');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schedules');
};
