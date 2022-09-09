import { ConsoleLogger, LogLevel } from '@slack/logger';
import { WebClient } from '@slack/web-api';

import { TOKEN } from './environment';
import { logger } from './logger';

const consoleLogger = new ConsoleLogger();
consoleLogger.error = logger.logError;
consoleLogger.info = logger.logInfo;

export const client = new WebClient(TOKEN, {
  logLevel: LogLevel.INFO,
  logger: consoleLogger,
});
