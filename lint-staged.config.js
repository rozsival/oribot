const eslint = 'eslint --cache --fix';

module.exports = {
  './**/*.js': eslint,
  './**/*.ts': [() => 'tsc --project tsconfig.json', eslint],
  './**/*.{html,js,json,md,yml}': 'prettier --write',
};
