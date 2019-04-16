
exports.up = function (knex) {
  return knex.schema.createTable('Trips', tbl => {
    tbl.increments();

    tbl
      .string('tripName')
      .notNullable();

    tbl
      .integer('userId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

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

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('Trips');
};
