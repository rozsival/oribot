const apps = ['app', 'server'];
const createApp = (app) => ({
  name: `oribot-${app}`,
  script: `./build/${app}.js`,
  instances: 1,
  watch: false,
  env: {
    NODE_ENV: 'production',
  },
});

module.exports = {
  apps: apps.map(createApp),
};
