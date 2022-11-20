import _ from 'lodash';

export default (file1, file2) => {
  const keys = _.union(_.keys(file1), _.keys(file2));
  const result = keys
    .reduce((acc, key) => {
      if (!Object.hasOwn(file1, key)) {
        acc.push(`  + ${key}: ${file2[key]}\n`);
      } else if (!Object.hasOwn(file2, key)) {
        acc.push(`  - ${key}: ${file1[key]}\n`);
      } else if (file1[key] !== file2[key]) {
        acc.push(`  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}\n`);
      } else {
        acc.push(`    ${key}: ${file1[key]}\n`);
      }
      return acc;
    }, [])
    .sort((a, b) => (a[4] > b[4] ? 1 : -1))
    .join('');
  return `{\n${_.trimEnd(result)}\n}`;
};
