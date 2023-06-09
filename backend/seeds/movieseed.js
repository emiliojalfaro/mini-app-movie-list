/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const moviesList = require('../movies');

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del();
  await knex('movies').insert(moviesList);
};
