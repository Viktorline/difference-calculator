import diff from './src/diff.js';
import findFile from './src/findFile.js';

export default (pathToFile1, pathToFile2) => {
  const file1 = findFile(pathToFile1);
  const file2 = findFile(pathToFile2);
  const result = diff(file1, file2);
  return result;
};
