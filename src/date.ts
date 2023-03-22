import {
  FIRST_MESSAGE_DAYS,
  FIRST_NOTIFICATION_DAYS,
  LAST_NOTIFICATION_DAYS,
  SATURDAY,
  SATURDAY_DIFF,
  SUNDAY,
  SUNDAY_DIFF,
} from './constants';
import { CLOSURE_DAY, DEBUG_DATE } from './environment';

export const now = () => (DEBUG_DATE ? new Date(DEBUG_DATE) : new Date());

export const formatMonth = (date: Date) => date.getMonth() + 1;

export const getFinalDay = () => {
  const date = now();
  date.setDate(CLOSURE_DAY);
  const day = date.getDay();
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

export const isFinalDayAtWeekend = () => {
  const date = now();
  date.setDate(CLOSURE_DAY);
  return [SATURDAY, SUNDAY].includes(date.getDay());
};
