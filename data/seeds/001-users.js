exports.seed = function (knex, Promise) {
  // Have knex-cleaner do not need truncate.
  // Deletes ALL existing entries and resets ids
  return knex("users").insert([
    {
      username: "Erick",
      password: "password",
      email: "email@email.net",
      userType: "Organizer",
    },
    {
      username: "Jor",
      password: "password123",
      email: "email@email.org",
      userType: "Tourist",
    }
  ]);
}
