exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('schedules').insert({
      id: 1001,
      monday:'6:30 AM – 2:30 PM',
      tuesday:'6:30 AM – 2:30 PM',
      wednesday:'6:30 AM – 2:30 PM',
      thursday:'6:30 AM – 2:30 PM',
      friday:'6:30 AM – 2:30 PM',
      saturday:'7:00 AM – 2:30 PM',
      sunday:'7:00 AM – 2:30 PM',
      created_at: '2016-04-01', updated_at: '2016-04-02'
    }),
    knex('schedules').insert({
      id: 1002,
      monday:'9:00 AM – 10:00 PM',
      tuesday:'9:00 AM – 10:00 PM',
      wednesday:'9:00 AM – 10:00 PM',
      thursday:'9:00 AM – 10:00 PM',
      friday:'9:00 AM – 11:00 PM',
      saturday:'9:00 AM – 11:00 PM',
      sunday:'9:00 AM – 10:00 PM',
      created_at: '2016-04-01', updated_at: '2016-04-02'
    })
  ]);
};
