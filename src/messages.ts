import {
  NOTIFICATION_ONE_DAY,
  NOTIFICATION_THREE_DAYS,
  NOTIFICATION_TWO_DAYS,
} from './constants';
import { NotificationDay } from './types';

const NOTIFICATION_DAY_TO_EMOJI = {
  [NOTIFICATION_ONE_DAY]: '1️⃣',
  [NOTIFICATION_TWO_DAYS]: '2️⃣',
  [NOTIFICATION_THREE_DAYS]: '3️⃣',
};

const getPeriod = () => {
  const date = new Date();
  const endMonth = date.getMonth() + 1;
  const startMonth = endMonth - 1;
  return `26.${startMonth}. – 25.${endMonth}. včetně`;
};

export const createFirstMessage = () =>
  `Ahoj <!channel> 👋, blíží se nám další uzávěrka fakturačního období, tentokrát za *${getPeriod()}*. Začněte si prosím chystat vaše worklogy a mějte vše *25. do 12:00* připraveno. Díky moc! 🫶`;

export const createNotificationMessage = (day: NotificationDay) => {
  const days = day === NOTIFICATION_ONE_DAY ? 'den' : 'dny';
  const lasts = day === NOTIFICATION_ONE_DAY ? 'zbývá' : 'zbývají';
  return `📣 <!channel> Do uzávěrky worklogů ${lasts} ${NOTIFICATION_DAY_TO_EMOJI[day]} ${days}`;
};

export const createFinalMessage = () =>
  `Ahoj <!channel> 👋, dnes uzavíráme fakturační období *${getPeriod()}*. Pošlete prosím *nejdéle do 12:00* vaše worklogy sem. 👇`;
