/* eslint-disable unicorn/no-process-exit */
import { Range, RecurrenceRule, scheduleJob } from 'node-schedule';

import { MAX_MONTH } from './constants';
import {
  CHANNEL_ID,
  DEBUG,
  DEBUG_DATE,
  JOB_HOUR,
  JOB_MONTH_END,
  JOB_MONTH_START,
  TZ,
} from './environment';
import { logger } from './logger';
import { run } from './run';

const formatMonth = (month: number) => {
  const formatted = month - 1;
  if (formatted < 0) return 0;
  if (formatted > MAX_MONTH) return MAX_MONTH;
  return formatted;
};

const rule = new RecurrenceRule();
rule.hour = JOB_HOUR;
rule.minute = 0;
rule.month = new Range(
  formatMonth(JOB_MONTH_START),
  formatMonth(JOB_MONTH_END),
);
rule.tz = TZ;

const job = scheduleJob(rule, run);

logger.logSuccess('Slack bot messaging scheduled');
logger.logInfo(
  JSON.stringify({ CHANNEL_ID, JOB_MONTH_START, JOB_MONTH_END, JOB_HOUR, TZ }),
);

if (DEBUG) {
  logger.logInfo('Running in DEBUG mode, not actually sending to Slack.');
  if (DEBUG_DATE) logger.logInfo(`Using DEBUG_DATE: ${DEBUG_DATE}`);
  run().catch(logger.logError);
}

const shutdownGracefully = () => {
  job.cancel();
  process.exit(0);
};

process.on('SIGINT', shutdownGracefully);
process.on('SIGTERM', shutdownGracefully);
