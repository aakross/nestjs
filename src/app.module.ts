import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploController } from './controladores/ejemplo/ejemplo.controller';

@Module({
  imports: [],
  controllers: [AppController, EjemploController],
  providers: [AppService],
})
export class AppModule {}