exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.integer('genre_id')
    table.string('isbn')
    table.string('cover_art')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
