import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe.each(['json', 'plain', 'stylish'])('formatter %s', (format) => {
  const expectedResult = readFile(`expectedResult_${format}.txt`);

  test.each(['json', 'yaml'])('extension %s test', (fileExtension) => {
    const file1 = getFixturePath(`file1.${fileExtension}`);
    const file2 = getFixturePath(`file2.${fileExtension}`);

    expect(genDiff(file1, file2, format)).toEqual(expectedResult);
  });
});
