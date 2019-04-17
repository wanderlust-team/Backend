const faker = require('faker');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("Trips")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Trips").insert([
        {
          tripName: "Hiking In The Jungle",
          location: "Panama",
          userId: 1,
          description: "Come join us on an amazing adventure through the Chagras jungle!",
          startDate: 20190416,
          endDate: 20190418
        },
        {
          tripName: "Swim On The Nile",
          location: "Egypt",
          userId: 2,
          description: "Ever wanted to swim on the longest river? Now is your chance!",
          startDate: 20190416,
          endDate: 20190418
        },
        {
          tripName: "Camping Under The Stars",
          location: faker.address.country(),
          userId: 4,
          description: faker.lorem.paragraph(),
          startDate: 20190416,
          endDate: 20190418
        },
        {
          tripName: "Hang Out and Chill Out",
          location: faker.address.country(),
          userId: 6,
          description: faker.lorem.paragraph(),
          startDate: 20190416,
          endDate: 20190418
        },
        {
          tripName: "Monkey Around",
          location: faker.address.country(),
          userId: 3,
          description: faker.lorem.paragraph(),
          startDate: 20190416,
          endDate: 20190418
        },
        {
          tripName: "Sightseeing While Seeing Sights",
          location: faker.address.country(),
          userId: 5,
          description: faker.lorem.paragraph(),
          startDate: 20190416,
          endDate: 20190418
        },
      ]);
    });
};