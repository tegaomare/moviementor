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
        description: {
            type: DataTypes.STRING,
        },
        num_of_seasons: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        genre_id: {
            type: DataTypes.STRING,
            references: {
                model: 'genre',
                id: 'id',
            }
        },
        rating_id: {
            type: DataTypes.STRING,
            references: {
                model: 
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tvshow',

    }
);

module.exports = TvShow;