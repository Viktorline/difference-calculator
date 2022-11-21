import path from 'path';
import difference from './diff.js';
import getFile from './parser.js';
import format from './formatters/index.js';

const getFileExtension = (pathToFile) => path.extname(pathToFile).slice(1);

export default (pathToFile1, pathToFile2, formatter = 'stylish') => {
  const file1 = getFile(pathToFile1, getFileExtension(pathToFile1));
  const file2 = getFile(pathToFile2, getFileExtension(pathToFile2));
  const differenceTree = difference(file1, file2);
  const result = format(differenceTree, formatter);
  return result;
};
