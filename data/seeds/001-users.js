exports.seed = function(knex, Promise) {
  // Have knex-cleaner do not need truncate.
  // Deletes ALL existing entries and resets ids
      return knex('users').insert([
        {
          id:1,
          username: 'Erick',
          password: 'password',
          userType: 'Organizer',
        },
        {
          id:2,
          username: 'Jor',
          password: 'password123',
          userType: 'Tourist',
        }
      ]);
  
};