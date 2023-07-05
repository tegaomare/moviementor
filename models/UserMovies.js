const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserMovies extends Model {}

UserMovies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    },
    movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "movie",
          key: "id"
        }
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
    modelName: "usermovies",
  }
);

module.exports = UserMovies;
