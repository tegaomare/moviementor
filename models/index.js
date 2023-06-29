const User = require('./User');
const Category = require('./Category');
const Movie = require('./Movie');
const TvShow = require('./TvShow');
const Genre = require('./Genre');
const Rating = require('./Rating');

// NEED ASSOCIATIONS

//genre has many movies
//genre has many tvshows

//rating has many movies
//rating has many tvshows

//category has many movies
//category has many tvshows

//movie belongs to category
//tvshow belongs to category

//user has many movies
//user has many tv shows






module.exports = { User, Category, Movie, TvShow, Genre, Rating}