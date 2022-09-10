/* eslint-disable unicorn/no-process-exit */
import { Range, scheduleJob } from 'node-schedule';

import { JOB_HOUR, JOB_MONTH_END, JOB_MONTH_START, TZ } from './environment';
import { logger } from './logger';
import { run } from './run';

const job = scheduleJob(
  { hour: JOB_HOUR, month: new Range(JOB_MONTH_START, JOB_MONTH_END), tz: TZ },
  run,
);
logger.logSuccess('Slack bot messaging scheduled');

const shutdownGracefully = () => {
  job.cancel();
  process.exit(0);
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
