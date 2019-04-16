exports.seed = function (knex, Promise){
  // Deletes ALL existing entries
  return knex("Trips")
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
        }
      ]);
    });
};