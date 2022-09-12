import dotenv from 'dotenv';

dotenv.config();

export const CHANNEL_ID = process.env.CHANNEL_ID ?? '';
export const CLOSURE_DAY = Number(process.env.CLOSURE_DAY ?? '25');
export const JOB_HOUR = Number(process.env.JOB_HOUR ?? '10');
export const JOB_MONTH_END = Number(process.env.JOB_MONTH_END ?? '11');
export const JOB_MONTH_START = Number(process.env.JOB_MONTH_START ?? '2');
export const PORT = Number(process.env.PORT ?? '8080');
export const TOKEN = process.env.TOKEN ?? '';
export const TZ = process.env.TZ ?? 'Europe/Prague';
