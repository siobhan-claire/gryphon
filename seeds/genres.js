
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('genres').insert({id: 1, name: 'Science Fiction', genre_id:1 }),
        knex('genres').insert({id: 2, name: 'Poetry', genre_id:2 }),
        knex('genres').insert({id: 3, name: 'Classics', genre_id:3 }),
        knex('genres').insert({id: 3, name: 'Philosophy', genre_id:4 }),
        knex('genres').insert({id: 3, name: 'Graphic Novels', genre_id:5 })
      ]);
    });
};
