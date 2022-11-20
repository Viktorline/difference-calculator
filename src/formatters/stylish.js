import _ from 'lodash';

const indent = (depth, spaceCount = 4) => ' '.repeat(spaceCount * depth - 2);

const findValue = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const entries = Object.entries(value);
  const lines = entries.map(([key, val]) => `${indent(depth + 1)}  ${key}: ${findValue(val, depth + 1)}`);

  return ['{', ...lines, `${indent(depth)}  }`].join('\n');
};

const stylish = (diff) => {
  const iter = (tree, depth) => tree.map(({ type, key, value }) => {
    const getValue = (val, char) => `${indent(depth)}${char} ${key}: ${findValue(val, depth)}\n`;

    switch (type) {
      case 'json':
        return `${indent(depth)}  ${key}: {\n${iter(value, depth + 1).join('')}${indent(depth)}  }\n`;
      case 'added':
        return getValue(value, '+');
      case 'deleted':
        return getValue(value, '-');
      case 'changed':
        return `${getValue(value.firstValue, '-')}${getValue(value.secondValue, '+')}`;
      case 'unchanged':
        return getValue(value, ' ');
      default:
        throw new Error(`Incorrect type ${type}!`);
    }
  });

  return `{\n${iter(diff, 1).join('')}}`;
};

export default stylish;
