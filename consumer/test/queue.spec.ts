import { AppController } from '../src/App.controller';
import { AppService } from '../src/App.service';

describe('AppController (e2e)', () => {
  let processor: AppController;
  let service: AppService;

  beforeEach(async () => {
    service = new AppService();
    processor = new AppController(service);
  });

  it('test queue', async () => {
    const message = [3, 2];
    jest.spyOn(service, 'multiplication');
    processor.multiplication(message);
    expect(service.multiplication).toBeCalled();
  });
});
