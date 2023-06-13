import { INestApplication } from '@nestjs/common';
import { AppService } from '../src/App.service';
import * as request from 'supertest';
import { setupTest } from 'test/helpers';

const appService = {
  publishMessage: async () => {
    const rand = Math.random();
    console.log(`random: ${rand}`);
    return rand;
  },
  publishEvent: async () => {
    console.log('event emitted...');
  },
};

describe('App', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await setupTest();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Test publish message', async () => {
    const _mgs = app.get(AppService);
    jest
      .spyOn(_mgs, 'publishMessage')
      .mockImplementation(appService.publishMessage);

    await request(app.getHttpServer())
      .get(`/publish-msg`)
      .send()
      .then((res) => {
        console.log('Response:', res.text);
        expect(res.status).toEqual(200);
        expect(parseFloat(res.text)).toBeGreaterThan(0);
      });
  });

  it('Test publish event', async () => {
    const _mgs = app.get(AppService);
    jest
      .spyOn(_mgs, 'publishEvent')
      .mockImplementation(appService.publishEvent);

    await request(app.getHttpServer())
      .get(`/publish-msg`)
      .send()
      .then((res) => {
        console.log('Response:', res.text);
        expect(res.status).toEqual(200);
      });
  });
});
