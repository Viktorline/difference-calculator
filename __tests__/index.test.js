import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectResult = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('genDiff flat json', () => {
  const funcResult = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(funcResult).toEqual(expectResult);
});

test('genDiff flat yaml', () => {
  const funcResult = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'));
  expect(funcResult).toEqual(expectResult);
});
