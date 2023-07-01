const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   release_date: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   poster: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   adult_content: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
   },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "movie",
  }
);

module.exports = Movie;
