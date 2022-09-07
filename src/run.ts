import { FIRST_NOTIFICATION_DAYS, LAST_NOTIFICATION_DAYS } from './constants';
import {
  getFinalDay,
  getFirstMessageDay,
  getFirstNotificationDay,
  getLastNotificationDay,
  now,
} from './date';
import {
  createFinalMessage,
  createFirstMessage,
  createNotificationMessage,
} from './messages';
import { sendMessage } from './send-message';

const getMessage = () => {
  const date = now();
  const day = date.getDate();
  switch (day) {
    case getFirstMessageDay():
      return createFirstMessage();
    case getFirstNotificationDay():
      return createNotificationMessage(FIRST_NOTIFICATION_DAYS);
    case getLastNotificationDay():
      return createNotificationMessage(LAST_NOTIFICATION_DAYS);
    case getFinalDay():
      return createFinalMessage();
  }
};

export const run = async () => {
  const text = getMessage();
  return text ? sendMessage({ text }) : false;
};
