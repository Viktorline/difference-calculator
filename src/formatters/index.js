import stylish from './stylish.js';
import plain from './plain.js';

export default (tree, formatter) => {
  if (formatter === 'stylish') {
    return stylish(tree);
  }
  if (formatter === 'plain') {
    return plain(tree);
  }
  return 'Wrong formatter';
};
