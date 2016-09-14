exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('chains').del(),
    knex('users').del(),
    knex('favorites').del(),
    knex('schedules').del()
  ])
};
