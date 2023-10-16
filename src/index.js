import express from 'express';
import envs from './libs/envs.js';
import { auth, getUserBalance } from './modules/user/controllers.js';
import { checkBody } from './libs/middlware.js';

const app = express();
app.use(express.json());

app.get('/balance', async (req, res) => {
  await getUserBalance(req, res);
});

app.post('/auth', checkBody, async (req, res) => {
  await auth(req, res);
});

app.listen(+envs.PORT, () => {
  console.log(`Server running on ${envs.HOST}:${envs.PORT}`);
});
