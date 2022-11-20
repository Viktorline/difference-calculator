import stylish from './stylish.js';

export default (tree, formatter) => {
  if (formatter === 'stylish') {
    return stylish(tree);
  }
  return 'Wrong formatter';
};
