import {
  THIRD_NOTIFICATION_DAYS,
  FIRST_NOTIFICATION_DAYS,
  SECOND_NOTIFICATION_DAYS,
} from './constants';
import {
  getFinalDay,
  getFirstMessageDay,
  getFirstNotificationDay,
  getSecondNotificationDay,
  getThirdNotificationDay,
  now,
} from './date';
import {
  createFinalMessage,
  createFirstMessage,
  createNotificationMessage,
} from './messages';
import { sendMessage } from './send-message';

export const run = async () => {
  const date = now();
  const day = date.getDate();
  switch (day) {
    case getFirstMessageDay():
      return sendMessage({ text: createFirstMessage() });
    case getFirstNotificationDay():
      return sendMessage({
        text: createNotificationMessage(FIRST_NOTIFICATION_DAYS),
      });
    case getSecondNotificationDay():
      return sendMessage({
        text: createNotificationMessage(SECOND_NOTIFICATION_DAYS),
      });
    case getThirdNotificationDay():
      return sendMessage({
        text: createNotificationMessage(THIRD_NOTIFICATION_DAYS),
      });
    case getFinalDay():
      return sendMessage({
        text: createFinalMessage(),
      });
  }
};
