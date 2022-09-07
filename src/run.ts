import {
  FINAL_MESSAGE_DAY,
  FIRST_MESSAGE_DAY,
  FIRST_NOTIFICATION_DAY,
  NOTIFICATION_ONE_DAY,
  NOTIFICATION_THREE_DAYS,
  NOTIFICATION_TWO_DAYS,
  SECOND_NOTIFICATION_DAY,
  THIRD_NOTIFICATION_DAY,
} from './constants';
import {
  createFinalMessage,
  createFirstMessage,
  createNotificationMessage,
} from './messages';
import { sendMessage } from './send-message';

export const run = async () => {
  const date = new Date();
  const day = date.getDate();
  switch (day) {
    case FIRST_MESSAGE_DAY:
      return sendMessage({ text: createFirstMessage() });
    case FIRST_NOTIFICATION_DAY:
      return sendMessage({
        text: createNotificationMessage(NOTIFICATION_THREE_DAYS),
      });
    case SECOND_NOTIFICATION_DAY:
      return sendMessage({
        text: createNotificationMessage(NOTIFICATION_TWO_DAYS),
      });
    case THIRD_NOTIFICATION_DAY:
      return sendMessage({
        text: createNotificationMessage(NOTIFICATION_ONE_DAY),
      });
    case FINAL_MESSAGE_DAY:
      return sendMessage({
        text: createFinalMessage(),
      });
  }
};
