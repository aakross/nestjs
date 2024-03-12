import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EjemploController } from './controladores/ejemplo/ejemplo.controller';
import { EjemploService } from './servicios/ejemplo/ejemplo.service';
import { UploadController } from './controladores/upload/upload.controller';

@Module({
  imports: [],
  controllers: [AppController, EjemploController, UploadController],
  providers: [AppService, EjemploService],
})
export class AppModule {}