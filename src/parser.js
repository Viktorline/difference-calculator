import * as fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (pathToFile) => {
  const fileExtension = path.extname(pathToFile);
  const unreadFile = fs.readFileSync(path.resolve(process.cwd(), pathToFile));

  if (fileExtension === '.json') {
    return JSON.parse(unreadFile);
  }
  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    return yaml.load(unreadFile);
  }

  return 'Wrong files extension only .json .yml/.yaml supported';
};
