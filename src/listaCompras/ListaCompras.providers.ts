import { ListaCompras } from './ListaCompras.model';

export const ListaComprasProviders = [
  {
    provide: 'ListaCompras_REPOSITORY',
    useValue: ListaCompras,
  },
];
