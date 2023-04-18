'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {

    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      })
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        functionValidate: function (dado) {
          if(dado.length < 3) throw new Error('o campo nome deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dados do tipo e-mail é inválido'
        }
      },
    },
    // validandos dados sequilize
    role: DataTypes.STRING
  }, {
    sequelize,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      all: { where: {} }
    },
    paranoid: true,
    modelName: 'Pessoas',
  });
  return Pessoas;
};