import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ListaComprasModule } from './listaCompras/ListaCompras.module';

@Module({
  imports: [ListaComprasModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
