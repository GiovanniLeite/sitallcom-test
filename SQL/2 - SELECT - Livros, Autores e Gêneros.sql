USE inventario;
SELECT
	cad_livro.livro_id,
    cad_livro.livro_nome,
    cad_autor.autor_nome,
    tab_genero.genero_nome
FROM
    cad_livro
JOIN
    cad_autor ON cad_livro.livro_autor_id = cad_autor.autor_id
JOIN
    tab_genero ON cad_livro.livro_genero_id = tab_genero.genero_id;
