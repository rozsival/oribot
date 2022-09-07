import { client } from './client';
import { CHANNEL_ID } from './constants';
import { SendMessageProperties } from './types';

export const sendMessage = async ({ text }: SendMessageProperties) => {
  const result = await client.chat.postMessage({
    channel: CHANNEL_ID,
    mrkdwn: true,
    text,
  });
  return result.ok;
};
