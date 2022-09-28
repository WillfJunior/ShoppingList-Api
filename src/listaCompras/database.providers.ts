import { Sequelize } from 'sequelize-typescript';
import { ListaCompras } from './ListaCompras.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'mysql22.redehost.com.br',
        port: 41890,
        username: 'willfjr86',
        password: 'K@ua1011',
        database: 'projetofamilia',
      });
      sequelize.addModels([ListaCompras]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
