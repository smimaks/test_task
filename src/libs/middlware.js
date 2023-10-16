export function checkBody(req, res, next) {
  const { body, url } = req;

  if (!body['PHPSESSID']) {
    res.status(400).send({ error: 'PHPSESSID - обязательное поле' });
  }
  if (typeof body['PHPSESSID'] !== 'string') {
    res.status(400).send({ error: 'PHPSESSID - должен быть строкой' });
  }
  if (Object.keys(body).length > 1) {
    res.status(400).send({ error: 'Ожидается одно поле' });
  }

  next();
}
