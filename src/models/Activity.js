const { DataTypes } = require ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define( "Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM ("1", "2", "3", "4", "5"),
            allowNull: false
        },
        time: {
            type: DataTypes.DATE(4),
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM ("Summer", "Autumn", "Winter", "Spring"),
            allowNull: false
        },
    },
    {
        timestamps : false,
    });
};