import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './DataBase.module';
import { ListaComprasController } from './ListaCompras.controller';
import { ListaComprasProviders } from './ListaCompras.providers';
import { ListaComprasService } from './ListaCompras.service';

@Module({
  imports: [DataBaseModule, ConfigModule.forRoot()],
  controllers: [ListaComprasController],
  providers: [ListaComprasService, ...ListaComprasProviders],
})
export class ListaComprasModule {}
