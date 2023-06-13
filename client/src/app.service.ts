import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EVENT_SERVICE, PUBLISHER_SERVICE } from './utils';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject(PUBLISHER_SERVICE) private publisher: ClientProxy,
    @Inject(EVENT_SERVICE) private event: ClientProxy,
  ) {}

  async publishMessage(): Promise<number> {
    const data: number[] = Array.from(Array(5)).map(
      (_, i) => i * Math.random(),
    );
    return await lastValueFrom(this.publisher.send('task_summation', data));
  }

  publishEvent() {
    const data = [Math.random() * 10, Math.random() * 20];
    this.event.emit('task_multiplication', data);
  }
}
