import { createClient } from 'redis';
import envs from '../../libs/envs.js';

export function initRedisClient() {
  const client = createClient({
    url: envs.REDIS_CONNECTION,
  });
  client.on('error', err => {
    console.log(err);
  });
  client.connect();

  return client;
}
