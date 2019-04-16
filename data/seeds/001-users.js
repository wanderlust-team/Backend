exports.seed = function(knex, Promise) {
  // Have knex-cleaner do not need truncate.
  // Deletes ALL existing entries and resets ids
      return knex("users").insert([
        {
          username: "Erick",
          password: "password",
          userType: "Organizer",
        },
        {
          username: "Jor",
          password: "password123",
          userType: "Tourist",
        }
      ]);
  
};