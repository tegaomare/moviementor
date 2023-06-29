const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TvShow extends Model {}

TvShow.init(
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
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        num_of_seasons: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
        },
        image: {
            // need to figure this out
        },
        sex: {
            type: DataTypes.INTEGER,
        },
        violence: {
            type: DataTypes.INTEGER,
        },
        language: {
            type: DataTypes.INTEGER,
        }
    }
)