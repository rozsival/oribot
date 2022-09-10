import {
  FIRST_MESSAGE_DAYS,
  FIRST_NOTIFICATION_DAYS,
  LAST_NOTIFICATION_DAYS,
  SATURDAY,
  SATURDAY_DIFF,
  SUNDAY,
  SUNDAY_DIFF,
} from './constants';
import { CLOSURE_DAY } from './environment';

export const now = () => new Date();

export const formatDay = (date: Date) => date.getDay() + 1;

export const formatMonth = (date: Date) => date.getMonth() + 1;

export const getFinalDay = () => {
  const date = now();
  date.setDate(CLOSURE_DAY);
  const day = formatDay(date);
  const final = date.getDate();
  if (day === SATURDAY) return final - SATURDAY_DIFF;
  if (day === SUNDAY) return final - SUNDAY_DIFF;
  return final;
};

export const getFirstMessageDay = () => getFinalDay() - FIRST_MESSAGE_DAYS;

export const getFirstNotificationDay = () =>
  getFinalDay() - FIRST_NOTIFICATION_DAYS;

export const getLastNotificationDay = () =>
  getFinalDay() - LAST_NOTIFICATION_DAYS;
