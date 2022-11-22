import yaml from 'js-yaml';

export default (file, fileExtension) => {
  if (fileExtension === 'json') {
    return JSON.parse(file);
  }
  if (fileExtension === 'yaml' || fileExtension === 'yml') {
    return yaml.load(file);
  }

  throw new Error(`Wrong files extension - '${fileExtension}'! Only .json .yml/.yaml supported`);
};
