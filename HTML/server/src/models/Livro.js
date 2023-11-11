import Sequelize, { Model } from 'sequelize';

export default class Livro extends Model {
  static init(sequelize) {
    super.init(
      {
        livro_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        livro_autor_id: {
          type: Sequelize.INTEGER,
        },
        livro_genero_id: {
          type: Sequelize.INTEGER,
        },
        livro_nome: {
          type: Sequelize.STRING,
        },
        livro_paginas: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        tableName: 'cad_livro',
        timestamps: false,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Autor, { foreignKey: 'livro_autor_id' });
    this.belongsTo(models.Genero, { foreignKey: 'livro_genero_id' });
  }
}
