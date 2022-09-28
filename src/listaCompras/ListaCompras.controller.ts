import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ListaCompras } from './ListaCompras.model';
import { ListaComprasService } from './ListaCompras.service';

@Controller('listacompras')
export class ListaComprasController {
  constructor(private listaComprasService: ListaComprasService) {}

  @Get()
  async findAll(): Promise<ListaCompras[]> {
    return await this.listaComprasService.findAll();
  }

  @Post()
  async insert(@Body() listaCompras: ListaCompras) {
    return await this.listaComprasService.insert(listaCompras);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.listaComprasService.delete(params.id);
  }
}
