import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EVENT_SERVICE, PUBLISHER_SERVICE } from './utils';

const loadConfig = async (
  config: ConfigService,
): Promise<Record<string, any>> => {
  const params = {
    transport: Transport.REDIS,
    options: {
      host: config.get('QUEUE_HOST'),
      port: parseInt(config.get('QUEUE_PORT')),
    },
  };

  console.log(`QUEUE CONFIG: ${JSON.stringify(params)}`);
  return params;
};

export default ClientsModule.registerAsync([
  {
    inject: [ConfigService],
    name: PUBLISHER_SERVICE,
    useFactory: async (config) => await loadConfig(config),
  },
  {
    inject: [ConfigService],
    name: EVENT_SERVICE,
    useFactory: async (config) => await loadConfig(config),
  },
]);
