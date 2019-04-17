var faker = require('faker');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Erick",
          password: "password",
          email: "email@email.net",
          guide: true,
        },
        {
          username: "Jor",
          password: "password123",
          email: "email@email.org",
          guide: true,
        },
        {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
          guide: faker.random.boolean(),
        },
        {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
          guide: faker.random.boolean(),
        },
        {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
          guide: faker.random.boolean(),
        },
        {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
          guide: faker.random.boolean(),
        },
      ]);
    });
};
