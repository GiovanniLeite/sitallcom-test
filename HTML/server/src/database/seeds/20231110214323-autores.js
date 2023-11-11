// Configuração para preenchimento da tabela cad_autor
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'cad_autor',
      [
        { autor_id: 1, autor_nome: 'Machado de Assis' },
        { autor_id: 2, autor_nome: 'José de Alencar' },
        { autor_id: 3, autor_nome: 'Manuel Antônio de Almeida' },
        { autor_id: 4, autor_nome: 'Carlos Drummond de Andrade' },
        { autor_id: 5, autor_nome: 'Gil Vicente' },
        { autor_id: 6, autor_nome: 'José Maria de Eça de Queirós' },
        { autor_id: 7, autor_nome: 'Aluísio Azevedo' },
        { autor_id: 8, autor_nome: 'Joaquim Manuel de Macedo' },
      ],
      {},
    );
  },

  down: () => {},
};
