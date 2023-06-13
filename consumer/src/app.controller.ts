import { Controller } from '@nestjs/common';
import { AppService } from './App.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('task_multiplication')
  async multiplication(data: number[]) {
    this.appService.multiplication(data);
  }
}
