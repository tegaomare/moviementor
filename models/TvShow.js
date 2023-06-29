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
        // image: {
        //     // need to figure this out
        // },
        sex: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        violence: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        language: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
                key: 'id',
            }
        },
        rating_id: {
            type: DataTypes.STRING,
            references: {
                model: 'rating',
                key: 'id',
            }
        },
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