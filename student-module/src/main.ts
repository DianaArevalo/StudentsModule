
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,           // elimina campos no definidos en DTO
      forbidNonWhitelisted: true // lanza error si envían campos extra
    }),
  );

  await app.listen(3000);
}
bootstrap();
