
exports.up = function (knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
<<<<<<< HEAD
    users.string('userType', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
=======
    users.string('email', 128).notNullable();
    users.string("userType", 128).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
>>>>>>> 7077e9e4ace33fc785a91423bd9a708a938309ed
};
