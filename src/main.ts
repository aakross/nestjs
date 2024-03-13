import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  //Habialitar Cors
  app.enableCors();
  //Configuracion de puerto
  await app.listen(3000);
}
bootstrap();