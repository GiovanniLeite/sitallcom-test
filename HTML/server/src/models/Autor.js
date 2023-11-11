import Sequelize, { Model } from 'sequelize';

export default class Autor extends Model {
  static init(sequelize) {
    super.init(
      {
        autor_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        autor_nome: {
          type: Sequelize.STRING,
        },
        autor_nascimento: {
          type: Sequelize.DATE,
        },
      },
      {
        sequelize,
        tableName: 'cad_autor',
        timestamps: false,
      },
    );

    return this;
  }
}
