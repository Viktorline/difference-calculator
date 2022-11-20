import diff from './src/diff.js';
import getFile from './src/parser.js';

export default (pathToFile1, pathToFile2) => {
  const file1 = getFile(pathToFile1);
  const file2 = getFile(pathToFile2);
  const result = diff(file1, file2);
  return result;
};
