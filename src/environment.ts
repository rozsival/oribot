import dotenv from 'dotenv';

dotenv.config();

export const CHANNEL_ID = process.env.CHANNEL_ID ?? '';
export const CLOSURE_DAY = Number(process.env.CLOSURE_DAY ?? '25');
export const JOB_HOUR = Number(process.env.JOB_HOUR ?? '8');
export const PORT = Number(process.env.PORT ?? '8080');
export const TOKEN = process.env.TOKEN ?? '';
export const TZ = process.env.TZ ?? 'UTC';
