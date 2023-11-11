import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Easy Generator Task')
    .setDescription(
      'Check out our full documentation to learn about everything you can do with the API.',
    )
    .setVersion('1.0')
    .setLicense('Easy Generator', 'https://www.easygenerator.com/')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
    }),
  );

  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
