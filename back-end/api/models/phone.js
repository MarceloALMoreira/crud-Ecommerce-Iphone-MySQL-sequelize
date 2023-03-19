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
    modelName: 'Phone',
  });
  return Phone;
};