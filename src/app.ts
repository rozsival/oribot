/* eslint-disable unicorn/no-process-exit */
import { Range, RecurrenceRule, scheduleJob } from 'node-schedule';

import {
  CHANNEL_ID,
  JOB_HOUR,
  JOB_MONTH_END,
  JOB_MONTH_START,
  TZ,
} from './environment';
import { logger } from './logger';
import { run } from './run';

const rule = new RecurrenceRule();
rule.hour = JOB_HOUR;
rule.minute = 0;
rule.month = new Range(JOB_MONTH_START, JOB_MONTH_END);
rule.tz = TZ;

const job = scheduleJob(rule, run);

logger.logSuccess('Slack bot messaging scheduled');
logger.logInfo(
  JSON.stringify({ CHANNEL_ID, JOB_MONTH_START, JOB_MONTH_END, JOB_HOUR, TZ }),
);

const shutdownGracefully = () => {
  job.cancel();
  process.exit(0);
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
