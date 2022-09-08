const eslint = 'eslint --cache --fix';

module.exports = {
  './**/*.js': eslint,
  './**/*.ts': [() => 'tsc --project tsconfig.json', eslint],
  './**/*.{html,json,md,yml}': 'prettier --write',
};
