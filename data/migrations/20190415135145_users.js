
exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username')
      .notNullable()
      .unique();
    
    users.string('password').notNullable();
    users.string('email').notNullable();
    users.string("userType").notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
