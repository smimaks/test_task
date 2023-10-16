import { fastStorage } from '../../infra/redis/initFastStorage.js';

export class Service {
  #baseUrl = 'https://trending.bid';
  constructor(storage) {
    this.storage = storage;
  }

  async auth(body) {
    await this.storage.setValue('PHPSESSID', body.PHPSESSID);
    return { message: 'Данные сохранены' };
  }

  async getBalance() {
    const sessionId = await this.storage.getValue('PHPSESSID');
    const cookie = `PHPSESSID=${sessionId}`;

    const response = await fetch(`${this.#baseUrl}/advertiserapi/payment/getinfo`, {
      headers: { Cookie: cookie },
    });

    if (response.ok) {
      const { data } = await response.json();
      return {
        status: true,
        data: {
          balance: data?.balance[0],
        },
      };
    } else {
      return { status: false, message: response.statusText, code: response.status };
    }
  }
}
