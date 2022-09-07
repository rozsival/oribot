import { LogLevel, WebClient } from '@slack/web-api';

import { TOKEN } from './environment';

export const client = new WebClient(TOKEN, { logLevel: LogLevel.DEBUG });
