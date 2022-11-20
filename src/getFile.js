import * as fs from 'fs';
import path from 'path';

export default (pathToFile) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), pathToFile)));
