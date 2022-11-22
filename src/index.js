import path from 'path';
import * as fs from 'fs';
import difference from './diff.js';
import getFile from './parser.js';
import format from './formatters/index.js';

const readFile = (pathToFile) => fs.readFileSync(path.resolve(process.cwd(), pathToFile));
const getFileExtension = (pathToFile) => path.extname(pathToFile).slice(1);

export default (pathToFile1, pathToFile2, formatter = 'stylish') => {
  const file1 = getFile(readFile(pathToFile1), getFileExtension(pathToFile1));
  const file2 = getFile(readFile(pathToFile2), getFileExtension(pathToFile2));
  const differenceTree = difference(file1, file2);
  const result = format(differenceTree, formatter);
  return result;
};
