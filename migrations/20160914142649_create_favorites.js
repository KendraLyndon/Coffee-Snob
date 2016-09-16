exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', function(table){
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('schedule_id').references('schedules.id');
    table.string('name');
    table.string('address');
    table.string('phone');
    table.string('website');
    table.decimal('price_level');
    table.decimal('rating');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorites');
};
