
exports.up = function(knex) {
  return knex.schema.createTable('Trips', tbl => {
      tbl.increments();
      
      tbl
        .string('name')
        .notNullable();
    
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('authentication')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  
};
