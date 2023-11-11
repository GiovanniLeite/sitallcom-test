// Configuração para criação da tabela tab_genero
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tab_genero', {
      genero_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      genero_nome: {
        type: Sequelize.STRING,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('tab_genero'),
};
