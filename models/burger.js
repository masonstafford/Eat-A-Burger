module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNoll: false,
            validate: {
                len: [1, 140]
            }
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    return Burgers;
}