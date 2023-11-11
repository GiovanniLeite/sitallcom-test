// Configuração para preenchimento da tabela tab_genero
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'tab_genero',
      [
        { genero_id: 1, genero_nome: 'Romance' },
        { genero_id: 2, genero_nome: 'Poesia' },
        { genero_id: 3, genero_nome: 'Teatro' },
        { genero_id: 4, genero_nome: 'Contos' },
      ],
      {},
    );
  },

  down: () => {},
};
