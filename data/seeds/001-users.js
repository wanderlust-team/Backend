exports.seed = function (knex, Promise){
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
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
    });
};
