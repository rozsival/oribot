import {
  THIRD_NOTIFICATION_DAYS,
  FIRST_NOTIFICATION_DAYS,
  SECOND_NOTIFICATION_DAYS,
} from './constants';

export type SendMessageProperties = {
  text: string;
};

export type NotificationDay =
  | typeof THIRD_NOTIFICATION_DAYS
  | typeof SECOND_NOTIFICATION_DAYS
  | typeof FIRST_NOTIFICATION_DAYS;
