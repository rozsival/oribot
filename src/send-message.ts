import { client } from './client';
import { CHANNEL_ID, DEBUG } from './environment';
import { logger } from './logger';
import { SendMessageProperties } from './types';

const handleSend = async ({ text }: SendMessageProperties) =>
  client.chat.postMessage({
    channel: CHANNEL_ID,
    mrkdwn: true,
    text,
  });

const formatError = (error: unknown) => {
  if (error instanceof Error) return error;
  return new Error(String(error));
};

export const sendMessage = async ({ text }: SendMessageProperties) => {
  try {
    if (!DEBUG) await handleSend({ text });
    logger.logSuccess(`SENT: ${text}`);
  } catch (error: unknown) {
    logger.logError(formatError(error));
  }
};
