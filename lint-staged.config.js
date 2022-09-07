const eslint = 'eslint --cache --fix';

module.exports = {
  './**/*.js': eslint,
  './**/*.ts': [() => 'tsc --project tsconfig.json', eslint],
  './**/*.{json,md}': 'prettier --write',
};
