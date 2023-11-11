USE inventario;
SELECT
    cad_autor.autor_nome,
    COUNT(cad_livro.livro_id) AS quantidade_livros,
    SUM(cad_livro.livro_paginas) AS somatoria_paginas
FROM
    cad_autor
LEFT JOIN
    cad_livro ON cad_autor.autor_id = cad_livro.livro_autor_id
GROUP BY
    cad_autor.autor_id, cad_autor.autor_nome;

