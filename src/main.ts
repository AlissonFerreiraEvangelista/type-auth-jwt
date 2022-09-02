import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform: true,whitelist: true, forbidNonWhitelisted: true}));

  const config = new DocumentBuilder()
    .setTitle('API Auth e JWT Token')
    .setDescription('Aprendendo a fazer autenticação por token')
    .setContact('Alisson','https://github.com/AlissonFerreiraEvangelista','alisson.225592gmail.com')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
