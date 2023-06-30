const sequelize = require('../config/connection');
const { User, Movie, TvShow } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const tvshowData = require('./tvshowData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

};

dummyseedDatabase();