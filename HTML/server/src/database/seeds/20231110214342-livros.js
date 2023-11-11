// Configuração para preenchimento da tabela cad_livro
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'cad_livro',
      [
        {
          livro_nome: 'Dom Casmurro',
          livro_paginas: 200,
          livro_autor_id: 1,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Memórias Póstumas de Brás Cubas',
          livro_paginas: 150,
          livro_autor_id: 1,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Iracema',
          livro_paginas: 100,
          livro_autor_id: 2,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'O Guarani',
          livro_paginas: 69,
          livro_autor_id: 2,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Memórias de um Sargento de Milícias',
          livro_paginas: 200,
          livro_autor_id: 3,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Claro Enigma',
          livro_paginas: 689,
          livro_autor_id: 4,
          livro_genero_id: 2,
        },
        {
          livro_nome: 'Auto da Barca do Inferno',
          livro_paginas: 241,
          livro_autor_id: 5,
          livro_genero_id: 3,
        },
        {
          livro_nome: 'O Primo Basílio',
          livro_paginas: 398,
          livro_autor_id: 6,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Memórias de Criança',
          livro_paginas: 541,
          livro_autor_id: 1,
          livro_genero_id: 4,
        },
        {
          livro_nome: 'O Cortiço',
          livro_paginas: 99,
          livro_autor_id: 7,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Memórias de Sargento de Milícias',
          livro_paginas: 0,
          livro_autor_id: 3,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'A Moreninha',
          livro_paginas: 76,
          livro_autor_id: 8,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'O Guarani',
          livro_paginas: 9999,
          livro_autor_id: 2,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Quincas Borba',
          livro_paginas: 56,
          livro_autor_id: 1,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Memórias de um Sargento de Milícias',
          livro_paginas: 77,
          livro_autor_id: 3,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Claro Enigma',
          livro_paginas: 122,
          livro_autor_id: 4,
          livro_genero_id: 2,
        },
        {
          livro_nome: 'Auto da Barca do Inferno',
          livro_paginas: 10,
          livro_autor_id: 5,
          livro_genero_id: 3,
        },
        {
          livro_nome: 'O Primo Basílio',
          livro_paginas: 501,
          livro_autor_id: 6,
          livro_genero_id: 1,
        },
        {
          livro_nome: 'Memórias de Criança',
          livro_paginas: null,
          livro_autor_id: 1,
          livro_genero_id: 4,
        },
        {
          livro_nome: 'O Cortiço',
          livro_paginas: 666,
          livro_autor_id: 7,
          livro_genero_id: 1,
        },
      ],
      {},
    );
  },

  down: () => {},
};
