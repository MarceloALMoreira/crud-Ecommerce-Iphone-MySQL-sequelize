'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {

    static associate(models) {
    }
  }
  Phone.init({
    modelo: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Phone',
  });
  return Phone;
};