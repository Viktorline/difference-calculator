import difference from './src/diff.js';
import getFile from './src/parser.js';
import format from './src/formatters/index.js';

export default (pathToFile1, pathToFile2, formatter = 'stylish') => {
  const file1 = getFile(pathToFile1);
  const file2 = getFile(pathToFile2);
  const differenceTree = difference(file1, file2);
  const result = format(differenceTree, formatter);
  return result;
};
