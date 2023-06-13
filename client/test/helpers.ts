import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/App.module';

export const setupTest = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  const app = moduleFixture.createNestApplication();
  return await app.init();
};
