import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // u need npm install class-validator and class-transformer
  app.useGlobalPipes(new ValidationPipe());

  // npm i --save @nestjs/swagger swagger-ui-express first to allow us to use swagger
  // note that: if u use @nestjs/swagger version 5, u need @nestjs/core and @nestjs/common version 8
  const config = new DocumentBuilder()
    .setTitle('Fundamenta NestJS')
    .setDescription('For studying NestJS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
