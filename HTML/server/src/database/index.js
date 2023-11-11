import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Autor from '../models/Autor';
import Genero from '../models/Genero';
import Livro from '../models/Livro';

/* Configuração do Sequelize */
const models = [Autor, Genero, Livro];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
