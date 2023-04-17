'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      // define association here
    }
  }
  Clientes.init({
    nome: DataTypes.STRING,
    data_nasc: DataTypes.DATEONLY,
    credito: DataTypes.FLOAT
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Clientes',
  });
  return Clientes;
};