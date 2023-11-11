import Sequelize, { Model } from 'sequelize';

export default class Genero extends Model {
  static init(sequelize) {
    super.init(
      {
        genero_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        genero_nome: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        tableName: 'tab_genero',
        timestamps: false,
      },
    );

    return this;
  }
}
