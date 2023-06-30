const User = require('./User');
const Category = require('./Category');
const Movie = require('./Movie');
const TvShow = require('./TvShow');
const Genre = require('./Genre');
const Rating = require('./Rating');

// NEED ASSOCIATIONS

//genre has many movies
//genre has many tvshows

//Movie has one rating
Movie.hasOne(Rating, {
    foreignKey: "movie_id",
    onDelete: "CASCADE"
})
//Tv show has one rating
TvShow.hasOne(Rating, {
    foreignKey: "tvshow_id",
    onDelete: "CASCADE"
})


//movie belongs to category
//tvshow belongs to category

//MANY TO MANY
//movie belongs to many users - USERS MOVIES
Movie.belongsToMany(User, {
    as: 'users_movies'
})
//tv show belongs to many users - USERS TV SHOWS
TvShow.belongsToMany(User, {
    as: 'users_tvshows'
})







module.exports = { User, Category, Movie, TvShow, Genre, Rating}