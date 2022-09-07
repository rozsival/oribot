import { FIRST_NOTIFICATION_DAYS, LAST_NOTIFICATION_DAYS } from './constants';

export type SendMessageProperties = {
  text: string;
};

export type NotificationDay =
  | typeof FIRST_NOTIFICATION_DAYS
  | typeof LAST_NOTIFICATION_DAYS;
