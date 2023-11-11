// Configuração para criação da tabela cad_livro
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('cad_livro', {
      livro_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      livro_autor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cad_autor',
          key: 'autor_id',
        },
        onUpdate: 'CASCADE',
      },
      livro_genero_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tab_genero',
          key: 'genero_id',
        },
        onUpdate: 'CASCADE',
      },
      livro_nome: {
        type: Sequelize.STRING,
      },
      livro_paginas: {
        type: Sequelize.INTEGER,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('cad_livro'),
};
