import dotenv from 'dotenv';

dotenv.config();

export const PORT = Number(process.env.PORT ?? '8080');
export const TOKEN = process.env.TOKEN ?? '';
export const TZ = process.env.TZ ?? 'Europe/Prague';
