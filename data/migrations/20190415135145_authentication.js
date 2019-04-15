
exports.up = function(knex) {
  return knex.schema.createTable('authentication', authentication => {
    authentication.increments();

    authentication
      .string('username', 255)
      .notNullable()
      .unique();
    authentication.string('password', 255).notNullable();
    authentication.string("userType", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("authentication");
};
