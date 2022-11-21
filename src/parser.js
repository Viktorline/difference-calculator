import * as fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (pathToFile, fileExtension) => {
  const unreadFile = fs.readFileSync(path.resolve(process.cwd(), pathToFile));

  if (fileExtension === 'json') {
    return JSON.parse(unreadFile);
  }
  if (fileExtension === 'yaml' || fileExtension === 'yml') {
    return yaml.load(unreadFile);
  }

  throw new Error(`Wrong files extension - '${fileExtension}'! Only .json .yml/.yaml supported`);
};
