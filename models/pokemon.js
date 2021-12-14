'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    title:DataTypes.STRING,
    hp:DataTypes.INTEGER,
    img:DataTypes.STRING,
    powerOne:DataTypes.STRING,
    powerTwo:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
    tableName:'pokemon',
    timestamps:false
  });
  return Pokemon;
};