import yaml from 'js-yaml';

export default (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === 'yaml' || format === 'yml') {
    return yaml.load(data);
  }

  throw new Error(`Wrong files extension - '${format}'! Only .json .yml/.yaml supported`);
};
