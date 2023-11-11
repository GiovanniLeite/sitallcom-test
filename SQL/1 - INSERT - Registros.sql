INSERT INTO inventario.cad_autor (autor_id, autor_nome) VALUES
(1, 'Machado de Assis'),
(2, 'José de Alencar'),
(3, 'Manuel Antônio de Almeida'),
(4, 'Carlos Drummond de Andrade'),
(5, 'Gil Vicente'),
(6, 'José Maria de Eça de Queirós'),
(7, 'Aluísio Azevedo'),
(8, 'Joaquim Manuel de Macedo');

INSERT INTO inventario.tab_genero (genero_id, genero_nome) VALUES
(1, 'Romance'),
(2, 'Poesia'),
(3, 'Teatro'),
(4, 'Contos');

INSERT INTO inventario.cad_livro (livro_id, livro_nome, livro_paginas, livro_autor_id, livro_genero_id) VALUES
(1, 'Dom Casmurro', 200, 1, 1),
(2, 'Memórias Póstumas de Brás Cubas', 150, 1, 1),
(3, 'Iracema', 100, 2, 1),
(4, 'O Guarani', 69, 2, 1),
(5, 'Memórias de um Sargento de Milícias', 200, 3, 1),
(6, 'Claro Enigma', 689, 4, 2),
(7, 'Auto da Barca do Inferno', 241, 5, 3),
(8, 'O Primo Basílio', 398, 6, 1),
(9, 'Memórias de Criança', 541, 1, 4),
(10, 'O Cortiço', 99, 7, 1),
(11, 'Memórias de Sargento de Milícias', 0, 3, 1),
(12, 'A Moreninha', 76, 8, 1),
(13, 'O Guarani', 9999, 2, 1),
(14, 'Quincas Borba', 56, 1, 1),
(15, 'Memórias de um Sargento de Milícias', 77, 3, 1),
(16, 'Claro Enigma', 122, 4, 2),
(17, 'Auto da Barca do Inferno', 10, 5, 3),
(18, 'O Primo Basílio', 501, 6, 1),
(19, 'Memórias de Criança', NULL, 1, 4),
(20, 'O Cortiço', 666, 7, 1);
