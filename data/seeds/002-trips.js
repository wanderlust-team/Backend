exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex("trips")
    .truncate()
    .then(function () {
      return knex("trips").insert([
        {
          tripName: "Hiking In The Jungle",
          location: "Panama",
          description: "Come join us on an amazing adventure through the Chagras jungle!",
          startDate: 04 - 16 - 2019,
          endDate: 04 - 18 - 2019
        },
        {
          tripName: "Swim On The Nile",
          location: "Egypt",
          description: "Ever wanted to swim on the longest river? Now is your chance!",
          startDate: 04 - 16 - 2019,
          endDate: 04 - 18 - 2019
        }
      ]);
    });
};