import { Inject, Injectable } from '@nestjs/common';
import { ListaCompras } from './ListaCompras.model';

@Injectable()
export class ListaComprasService {
  constructor(
    @Inject('ListaCompras_REPOSITORY')
    private listaComprasRepository: typeof ListaCompras,
  ) {}

  async findAll(): Promise<ListaCompras[]> {
    return await this.listaComprasRepository.findAll<ListaCompras>();
  }

  async insert(listaCompra: ListaCompras) {
    await this.listaComprasRepository.create<ListaCompras>({
      produto: listaCompra.produto,
    });
  }

  async delete(id: number) {
    await this.listaComprasRepository.destroy({
      where: {
        id: id,
      },
    });
  }
}
