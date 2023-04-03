const knex = require("./dbConnection");


const getMovies = () => {
    return knex.select().from("movies");
}

module.exports = {
    getMovies
}