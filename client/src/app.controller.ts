import { Controller, Get } from '@nestjs/common';
import { AppService } from './App.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('publish-msg')
  async publishMessage(): Promise<number> {
    return await this.appService.publishMessage();
  }

  @Get('emit-event')
  publishEvent(): string {
    this.appService.publishEvent();
    return 'Ok';
  }
}
