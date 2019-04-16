
exports.seed = function(knex, Promise) {
      return knex('Trips').insert([
        {id: 1, name: 'Food Adventure in Texas', user_id: 1},
        {id: 2, name: 'Eating Vietnemese Food across the sates', user_id: 1},
        {id: 3, name: 'Hiking Catskills', user_id: 1}
      ]);
};
