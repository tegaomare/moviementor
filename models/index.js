const User = require("./User");
const Movie = require("./Movie");

//category means movie or tv show - only 2 categories

// NEED ASSOCIATIONS

// //genre has many movies
// Genre.hasMany(Movie, {
//     foreignKey: "genre_id",
//     onDelete: "CASCADE",
//   });
// //genre has many tvshows
// Genre.hasMany(TvShow, {
//     foreignKey: "genre_id",
//     onDelete: "CASCADE",
//   });

//Movie has one rating
/*Movie.hasOne(Rating, {
    foreignKey: "movie_id",
    onDelete: "CASCADE"
})
//Tv show has one rating
TvShow.hasOne(Rating, {
    foreignKey: "tvshow_id",
    onDelete: "CASCADE"
})*/
/*
//movie belongs to category
Movie.belongsTo(Category, {
  foreignKey: "category_id",
});

//tvshow belongs to category
TvShow.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.belongsToMany(Movie, {
  as: "movies_categories",
});

Category.belongsToMany(TvShow, {
  as: "tvshows_categories",
});
*/
//MANY TO MANY
//movie belongs to many users - USERS MOVIES
//make usersMovies model that has two foreign keys in it and go "through"
/*Movie.belongsToMany(User, {
  as: "users_movies",
});*/
//tv show belongs to many users - USERS TV SHOWS
//make usersTvshows model
/*TvShow.belongsToMany(User, {
  as: "users_tvshows",
});*/

module.exports = { User,  Movie,};

