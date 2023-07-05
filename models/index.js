const User = require("./User");
const Movie = require("./Movie");
const UserMovies = require('./UserMovies');



// MANY TO MANY
//movie belongs to many users - USERS MOVIES
//make usersMovies model that has two foreign keys in it and go "through"
Movie.hasMany(User, {
  foreignKey: 'movie_id',
  through: UserMovies
});

User.hasMany(Movie, {
  foreignKey: 'user_id',
  through: UserMovies
})

module.exports = { User,  Movie, UserMovies};

