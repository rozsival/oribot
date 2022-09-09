module.exports = {
  apps: [
    {
      name: 'oribot',
      script: './build/app.js',
      instances: 1,
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
