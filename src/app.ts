/* eslint-disable unicorn/no-process-exit */
import { scheduleJob } from 'node-schedule';

import { JOB_HOUR, TZ } from './environment';
import { run } from './run';

const job = scheduleJob({ hour: JOB_HOUR, tz: TZ }, run);

const shutdownGracefully = () => {
  job.cancel();
  process.exit(0);
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
