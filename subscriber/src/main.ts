import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: process.env.QUEUE_HOST,
      port: parseInt(process.env.QUEUE_PORT),
    },
  });
  await app.listen();
}
bootstrap();
