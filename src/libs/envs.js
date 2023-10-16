import * as dotenv from 'dotenv';
import * as fs from 'node:fs';
import * as path from 'node:path';
dotenv.config();
const filepath = path.resolve(`.env`);

const envs = {};
if (fs.existsSync(filepath)) {
  const data = fs.readFileSync(filepath, 'utf8');
  const variables = dotenv.parse(data);

  const unsetEnvs = [];
  for (const [key, val] of Object.entries(variables)) {
    if (!val) {
      unsetEnvs.push(key);
    }
    envs[key] = val;
  }

  if (unsetEnvs.length) throw new Error(`Unset ENVS: ${unsetEnvs.map(el => el)}`);
}

export default envs;
