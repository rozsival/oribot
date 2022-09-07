import { scheduleJob } from 'node-schedule';

import { TZ } from './environment';
import { run } from './run';

const job = scheduleJob({ hour: 10, tz: TZ }, run);

process.on('SIGINT', () => {
  job.cancel();
  process.exit(0);
});
