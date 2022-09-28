import { Sequelize } from 'sequelize-typescript';
import { ListaCompras } from './ListaCompras.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.HOST,
        port: parseInt(process.env.PORT),
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
      });
      sequelize.addModels([ListaCompras]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
