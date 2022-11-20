import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'fs';
// import diff from '../src/diff.js';
// import getFile from '../src/getFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

console.log(readFile('./__fixtures__/file1.json'));

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
