import { fastStorage } from '../../infra/redis/initFastStorage.js';
import envs from '../../libs/envs.js';
import { Service } from './Service.js';

export async function getUserBalance(req, res) {
  try {
    const service = new Service(fastStorage);
    const data = await service.getBalance();
    const status = !data.status ? data.code : 200;
    res.status(status);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send({ error: 'внутренняя ошибка сервиса' });
  }
}

export async function auth(req, res) {
  try {
    const { body } = req;
    const service = new Service(fastStorage);
    const data = await service.auth(body);
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send({ error: 'внутренняя ошибка сервиса' });
  }
}
