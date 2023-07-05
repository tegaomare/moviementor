const User = require("./User");
const Movie = require("./Movie");
const UserMovies = require('./UserMovies');



// MANY TO MANY
//movie belongs to many users - USERS MOVIES
//make usersMovies model that has two foreign keys in it and go "through"


Movie.belongsToMany(User, {
  foreignKey: 'movie_id',
  through: UserMovies
});

User.belongsToMany(Movie, {
  foreignKey: 'user_id',
  through: UserMovies
})

module.exports = { User,  Movie, UserMovies};

