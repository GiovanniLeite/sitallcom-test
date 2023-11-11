// Configuração para criação da tabela cad_autor
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('cad_autor', {
      autor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      autor_nome: {
        type: Sequelize.STRING,
      },
      autor_nascimento: {
        type: Sequelize.DATE,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('cad_autor'),
};
