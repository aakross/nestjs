import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

import { EjemploController } from './controladores/ejemplo/ejemplo.controller';
import { EjemploService } from './servicios/ejemplo/ejemplo.service';
import { UploadController } from './controladores/upload/upload.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
  ],
  controllers: [AppController, EjemploController, UploadController],
  providers: [AppService, EjemploService],
})
export class AppModule { }