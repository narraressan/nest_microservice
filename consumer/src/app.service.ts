import { Injectable } from '@nestjs/common';
import { multiply } from 'lodash';

@Injectable()
export class AppService {
  multiplication(data: number[]) {
    console.log(`Multiply all of ${data} -> ${multiply(data[0], data[1])}`);
  }
}
