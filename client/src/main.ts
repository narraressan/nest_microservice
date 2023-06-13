import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

async function bootstrap() {
  const { APP_PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(APP_PORT));
}
bootstrap();
