import { Injectable } from '@nestjs/common';
import { sum } from 'lodash';

@Injectable()
export class AppService {
  summation(data: number[]): number {
    console.log(`Total of ${data}`);
    return sum(data);
  }
}
