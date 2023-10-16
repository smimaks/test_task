export class FastStorage {
  constructor(client) {
    this.client = client;
  }
  async setValue(key, value) {
    try {
      this.client.set(key, value);
    } catch (e) {
      console.log(e);
      throw new Error('Ошибка добавления в хранилище');
    }
  }

  async getValue(key) {
    try {
      return this.client.get(key);
    } catch (e) {
      console.log(e);
      throw new Error('Ошибка получения значения из хранилища');
    }
  }
}
