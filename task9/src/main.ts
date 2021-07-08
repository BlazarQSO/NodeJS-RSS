import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';

async function bootstrap() {
  let app: INestApplication;

  if (USE_FASTIFY === 'false') {
    console.log('express is starting...');
    app = await NestFactory.create(AppModule, {
      logger: ['error', 'warn', 'log'],
    });
  } else {
    console.log('fastify is starting...');
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {
        logger: ['error', 'warn', 'log'],
      },
    );
  }

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
  console.log('app is started...');
}
bootstrap();
