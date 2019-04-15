exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("users")
    .truncate()
    .then(function() {
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
    });
};