import {
  DECEMBER,
  FIRST_NOTIFICATION_DAYS,
  JANUARY,
  LAST_NOTIFICATION_DAYS,
} from './constants';
import { formatMonth, getFinalDay, isFinalDayAtWeekend, now } from './date';
import { CLOSURE_DAY } from './environment';
import { NotificationDay } from './types';

const NOTIFICATION_DAY_TO_EMOJI = {
  [FIRST_NOTIFICATION_DAYS]: '2️⃣',
  [LAST_NOTIFICATION_DAYS]: '1️⃣',
};

const getStartMonth = (endMonth: number) => {
  if (endMonth === JANUARY) return DECEMBER;
  return endMonth - 1;
};

const getPeriod = () => {
  const date = now();
  const endDay = CLOSURE_DAY;
  const endMonth = formatMonth(date);
  const startDay = CLOSURE_DAY + 1;
  const startMonth = getStartMonth(endMonth);
  return `${startDay}.${startMonth}. – ${endDay}.${endMonth}. včetně`;
};

export const createFirstMessage = () => {
  const message = [
    `Ahoj <!channel> 👋, blíží se nám další uzávěrka fakturačního období, tentokrát *${getPeriod()}*.`,
  ];
  if (isFinalDayAtWeekend()) {
    message.push(
      `Jelikož nám konec období vychází na víkend, musíme vše uzavřít v pátek.`,
    );
  }
  message.push(
    `Začněte si prosím chystat vaše worklogy a mějte vše *${getFinalDay()}. do 12:00* připraveno. Díky moc! 🫶`,
  );
  return message.join(' ');
};

export const createNotificationMessage = (day: NotificationDay) => {
  const days = day === LAST_NOTIFICATION_DAYS ? 'den' : 'dny';
  const lasts = day === LAST_NOTIFICATION_DAYS ? 'zbývá' : 'zbývají';
  return `📣 <!channel> Do uzávěrky worklogů ${lasts} ${NOTIFICATION_DAY_TO_EMOJI[day]} ${days}`;
};

export const createFinalMessage = () =>
  `Ahoj <!channel> 👋, dnes uzavíráme fakturační období *${getPeriod()}*. Pošlete prosím *nejdéle do 12:00* vaše worklogy sem. 👇`;
