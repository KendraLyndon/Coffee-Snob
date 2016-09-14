exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({id: 1001, user_name: 'kendralyndon', email: 'k@l.com', password: '123password', created_at: '2016-04-01', updated_at: '2016-04-02'})
  ]);
};
