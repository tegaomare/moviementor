const sequelize = require("../config/connection");
const { User, Movie } = require("../models");

const userData = require("./userData.json");
const movieData = require("./movieData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // Typically in a seed file, you will delete all of the previous data and overwrite with new data
  await User.de
//needs to be User.delete
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const movie of movieData) {
    await Movie.create({
      ...movie,
    });
  }
};

seedDatabase();
