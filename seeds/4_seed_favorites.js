exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('favorites').insert({
      id: 1001,
      user_id:1001,
      schedule_id:1001,
      name:'The Georgian',
      address:'411 University St, Seattle, WA 98101, USA',
      phone:'(206) 621-7889',
      website:'http://www.fairmont.com/seattle/dining/thegeorgian/',
      price_level:3,
      rating:4.5,
      created_at: '2016-04-01', updated_at: '2016-04-02'
    }),
    knex('favorites').insert({
      id: 1002,
      user_id:1001,
      schedule_id:1002,
      name:'Local 360',
      address:'2234 1st Ave, Seattle, WA 98121, USA',
      phone:'(206) 441-9360',
      website:'http://www.local360.org/',
      price_level:2,
      rating:4,
      created_at: '2016-04-01', updated_at: '2016-04-02'
    })
  ]);
};
