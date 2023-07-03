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
    // I recommend creating a Genre model, which will contain the genre id and the genre name
    // Refer to module 13: Product model, ProductTag, Tag model
    // Create an association between the Movie model and the Genre Model
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
