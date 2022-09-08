/* eslint-disable unicorn/no-process-exit */
import { scheduleJob } from 'node-schedule';

import { TZ } from './environment';
import { run } from './run';

const job = scheduleJob({ hour: 8, minute: 5, tz: TZ }, run);

const shutdownGracefully = () => {
  job.cancel();
  process.exit(0);
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
