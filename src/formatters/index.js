import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (tree, formatter) => {
  if (formatter === 'stylish') {
    return stylish(tree);
  }
  if (formatter === 'plain') {
    return plain(tree);
  }
  if (formatter === 'json') {
    return json(tree);
  }
  throw new Error(`Unknown format ${formatter}`);
};
