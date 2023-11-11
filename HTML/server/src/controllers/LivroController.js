import { Sequelize } from 'sequelize';

import Livro from '../models/Livro';
import Autor from '../models/Autor';
import Genero from '../models/Genero';

class LivroController {
  async index(req, res) {
    try {
      const data = await Livro.findAll({
        attributes: [
          'livro_id',
          'livro_nome',
          'livro_paginas',
          [Sequelize.literal('Autor.autor_nome'), 'autor_nome'],
          [Sequelize.literal('Genero.genero_nome'), 'genero_nome'],
        ],
        include: [
          {
            model: Autor,
            attributes: [],
          },
          {
            model: Genero,
            attributes: [],
          },
        ],
        order: [['livro_id', 'ASC']],
      });

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar os livros.' });
    }
  }

  async indexQ7(req, res) {
    try {
      const data = await Livro.findAll({
        attributes: [
          'livro_id',
          'livro_autor_id',
          'livro_genero_id',
          'livro_nome',
          'livro_paginas',
        ],
        order: [['livro_id', 'ASC']],
      });

      console.log(JSON.stringify(data, null, 2));
      return res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar os livros.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const livro = await Livro.findByPk(id);

      if (!livro) {
        return res.status(404).json({
          errors: ['Livro não existe.'],
        });
      }
      await livro.destroy();

      return res.status(200).json({
        deleted: true,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao remover livro' });
    }
  }

  async deleteQ8(req, res) {
    try {
      const result = await Livro.destroy({
        where: {
          livro_paginas: {
            [Sequelize.Op.lt]: 200,
          },
        },
      });

      return res.status(200).json({
        deleted: result,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao remover livros' });
    }
  }
}

export default new LivroController();
