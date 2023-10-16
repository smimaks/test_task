import { initRedisClient } from './client.js';
import { FastStorage } from './FastStorage.js';

const client = initRedisClient();
export const fastStorage = new FastStorage(client);
