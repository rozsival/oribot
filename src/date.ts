import {
  CLOSURE_DAY,
  FIRST_MESSAGE_DAYS,
  THIRD_NOTIFICATION_DAYS,
  FIRST_NOTIFICATION_DAYS,
  SECOND_NOTIFICATION_DAYS,
} from './constants';

const SUNDAY = 0;
const SUNDAY_DIFF = 2;
const SATURDAY = 6;
const SATURDAY_DIFF = 1;

export const now = () => new Date();

export const getFinalDay = () => {
  const date = now();
  date.setDate(CLOSURE_DAY);
  const day = date.getDay();
  const final = date.getDate();
  if (day === SUNDAY) return final - SUNDAY_DIFF;
  if (day === SATURDAY) return final - SATURDAY_DIFF;
  return final;
};

export const getFirstMessageDay = () => getFinalDay() - FIRST_MESSAGE_DAYS;

export const getFirstNotificationDay = () =>
  getFinalDay() - FIRST_NOTIFICATION_DAYS;

export const getSecondNotificationDay = () =>
  getFinalDay() - SECOND_NOTIFICATION_DAYS;

export const getThirdNotificationDay = () =>
  getFinalDay() - THIRD_NOTIFICATION_DAYS;
