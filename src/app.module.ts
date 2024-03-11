import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploController } from './controladores/ejemplo/ejemplo.controller';
import { EjemploService } from './servicios/ejemplo/ejemplo.service';

@Module({
  imports: [],
  controllers: [AppController, EjemploController],
  providers: [AppService, EjemploService],
})
export class AppModule {}