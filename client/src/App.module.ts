import { Module } from '@nestjs/common';
import { AppController } from './App.controller';
import { AppService } from './App.service';
import { ConfigModule } from '@nestjs/config';
import QueueConfig from './Queue.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    QueueConfig,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
