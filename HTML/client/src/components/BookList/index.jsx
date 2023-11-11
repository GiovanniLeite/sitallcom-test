import { useEffect, useState } from 'react';
import { get } from 'lodash';

import axios from '../../services/axios';

import { Container } from './styles';

export default function BookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('/livros/');

        setBookList(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const handleRemoveBook = async (id, index) => {
    try {
      const { data } = await axios.delete(`/livros/${id}`);
      if (get(data, 'deleted', false)) {
        const newList = [...bookList];
        newList.splice(index, 1);
        setBookList(newList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveBookQ8 = async () => {
    // Questão 8
    try {
      const { data } = await axios.delete('/livros/q8');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <ul>
        <li className="header">
          <p>Título</p>
          <p>Gênero</p>
          <p>Páginas</p>
          <p>Ações</p>
        </li>
        {bookList.map((book, index) => (
          <li key={book.livro_id}>
            <p>{book.livro_nome}</p>
            <p>{book.genero_nome}</p>
            <p>{book.livro_paginas}</p>
            <div>
              <button title={`Remover: ${book.livro_nome}`} onClick={() => handleRemoveBook(book.livro_id, index)}>
                X
              </button>
              <button
                title="Nome do Autor"
                onClick={() => {
                  alert(book.autor_nome);
                }}
              >
                ?
              </button>
            </div>
          </li>
        ))}
        <li>
          <button title="Remover livros com menos de 200 Páginas" onClick={() => handleRemoveBookQ8()}>
            {'Remover < 200 pag'}
          </button>
        </li>
      </ul>
    </Container>
  );
}
