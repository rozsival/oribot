/* eslint-disable unicorn/no-process-exit */
import { scheduleJob } from 'node-schedule';

import { JOB_HOUR, TZ } from './environment';
import { logger } from './logger';
import { run } from './run';

const job = scheduleJob({ hour: JOB_HOUR, tz: TZ }, run);
logger.logSuccess('Slack bot messaging scheduled');

const shutdownGracefully = () => {
  job.cancel();
  process.exit(0);
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
