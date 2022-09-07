import dotenv from 'dotenv';

dotenv.config();

export const TOKEN = process.env.TOKEN ?? '';
export const TZ = process.env.TZ ?? 'Europe/Prague';
