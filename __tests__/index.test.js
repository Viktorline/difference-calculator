import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedResult = readFile('expectedResult.txt');

test('genDiff deep json', () => {
  const funcResult = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
  expect(funcResult).toEqual(expectedResult);
});

test('genDiff deep yaml', () => {
  const funcResult = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'), 'stylish');
  expect(funcResult).toEqual(expectedResult);
});
