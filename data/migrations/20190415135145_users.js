
exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable();
    users.string('password', 255).notNullable();
    users.string('email', 128).notNullable();
    users.string("userType", 128).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
