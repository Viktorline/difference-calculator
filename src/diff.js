import _ from 'lodash';

const difference = (file1, file2) => {
  const sortedKeys = _.sortBy(_.union(_.keys(file1), _.keys(file2)));

  const diff = sortedKeys.flatMap((key) => {
    if (file1[key] === file2[key]) {
      return { type: 'unchanged', key, value: file1[key] };
    }
    if (!_.has(file1, key)) {
      return { type: 'added', key, value: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { type: 'deleted', key, value: file1[key] };
    }
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return { type: 'nested', key, children: difference(file1[key], file2[key]) };
    }
    return { type: 'changed', key, value: { firstValue: file1[key], secondValue: file2[key] } };
  });

  return diff;
};

export default difference;
