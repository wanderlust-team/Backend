
exports.up = function (knex) {
  return knex.schema.createTable('trips', tbl => {
    tbl.increments();

    tbl
      .string('tripName')
      .notNullable();

    // tbl
    //   .integer('userId')
    //   .unsigned()
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('CASCADE')
    //   .onUpdate('CASCADE');

    tbl
      .string('location', 128)
      .notNullable();

    tbl
      .string('description', 255)
      .notNullable();
    tbl
      .integer("startDate")
      .notNullable();
    tbl
      .integer('endDate')
      .notNullable();
  })
};

<<<<<<< HEAD
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Trips');
=======
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('trips');
>>>>>>> 7077e9e4ace33fc785a91423bd9a708a938309ed
};
