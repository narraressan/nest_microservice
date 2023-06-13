import { Controller } from '@nestjs/common';
import { AppService } from './App.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('task_summation')
  async summation(data: number[]): Promise<number> {
    return this.appService.summation(data);
  }
}
