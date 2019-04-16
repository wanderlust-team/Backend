
exports.up = function (knex) {
  return knex.schema.createTable('trips', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable();

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
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
  return knex.schema.dropTableIfExists('trips');
};
