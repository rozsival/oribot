import schedule from 'node-schedule';

import { run } from './run';

const job = schedule.scheduleJob({ hour: 10 }, run);
process.on('SIGINT', () => {
  job.cancel();
  process.exit(0);
});
