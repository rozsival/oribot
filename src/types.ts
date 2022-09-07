import {
  NOTIFICATION_ONE_DAY,
  NOTIFICATION_THREE_DAYS,
  NOTIFICATION_TWO_DAYS,
} from './constants';

export type SendMessageProperties = {
  text: string;
};

export type NotificationDay =
  | typeof NOTIFICATION_ONE_DAY
  | typeof NOTIFICATION_TWO_DAYS
  | typeof NOTIFICATION_THREE_DAYS;
