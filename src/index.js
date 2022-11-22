import path from 'path';
import * as fs from 'fs';
import difference from './diff.js';
import getFile from './parser.js';
import format from './formatters/index.js';

const buildFullPath = (pathToFile) => path.resolve(process.cwd(), pathToFile);
const readFile = (fullPathToFile) => fs.readFileSync(fullPathToFile);
const getFileExtension = (pathToFile) => path.extname(pathToFile).slice(1);

export default (pathToFile1, pathToFile2, formatter = 'stylish') => {
  const fullPathFile1 = buildFullPath(pathToFile1);
  const fullPathFile2 = buildFullPath(pathToFile2);
  const file1 = getFile(readFile(fullPathFile1), getFileExtension(fullPathFile1));
  const file2 = getFile(readFile(fullPathFile2), getFileExtension(fullPathFile2));
  const differenceTree = difference(file1, file2);
  const result = format(differenceTree, formatter);
  return result;
};
